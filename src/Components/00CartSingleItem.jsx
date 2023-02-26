import React from "react";

import { makeStyles } from "@mui/styles";

import { Grid } from "@mui/material";

const useStyles = makeStyles({
  CartSingleItem: {
    width: "100%",
    height: "auto",
    border: "1px solid red"
  }
});

export default function CartSingleItem() {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.CartSingleItem}
        style={{ marginTop: "0px" }}
        justifyContent="center"
      ></Grid>
    </>
  );
}
