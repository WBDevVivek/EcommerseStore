import React from "react";
import Slider from "./Slider";
import { Container, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import { AllContextState } from "../../context/ContextAPI";
import SelectComp from "../SelectComp";

const useStyles = makeStyles({
  banner: {
    width: "100%"
  },
  bannerContainer: {
    width: "100%",
    minHeight: 300,
    display: "flex",
    flexDirection: "column"
  },
  tagLineDiv: {
    width: "100%",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.6%",
    backgroundColor: "#ecf0f1",
    padding: "1%",
    boxShadow: "1px 5px 10px #4b5a65",
    fontSize: "1.5rem"
  },
  tagLine: {
    width: "15%",
    height: "100%",
    textTransform: "capitalize",
    fontFamily: "mantserrat",
    lineHeight: "0px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 450px)": {
      fontSize: "90%"
    }
  },
  OtherField: {
    width: "30%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "70%",
    "@media (min-width: 900px)": {
      width: "35%"
    },
    "@media (max-width: 900px)": {
      width: "40%"
    },

    "@media (max-width: 800px)": {
      width: "45%"
    },
    "@media (max-width: 650px)": {
      width: "50%"
    },
    "@media (max-width: 580px)": {
      width: "55%"
    },
    "@media (max-width: 550px)": {
      width: "60%"
    },
    "@media (max-width: 500px)": {
      width: "70%"
    },
    "@media (max-width: 450px)": {
      fontSize: "65%"
    },
    "@media (max-width: 400px)": {
      width: "75%",
      fontSize: "60%"
    },
    "@media (max-width: 350px)": {
      width: "70%",
      fontSize: "55%"
    }
  },
  topSliderDiv: {
    width: "100%",
    boxShadow: "1px 5px 10px #4b5a65",
    borderRadius: "20px"
  },
  SelectBox: {
    fontSize: "1rem",
    "@media (max-width: 350px)": {
      fontSize: "0.8rem"
    }
  }
});

export default function Banner() {
  const bannerClasses = useStyles();

  const {
    allProductsCategoryUnic,
    categoryFilterFun,
    selectCatValue,
    setSelectCatValue
  } = AllContextState();

  return (
    <>
      <Container className={bannerClasses.bannerContainer}>
        <div className={bannerClasses.tagLineDiv}>
          <div className={bannerClasses.tagLine}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "darkgrey",
                margin: "-5px 0",
                fontSize: "65%"
              }}
            >
              What's...
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                margin: "-5px",
                fontSize: "80%"
              }}
            >
              Trending
            </Typography>
          </div>

          <div className={bannerClasses.OtherField}>
            <div className={bannerClasses.SelectBox}>
              <SelectComp
                value={selectCatValue}
                array={allProductsCategoryUnic}
                onChange={(e) => {
                  return (
                    categoryFilterFun(e.target.value),
                    setSelectCatValue(e.target.value)
                  );
                }}
                style={{
                  width: 150,
                  height: 25,
                  "@media (max-width: 350px)": {
                    width: 115,
                    fontSize: "0.8rem"
                  },
                  "@media (max-width: 300px)": {
                    width: 100
                  }
                }}
                menuPropsStyle={{
                  bgcolor: "#bdc3c7",
                  top: "100px",
                  "@media (max-width: 900px)": {
                    top: "100px"
                  },
                  "& ul": {},
                  "& li": {
                    fontSize: "80%"
                  },
                  "& .MuiMenuItem-root": {
                    padding: "3%"
                  }
                }}
              />
            </div>
            <div>
              <NavLink to="/viewall"> View all </NavLink>
              <NavLink to="/cart"> Cart </NavLink>
            </div>
          </div>
        </div>

        <div className={bannerClasses.topSliderDiv} style={{}}>
          <Slider />
        </div>
      </Container>
    </>
  );
}
