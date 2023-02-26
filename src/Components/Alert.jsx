import React from "react";
import { Snackbar } from "@mui/material";
import { AllContextState } from "../context/ContextAPI";
import MuiAlert from "@mui/material/Alert";

export default function Alert() {
  const { alert, setAlert } = AllContextState();

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setAlert({ open: false });
  };

  return (
    <>
      <Snackbar
        open={alert.open}
        autoHideDuration={6000}
        onClose={handleCloseAlert}
      >
        <MuiAlert
          onClose={handleCloseAlert}
          elevation={10}
          variant="filled"
          severity={alert.type}
        >
          {alert.message}
        </MuiAlert>
      </Snackbar>
    </>
  );
}
