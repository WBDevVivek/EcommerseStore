import React from "react";

import { makeStyles } from "@mui/styles";

import { Grid, Paper } from "@mui/material";

import SliderOne from "../Components/Banner/SliderOne";
import { AllContextState } from "../context/ContextAPI";

const useStyles = makeStyles({
  ViewAll: {
    width: "100vw",
    height: "auto",
    paddingBottom: "16px"
  }
});

export default function ViewAll() {
  const classes = useStyles();

  const { trendingProdFilter } = AllContextState();
  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.ViewAll}
        style={{ marginTop: "65px" }}
        justifyContent="center"
      >
        {trendingProdFilter.map((value, ind) => (
          <Grid
            key={ind}
            item
            sx={{
              width: "300px",
              height: "300px",
              borderRadius: "20px"
            }}
          >
            <Paper
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff"
              }}
            >
              <SliderOne
                coin={value}
                style={{
                  width: "300px",
                  height: "300px"
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
