import React from "react";
import { useState } from "react";
import { Box, TextField } from "@mui/material";
import { AllContextState } from "../context/ContextAPI";
import SelectButton from "../Components/SelectButton";
// --------------for firebase to register user------------------------

import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

// --------------for firebase to register user------------------------

export default function Login({ handleClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAlert } = AllContextState();

  const handleSubmit = async () => {
    if (!email || !password) {
      setAlert({
        open: true,
        message: "Please fill all the Fields",
        type: "error"
      });
      return;
    }

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      setAlert({
        open: true,
        message: `Sign In Successful. Welcome ${result.user.email}`,
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
        gap: "20px",
        transition: "all 0.5s"
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

      <SelectButton
        onClick={handleSubmit}
        style={{
          backgroundColor: "blue",
          "&:hover": {
            backgroundColor: "#0d0daa"
          }
        }}
      >
        Login
      </SelectButton>
    </Box>
  );
}
