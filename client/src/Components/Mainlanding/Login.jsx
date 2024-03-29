import React, {useEffect} from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import jwt_decode, { InvalidTokenError } from "jwt-decode";

const Signup = ({setToken}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(true);
    }
  }, [setToken]);

async function loginUser(event) {
    event.preventDefault();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.user) {
        localStorage.setItem('token', data.user);
        alert('Login successful');
        navigate("/");
        setToken(true);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      // Handle invalid token error more gracefully
      if (error instanceof InvalidTokenError) {
        setError('Invalid token. Please try logging in again.');
      } else {
        console.error('An unexpected error occurred:', error);
        setError('An unexpected error occurred. Please try again later.');
      }
    }
  }
  console.log(localStorage.getItem('token'));
  console.log(jwt_decode(localStorage.getItem('token')));
  return (
    <>
      <form onSubmit={loginUser}>
        <div class="relative mb-5 flex justify-center align-middle">
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            required
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
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
          <Button
            type="submit"
            value="Login"
            variant="contained"
            sx={{ width: "43ch" }}
          >
            Login
          </Button>
        </div>
        {error && (
          <div class="relative mb-6 flex justify-center align-middle">
            <p style={{ color: "red" }}>{error}</p>
          </div>
        )}
        <div class="relative mb-6 flex justify-center align-middle">
          <h4 className="text-sm text-white">Not a member?</h4>
          <Link
            to="/register"
            className="text-sm text-blue-400 underline px-2 cursor-pointer"
          >
            Register
          </Link>
        </div>
      </form>
    </>
  );
};

export default Signup;