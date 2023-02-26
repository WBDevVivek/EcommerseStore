import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Banner from "../Components/Banner/Banner";
import ProductDetails from "../Components/ProductDetails";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  Contents: {
    width: "90vw",
    maxWidth: "950px",
    minHeight: "90vh",
    margin: "0px auto",
    marginTop: "65px"
  }
});

export default function Homepage() {
  const classes = useStyles();

  const { paramProductID } = useParams();

  return (
    <>
      <Box
        component="div"
        className={classes.Contents}
        sx={{
          "@media (max-width: 450px)": {
            width: "100vw"
          }
        }}
      >
        <Banner />
        <ProductDetails paramProductID={paramProductID} />
      </Box>
    </>
  );
}
