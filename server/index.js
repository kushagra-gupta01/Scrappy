const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/user.models');
const Event = require('./models/event.models');
const path = require("path");
const nodemailer = require("nodemailer");
const { animationControls } = require('framer-motion');

app.use(cors());
app.use(express.json());
// mongoose.connect('mongodb://localhost:27017/');
mongoose.connect("mongodb+srv://kushagra:cncf@cluster0.cajno36.mongodb.net/?retryWrites=true&w=majority");
app.use(express.static('build'));

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: newPassword,
            username: req.body.username,
            locality: req.body.locality,
            points: 0
        })
        // const token = jwt.sign(
        //     {
        //         email: req.body.email,
        //         name: req.body.name,
        //         locality: req.body.locality,
        //         username: req.body.username,
        //         points: req.body.points
        //     },
        //     'secret123'
        // )
        res.json({ status: 'ok'})
        console.log(newPassword);
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})


app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
    })
    if (!user) {
        return res.status(401).json({error: 'Invalid login' })
    }
    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )
    if (isPasswordValid) {
        const token = jwt.sign(
            {
                email: user.email,
                name: user.name,
                locality: user.locality,
                username: user.username,
                points: user.points
            },
            'secret123'
        )
        return res.status(200).json({ user: token })
    } else {
        return res.status(401).json({ user: false })
    }
})


app.get('/api/profile', async (req, res) => {
	const token = req.headers['x-access-token']
	try {
		const decoded = jwt.verify(token, 'secret123')
		const email = decoded.email
        const fullname = decoded.fullname
        const locality = decoded.locality
        const username = decoded.username
        // const points = decoded.points
		const user = await User.findOne({ email: email, fullname: fullname, locality: locality, username: username})
		return res.json({ status: 'ok', user: user})
	} 
    catch (error) {
		console.log(error)
		res.json({ status: 'error', error: 'invalid token' })
	}
})


app.post('/api/events', async (req,res) => {
    console.log(req.body);
    try {
        const event = await Event.create({
            title: req.body.title,
            description: req.body.description,
            date: req.body.date,
            time: req.body.time,
            location: req.body.location
        })
        res.status(200).json({success: true, data: event})
    } 
    catch (error) {
        res.status(401).json({success: false})
    }
})


app.get('/api/eventscreated', async (req,res) => {
    // console.log(req.body);
    try {
        const events = await Event.find({})
        res.status(200).json({data: events, success: true})
    } 
    catch (error) {
        res.status(401).json({ success: false, error: 'Event already exist' })
    }
})


app.post('/api/points', async (req, res) => {
    const token = req.headers['x-access-token'];
  
    try {
      const decoded = jwt.verify(token, 'secret123');
      const email = decoded.email;
      console.log(email);
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      user.points = user.points + req.body.points;
      let result = await user.save();
      return res.json({ points: user.points }); 
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error: 'Invalid token' });
    }
  });
  
  
  
app.get('/api/leaderboard', async (req, res) => {
    try {
      const users = await User.find().sort({ points: -1 }).exec();
      const leaderboard = users.map(user => ({
        username: user.username,
        points: user.points,
        location: user.locality,
      }));
      res.json(leaderboard);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });


app.get('/api/logout',(req,res)=>{
    const token = req.headers['x-access-token']
    res.cookie(token,'', { maxAge: 1 });
    res.redirect('/');
}) 


const verificationCodes = {};

app.post("/api/send-verification-code", (req, res) => {
  const { email } = req.body;
  const verificationCode = Math.floor(100000 + Math.random() * 900000);
  verificationCodes[email] = verificationCode;

  const transporter = nodemailer.createTransport({
    host: "smtp.elasticemail.com",
    port: 2525,
    auth: {
      user: "aman.kumarh2404@gmail.com",
      pass: "90B0B9AD9E332B7FE5D9762BD309F8BBD0A4",
    },
  });

  const mailOptions = {
    from: "aman.kumarf2404@gmail.com",
    to: email,
    subject: "Email Verification",
    text: `Your verification code is: ${verificationCode}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending verification code:", error);
      res.status(500).json({ status: "error" });
    } else {
      console.log("Verification code sent successfully");
      res.json({ status: "ok" });
    }
  });
});


app.post("/api/verify-email", (req, res) => {
  const { email, verificationCode } = req.body;

  if (verificationCodes[email] === verificationCode) {
    res.json({ status: "ok" });
  } else {
    res.status(400).json({ status: "error" });
  }
});


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});


app.listen(1337, () => {
    console.log(`server on running on port ${1337}`)
})  

app.post("/api/donate", async (req, res) => {
  try {
    const { name, locality, phno, amt, donationType, token } = req.body;

    const charge = await stripe.charges.create({
      amount: amt * 100,
      currency: "usd",
      description: `Donation for ${donationType}`,
      source: token.id,
    });

    console.log("Payment Successful:", charge);

    res.status(200).json({ success: true, message: "Payment successful" });
  } catch (error) {
    console.error("Payment Error:", error);

    res.status(500).json({ success: false, error: "Payment failed"});
  }
});