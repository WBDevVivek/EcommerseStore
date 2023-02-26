import React from "react";

import { AppBar } from "@mui/material";

export default function Footer() {
  return (
    <AppBar
      sx={{
        position: "relative",
        bottom: "0px",
        fontFamily: "Montserrat",
        width: "100%",
        height: "20px",
        backgroundColor: "#000",
        color: "#fff",
        "&:hover": {
          backgroundColor: "",
          color: ""
        }
      }}
    >
      <span
        style={{
          height: "100%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center"
        }}
      >
        copyright @ <b>Logo</b>.
      </span>
    </AppBar>
  );
}
