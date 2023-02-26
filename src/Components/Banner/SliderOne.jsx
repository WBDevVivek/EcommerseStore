import React from "react";
import { makeStyles } from "@mui/styles";

import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBarChart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

import IconComp from "../IconComp";

import { useNavigate } from "react-router-dom";

import { Grid, Paper } from "@mui/material";

const useStyles = makeStyles({
  SliderOne: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
    cursor: "pointer",
    backgroundColor: "#ecf0f1",
    padding: "3%",
    fontSize: "80%",
    boxShadow: "1px 5px 10px #4b5a65"
  },
  SliderOneNavLink: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer"
  },
  SliderOneTop: {
    width: "75%",
    height: "10%",
    display: "flex",
    justifyContent: " space-between",
    alignItems: "center",
    alignSelf: "flex-start",
    "@media (max-width: 980px)": {
      width: "60%"
    },
    "@media (max-width: 920px)": {
      width: "65%"
    },
    "@media (max-width: 850px)": {
      width: "70%"
    },
    "@media (max-width: 790px)": {
      width: "75%"
    },
    "@media (max-width: 750px)": {
      width: "80%"
    },
    "@media (max-width: 700px)": {
      width: "60%"
    },
    "@media (max-width: 630px)": {
      width: "65%"
    },
    "@media (max-width: 570px)": {
      width: "70%"
    },
    "@media (max-width: 530px)": {
      width: "75%"
    },
    "@media (max-width: 520px)": {
      width: "55%"
    }
  },
  SliderOneIMGDiv: {
    width: "100%",
    height: "60%",
    display: "flex",
    justifyContent: "space-between"
  },

  SliderOneIMG: {
    width: "100%",
    height: "100%",
    backgroundSize: "100% 100%",
    backgroundPosition: "center center",
    objectFit: "contain",
    backgroundAttachment: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  SliderOneTitle: {
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  SliderOnePriceRange: {
    width: "100%",
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  twoRIcons: {
    width: "auto",
    height: "30%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: "2px",
    right: "2px"
  },
  oneIcon: {
    width: "40px",
    height: "40px"
  }
});

export default function SliderOne({ coin, style }) {
  const classes = useStyles();
  const navigate = useNavigate();

  const iconArray = [
    {
      icon: <BsBarChart size={25} color="#bdc3c7" />,
      onClick: () => {
        alert(`chart Called... ${coin.id}`);
      }
    },
    {
      icon: <AiOutlineHeart size={25} color="#bdc3c7" />,
      onClick: () => {
        alert(`addToFav Called... ${coin.id}`);
      }
    }
  ];

  return (
    <>
      <Grid
        container
        className={classes.ViewAll}
        style={{ marginTop: "0px" }}
        justifyContent="center"
      >
        <Grid item sx={{}}>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item sx={style}>
              <Paper
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff"
                }}
              >
                <div
                  className={classes.SliderOne}
                  style={{
                    borderRadius: "20px"
                  }}
                >
                  <div className={classes.SliderOneTop}>
                    <HiOutlineShoppingBag size={25} color="#bdc3c7" />
                    <b style={{ fontSize: "100%" }}>Ends : </b>
                    <span style={{ fontSize: "80%" }}>
                      {" "}
                      Jan 08, Fri, 00:00PM
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        width: "15px",
                        height: "15px",
                        borderRadius: "50%",
                        backgroundColor: "black",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        position: "absolute",
                        top: "8%",
                        left: "8%"
                      }}
                    >
                      +2
                    </span>
                  </div>

                  <div
                    className={classes.SliderOneIMGDiv}
                    onClick={() => navigate(`/${coin.id}`)}
                  >
                    <img
                      src={coin.images[0]}
                      alt={coin.id}
                      className={classes.SliderOneIMG}
                    />
                  </div>
                  <div
                    className={classes.SliderOneTitle}
                    onClick={() => navigate(`/${coin.id}`)}
                  >
                    {coin?.title}
                  </div>
                  <div className={classes.SliderOnePriceRange}>
                    <div style={{ fontSize: "70%" }}>Online Price Range</div>
                    <div>
                      $182<sup style={{ fontSize: "15px" }}>99</sup> - $283
                      <sup style={{ fontSize: "15px" }}>99</sup>
                    </div>
                  </div>

                  <div className={classes.twoRIcons}>
                    {iconArray.map((val, ind) => {
                      return (
                        <IconComp
                          key={ind}
                          onClick={val.onClick}
                          style={{
                            width: "40px",
                            height: "40px"
                          }}
                        >
                          {val.icon}
                        </IconComp>
                      );
                    })}
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
