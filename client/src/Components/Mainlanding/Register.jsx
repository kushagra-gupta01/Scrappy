import React, { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [locality, setLocality] = useState('');
  const [username, setUsername] = useState('');

  const getLocation = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=cbcbc0ba997841f7a3fcab439f8b6a66`
      );
      const result = await response.json();
  
      if (result.features.length) {
        const address = result.features[0].properties.city;
        setLocality(address)
      } else {
        console.log("no address found");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      try {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        await getLocation(lat, lng);
      } catch (error) {
        console.log("Geolocation error:", error);
      }
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };


  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
        username,
        locality
      }),
    });

    const data = await response.json();

    if (data.status === 'ok') {
      // localStorage.setItem("token", data.token)
      alert('Registered successful');
      // setToken(true)
      navigate('/');
    }
  }

  return (
    <>
      <form onSubmit={registerUser}>
        <div class="relative mb-5 flex justify-center align-middle">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            required
            sx={{
              input: { color: "white" },
              width: "43ch",
              "& .MuiInputLabel-root": { color: "#757575" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#64b5f6" },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "rgb(66, 153, 225)",
                },
              },
            }}
          />
        </div>
        <div class="relative mb-6 flex justify-center align-middle">
          <TextField
          required
            value={locality}
            onChange={(e) => setLocality(e.target.value)}
            onClick={handleSubmit}
            type="text"
            id="outlined-basic"
            label="Locality"
            variant="outlined"
            sx={{
              input: { color: "white" },
              width: "43ch",
              "& .MuiInputLabel-root": { color: "#757575" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#64b5f6" },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "rgb(66, 153, 225)",
                },
              },
            }}
          />
        </div>
        <div class="relative mb-6 flex justify-center align-middle">
          <TextField
required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"

            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{
              input: { color: "white" },
              width: "43ch",
              "& .MuiInputLabel-root": { color: "#757575" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#64b5f6" },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "rgb(66, 153, 225)",
                },
              },
            }}
          />
        </div>
        <div class="relative mb-6 flex justify-center align-middle">
          <TextField
          required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"

            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{
              input: { color: "white" },
              width: "43ch",
              "& .MuiInputLabel-root": { color: "#757575" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#64b5f6" },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "rgb(66, 153, 225)",
                },
              },
            }}
          />
        </div>

        <div class="relative mb-6 flex justify-center align-middle">
          <TextField
          required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="outlined-password-input"
            label="Password"
            autoComplete="current-password"
            sx={{
              input: { color: "white" },
              width: "43ch",
              "& .MuiInputLabel-root": { color: "#757575" },
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "#64b5f6" },
              },
              "& .MuiOutlinedInput-root:hover": {
                "& > fieldset": {
                  borderColor: "rgb(66, 153, 225)",
                },
              },
            }}
          />
        </div>
        <div class="relative mb-6 flex justify-center align-middle">
          <Button type="submit" value="Register" variant="contained" sx={{ width: "43ch" }}>
            Sign Up
          </Button>
        </div>
        <div class="relative mb-6 flex justify-center align-middle">
          <h4 className="text-sm text-white">Already a member?</h4>
          <Link to="/" className="text-sm text-blue-400 underline px-2 cursor-pointer">
            Login
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signup;

