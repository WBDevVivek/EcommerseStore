import React from "react";
import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { AllContextState } from "../context/ContextAPI";
import SelectButton from "../Components/SelectButton";
// --------------for firebase to register user------------------------

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

// --------------for firebase to register user------------------------

export default function Signup({ handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { setAlert } = AllContextState();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: "Passwords do not match",
        type: "error"
      });
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setAlert({
        open: true,
        message: `Sign Up Successful. Welcome ${result.user.email}`,
        type: "success"
      });
      handleClose();
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error"
      });
      return;
    }
  };

  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <TextField
        variant="outlined"
        type="email"
        label="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        inputProps={{ sx: { color: "black" } }}
        InputLabelProps={{
          style: { color: "black" }
        }}
        sx={{
          marginBottom: 2,

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black"
            },
            "&:hover fieldset": {
              borderColor: "black"
            },
            "&.Mui-focused fieldset": {
              borderColor: "black"
            }
          }
        }}
      />
      <TextField
        variant="outlined"
        label="Enter Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        inputProps={{ sx: { color: "black" } }}
        InputLabelProps={{
          style: { color: "black" }
        }}
        sx={{
          marginBottom: 2,

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black"
            },
            "&:hover fieldset": {
              borderColor: "black"
            },
            "&.Mui-focused fieldset": {
              borderColor: "black"
            }
          }
        }}
      />
      <TextField
        variant="outlined"
        label="Confirm Password"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        fullWidth
        inputProps={{ sx: { color: "black" } }}
        InputLabelProps={{
          style: { color: "black" }
        }}
        sx={{
          marginBottom: 2,

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "black"
            },
            "&:hover fieldset": {
              borderColor: "black"
            },
            "&.Mui-focused fieldset": {
              borderColor: "black"
            }
          }
        }}
      />

      <SelectButton
        onClick={handleSubmit}
        style={{
          backgroundColor: "blue",
          "&:hover": {
            backgroundColor: "#0d0daa"
          }
        }}
      >
        Sign Up
      </SelectButton>
    </Box>
  );
}
