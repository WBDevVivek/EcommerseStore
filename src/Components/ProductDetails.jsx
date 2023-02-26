import axios from "axios";
import React, { useEffect } from "react";
import ImageSlider from "./Banner/ImageSlider";
import ProductDetailsExt from "./ProductDetailsExt";
import Rating from "./Rating";
import { makeStyles } from "@mui/styles";

import { Grid, Container } from "@mui/material";

import { TiArrowForwardOutline } from "react-icons/ti";
import { GiBinoculars } from "react-icons/gi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";

import IconComp from "./IconComp";

import { AllContextState } from "../context/ContextAPI";

const useStyles = makeStyles({
  forIMGsliderAndDetails: {
    width: "100%",
    height: "99%",
    background: "#ecf0f1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    boxShadow: "1px 5px 10px #4b5a65",
    fontSize: "70%"
  },

  DetailsDiv: {
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    width: "100%",
    height: "100px",
    backgroundColor: "#ecf0f1",
    padding: "0% 3%"
  },
  ratingDiv: {
    width: "50%",
    height: "10px",
    display: "flex",
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  height200: {
    height: "200px"
  },
  height100: {
    height: "130px"
  },
  AllIconsDiv: {
    height: "65%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "absolute",
    top: "3%",
    right: "3%"
  },
  IconAndLabel: {
    height: "18%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default function ProductDetails({ paramProductID }) {
  const classes = useStyles();
  const {
    product,
    setProduct,
    addToFavorite,
    addToFavoriteFun,
    removeFromFavoriteFun,
    user
  } = AllContextState();

  const objectArrayForIcons = [
    {
      id: 1,
      icon: <TiArrowForwardOutline size={35} color="#bdc3c7" />,
      top: "0",
      onClick: () => {
        alert("forward Called...");
      }
    },
    {
      id: 2,
      icon: <GiBinoculars size={25} color="#bdc3c7" />,
      top: "60px",
      onClick: () => {
        alert("binoculars Called...");
      }
    },
    {
      id: 3,
      icon: addToFavorite?.includes(paramProductID) ? (
        <AiFillHeart size={25} color="#bdc3c7" />
      ) : (
        <AiOutlineHeart size={25} color="#bdc3c7" />
      ),

      top: "120px",
      onClick: () => {
        alert(`addToFav Called... ${paramProductID}`);
        addToFavorite?.includes(paramProductID)
          ? removeFromFavoriteFun(paramProductID)
          : addToFavoriteFun(paramProductID);
      }
    },
    {
      id: 4,
      icon: <AiOutlineMessage size={25} color="#bdc3c7" />,
      top: "180px",
      onClick: () => {
        alert("message Called...");
      }
    },
    {
      id: 5,
      icon: <BsBarChart size={25} color="#bdc3c7" />,
      top: "240px",
      onClick: () => {
        alert("chart Called...");
      }
    }
  ];

  // -------------function to fetch products details from API----------

  const loadProductDetails = async () => {
    const { data } = await axios.get(
      `https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products/${paramProductID}`
    );

    setProduct(data);
  };

  useEffect(() => {
    loadProductDetails();
  }, [paramProductID]);

  // -------------function to fetch products details from API----------

  return (
    <>
      {product && (
        <>
          <Container>
            <Grid
              container
              rowSpacing={{ xs: 0, sm: 0, md: 1 }}
              columnSpacing={{ xs: 1, sm: 1, md: 2.5 }}
              sx={{
                "@media (min-width: 900px)": {
                  margin: "0px -18px"
                },

                "@media (max-width: 900px)": {
                  margin: "8px -8px",
                  marginBottom: "0px"
                }
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={5}
                sx={{
                  position: "relative"
                }}
              >
                <div className={classes.forIMGsliderAndDetails}>
                  <ImageSlider product={product} />
                  <div
                    className={`${classes.DetailsDiv} ${
                      product.features[0].length >= 100 ||
                      product.title.length > 30
                        ? classes.height200
                        : classes.height100
                    } `}
                  >
                    <h1> {product.title} </h1>
                    <div className={classes.ratingDiv}>
                      {product.rating && (
                        <>
                          <span>
                            <Rating
                              rating={product.rating.value}
                              maxRating={5}
                            />
                          </span>
                          &nbsp;&nbsp;
                          <span className="ratingCount">
                            {product.rating.count} ratings
                          </span>
                        </>
                      )}
                    </div>
                    <p> {product?.features[0]} </p>
                  </div>
                </div>
                {/* --------------------------- */}

                {user && (
                  <div className={classes.AllIconsDiv}>
                    {objectArrayForIcons.map((val, ind) => {
                      return (
                        <div className={classes.IconAndLabel} key={val.id}>
                          <IconComp
                            onClick={val.onClick}
                            style={{
                              width: "50px",
                              height: "50px"
                            }}
                          >
                            {val.icon}
                          </IconComp>

                          <span
                            style={{
                              color: "#95a5a6"
                            }}
                          >
                            13.5K
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </Grid>

              <Grid item xs={12} sm={12} md={7}>
                <div className={classes.forIMGsliderAndDetails}>
                  <ProductDetailsExt product={product} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
}
