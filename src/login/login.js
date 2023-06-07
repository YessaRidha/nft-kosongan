import React, { useState } from "react";
import "./login.css";
import { Box, Typography, TextField, Button, Snackbar } from "@mui/material";
import { Divider } from "@mui/material";
import { Alert } from "@mui/material";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import HowToRegOutlinedIcon from "@mui/icons-material/HowToRegOutlined";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    setIsLoggedIn(true);
    setOpenSnackbar(true);
  };
  const resetState = () => {
    setIsSignup(!isSignup);
    setInput({ name: "", email: "", password: "" });
    setIsLoggedIn(false);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          className="box"
          sx={{
            boxShadow: "3px 3px 10px 2px rgba(0, 0, 0, 0.5)",
            borderRadius: "8px",
            padding: "20px"
          }}
        >
          <Typography className="typography" variant="h3">
            {isSignup ? "Sign Up" : "Sign In"}
          </Typography>
          <Divider
            margin="normal"
            style={{
              marginTop: 10,
              marginBottom: 5,
              borderBottom: "2px solid black",
              borderBottomColor: "rgb(37, 78, 114)"
            }}
          />
          <h3>Email</h3>
          <TextField
            className="textfield"
            name="email"
            onChange={handleChange}
            value={input.email}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <h3>Password</h3>
          <TextField
            className="textfield"
            name="password"
            onChange={handleChange}
            value={input.password}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          {isSignup && <h3>Username</h3>}
          {isSignup && (
            <TextField
              className="textfield"
              name="name"
              onChange={handleChange}
              value={input.name}
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Username"
            />
          )}
          <Button
            endIcon={isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />}
            type="submit"
            sx={{
              marginTop: 3,
              borderRadius: 3,
              marginBottom: 2
            }}
            variant="contained"
            color="info"
          >
            {isSignup ? "Create" : "Login"}
          </Button>
          <Button
            endIcon={isSignup ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />}
            onClick={resetState}
            sx={{
              marginBottom: 2
            }}
          >
            {isSignup ? "Login" : "Didn't have an account? Sign Up"}
          </Button>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Alert onClose={handleSnackbarClose} severity="success">
              Login successful!
            </Alert>
          </Snackbar>
        </Box>
      </form>
    </div>
  );
};

export default Login;
