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




// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [locality, setLocality] = useState("");
//   const [username, setUsername] = useState("");
//   const [verificationCode, setVerificationCode] = useState("");
//   const [emailVerified, setEmailVerified] = useState(false);

//   const getLocation = async (lat, lng) => {
//     try {
//       const response = await fetch(
//         `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=cbcbc0ba997841f7a3fcab439f8b6a66`
//       );
//       const result = await response.json();

//       if (result.features.length) {
//         const address = result.features[0].properties.city;
//         setLocality(address);
//       } else {
//         console.log("no address found");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (navigator.geolocation) {
//       try {
//         const position = await new Promise((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;
//         await getLocation(lat, lng);
//       } catch (error) {
//         console.log("Geolocation error:", error);
//       }
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   };

//   const handleSendVerificationCode = async () => {
//     try {
//       const response = await fetch("/api/send-verification-code", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === "ok") {
//         alert("Verification code sent successfully");
//       } else {
//         alert("Failed to send verification code");
//       }
//     } catch (error) {
//       console.log("Error sending verification code:", error);
//     }
//   };

//   const handleVerifyEmail = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/verify-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           verificationCode,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === "ok") {
//         alert("Email verified successfully");
//         setEmailVerified(true);
//       } else {
//         alert("Failed to verify email");
//       }
//     } catch (error) {
//       console.log("Error verifying email:", error);
//     }
//   };

//   const handleRegisterUser = async (event) => {
//     event.preventDefault();


//     if (!emailVerified) {
//       alert("Please verify your email before registering");
//       return;
//     }

//     try {
//       const response = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           username,
//           locality,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === "ok") {
//         alert("Registered successfully");
//         navigate("/");
//       }
//     } catch (error) {
//       console.log("Error registering user:", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleRegisterUser}>
//         <div className="relative mb-5 flex justify-center align-middle">
//           <TextField
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             id="outlined-basic"
//             label="Full Name"
//             variant="outlined"
//             required
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <TextField
//             required
//             value={locality}
//             onChange={(e) => setLocality(e.target.value)}
//             onClick={handleSubmit}
//             type="text"
//             id="outlined-basic"
//             label="Locality"
//             variant="outlined"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <TextField
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             type="text"
//             id="outlined-basic"
//             label="Username"
//             variant="outlined"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <TextField
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="outlined-basic"
//             label="Email"
//             variant="outlined"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//           {!emailVerified && (
//             <Button
//               onClick={handleSendVerificationCode}
//               variant="contained"
//               sx={{ ml: 2 }}
//             >
//               Send Verification Code
//             </Button>
//           )}
//         </div>
//         {emailVerified && (
//           <div className="relative mb-6 flex justify-center align-middle">
//             <TextField
//               required
//               value={verificationCode}
//               onChange={(e) => setVerificationCode(e.target.value)}
//               type="text"
//               id="outlined-basic"
//               label="Verification Code"
//               variant="outlined"
//               sx={{
//                 input: { color: "white" },
//                 width: "43ch",
//                 "& .MuiInputLabel-root": { color: "#757575" },
//                 "& .MuiOutlinedInput-root": {
//                   "& > fieldset": { borderColor: "#64b5f6" },
//                 },
//                 "& .MuiOutlinedInput-root:hover": {
//                   "& > fieldset": {
//                     borderColor: "rgb(66, 153, 225)",
//                   },
//                 },
//               }}
//             />
//             <Button
//               onClick={handleVerifyEmail}
//               variant="contained"
//               sx={{ ml: 2 }}
//             >
//               Verify Email
//             </Button>
//           </div>
//         )}
//         <div className="relative mb-6 flex justify-center align-middle">
//           <TextField
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             id="outlined-password-input"
//             label="Password"
//             autoComplete="current-password"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <Button
//             type="submit"
//             value="Register"
//             variant="contained"
//             sx={{ width: "43ch" }}
//           >
//             Sign Up
//           </Button>
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <h4 className="text-sm text-white">Already a member?</h4>
//           <Link
//             to="/"
//             className="text-sm text-blue-400 underline px-2 cursor-pointer"
//           >
//             Login
//           </Link>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Signup;





// import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const navigate = useNavigate();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [locality, setLocality] = useState("");
//   const [username, setUsername] = useState("");
//   const [verificationCode, setVerificationCode] = useState("");
//   const [emailVerified, setEmailVerified] = useState(false);

//   const getLocation = async (lat, lng) => {
//     try {
//       const response = await fetch(
//         `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&apiKey=cbcbc0ba997841f7a3fcab439f8b6a66`
//       );
//       const result = await response.json();

//       if (result.features.length) {
//         const address = result.features[0].properties.city;
//         setLocality(address);
//       } else {
//         console.log("no address found");
//       }
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (navigator.geolocation) {
//       try {
//         const position = await new Promise((resolve, reject) => {
//           navigator.geolocation.getCurrentPosition(resolve, reject);
//         });
//         const lat = position.coords.latitude;
//         const lng = position.coords.longitude;
//         await getLocation(lat, lng);
//       } catch (error) {
//         console.log("Geolocation error:", error);
//       }
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//   };

//   const handleSendVerificationCode = async () => {
//     try {
//       const response = await fetch("/api/send-verification-code", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === "ok") {
//         alert("Verification code sent successfully");
//       } else {
//         alert("Failed to send verification code");
//       }
//     } catch (error) {
//       console.log("Error sending verification code:", error);
//     }
//   };

//   const handleVerifyEmail = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("/api/verify-email", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email,
//           verificationCode,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === "ok") {
//         alert("Email verified successfully");
//         setEmailVerified(true);
//       } else {
//         alert("Failed to verify email");
//       }
//     } catch (error) {
//       console.log("Error verifying email:", error);
//     }
//   };

//   const handleRegisterUser = async (event) => {
//     event.preventDefault();

//     if (!emailVerified) {
//       alert("Please verify your email before registering");
//       return;
//     }

//     try {
//       const response = await fetch("/api/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           password,
//           username,
//           locality,
//         }),
//       });

//       const data = await response.json();

//       if (data.status === "ok") {
//         alert("User registered successfully");
//         navigate("/login");
//       } else {
//         alert("Failed to register user");
//       }
//     } catch (error) {
//       console.log("Error registering user:", error);
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <TextField
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             type="text"
//             id="outlined-basic"
//             label="Name"
//             variant="outlined"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <TextField
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             type="email"
//             id="outlined-basic"
//             label="Email"
//             variant="outlined"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//           {!emailVerified && (
//             <Button
//               onClick={handleSendVerificationCode}
//               variant="contained"
//               sx={{ ml: 2 }}
//             >
//               Send Verification Code
//             </Button>
//           )}
//         </div>
//         {!emailVerified && (
//           <div className="relative mb-6 flex justify-center align-middle">
//             <TextField
//               required
//               value={verificationCode}
//               onChange={(e) => setVerificationCode(e.target.value)}
//               type="text"
//               id="outlined-basic"
//               label="Verification Code"
//               variant="outlined"
//               sx={{
//                 input: { color: "white" },
//                 width: "43ch",
//                 "& .MuiInputLabel-root": { color: "#757575" },
//                 "& .MuiOutlinedInput-root": {
//                   "& > fieldset": { borderColor: "#64b5f6" },
//                 },
//                 "& .MuiOutlinedInput-root:hover": {
//                   "& > fieldset": {
//                     borderColor: "rgb(66, 153, 225)",
//                   },
//                 },
//               }}
//             />
//             <Button
//               onClick={handleVerifyEmail}
//               variant="contained"
//               sx={{ ml: 2 }}
//             >
//               Verify Email
//             </Button>
//           </div>
//         )}
//         <div className="relative mb-6 flex justify-center align-middle">
//           <TextField
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             type="password"
//             id="outlined-basic"
//             label="Password"
//             variant="outlined"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <TextField
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             type="text"
//             id="outlined-basic"
//             label="Username"
//             variant="outlined"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//         <TextField
//             required
//             value={locality}
//             onChange={(e) => setLocality(e.target.value)}
//             onClick={handleSubmit}
//             type="text"
//             id="outlined-basic"
//             label="Locality"
//             variant="outlined"
//             sx={{
//               input: { color: "white" },
//               width: "43ch",
//               "& .MuiInputLabel-root": { color: "#757575" },
//               "& .MuiOutlinedInput-root": {
//                 "& > fieldset": { borderColor: "#64b5f6" },
//               },
//               "& .MuiOutlinedInput-root:hover": {
//                 "& > fieldset": {
//                   borderColor: "rgb(66, 153, 225)",
//                 },
//               },
//             }}
//           />
//         </div>
//         <div className="relative mb-6 flex justify-center align-middle">
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{
//               backgroundColor: "#64b5f6",
//               width: "43ch",
//               "&:hover": {
//                 backgroundColor: "rgb(66, 153, 225)",
//               },
//             }}
//           >
//             Sign Up
//           </Button>
//         </div>
//       </form>
//       <div className="flex justify-center align-middle">
//         <Link to="/login">
//           <Button variant="text" sx={{ color: "white" }}>
//             Already have an account? Login
//           </Button>
//         </Link>
//       </div>
//     </>
//   );
// };

// export default Signup;
