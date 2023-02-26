import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  IconComp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#ecf0f1",
    cursor: "pointer",
    border: "0.5px solid #bdc3c7",
    boxShadow: "0px 5px 5px #bdc3c7"
  }
});

export default function IconComp({ children, style, onClick }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.IconComp} style={style} onClick={onClick}>
        {children}
      </div>
    </>
  );
}
