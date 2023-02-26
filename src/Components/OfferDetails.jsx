import React, { useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import { makeStyles } from "@mui/styles";
import SelectButton from "./SelectButton";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import SelectComp from "./SelectComp";
import { AllContextState } from "../context/ContextAPI";

const useStyles = makeStyles({
  MyOfferDetailsDiv: {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "flex-end",
    borderTop: "2px solid #bdc3c7",
    position: "relative",
    paddingTop: "10",
    "@media (max-width: 900px)": {
      width: "80%",
      height: "80%"
    },
    "@media (max-width: 500px)": {
      height: "90%"
    }
  },
  selCollectionDiv: {
    width: "100%",
    height: "100%",
    paddingTop: "10%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  selCollectionDiv1: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: " 15%"
  },
  selCollectionDiv1_1: {
    width: "20%",
    height: " 100%",
    lineHeight: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: "1"
  },
  selCollectionDiv1_1_SecCLS: {
    flexGrow: "0.3"
  },
  selCollectionDiv1_2: {
    width: "70%",
    height: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },

  selCollectionDiv1_2_SecCLS: {
    flexGrow: "2"
  },
  selCollectionDiv1_2_1: {
    width: "45%",
    height: "90%"
  },
  selCollectionDiv1_2_2: {
    width: "45%",
    height: "90%"
  },
  selCollectionDiv1_3: {
    width: "10%"
  },

  selCollectionDiv1_3_SecCLS: {
    flexGrow: "0.5"
  },
  selCollectionDiv2_2_1: {
    width: "95%",
    height: "90%"
  },
  selCollectionDivCheckbx: {
    width: "60%",
    height: "65px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    "@media (max-width: 750px)": {
      width: "75%"
    }
  },

  EntBtnDiv: {
    width: "95%",
    height: "85%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  EntClrRectangleDiv: {
    width: "70%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "@media (max-width: 700px)": {
      width: "60%"
    }
  },
  colorRectangleDiv: {
    width: "95%",
    height: "15%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  colorRectangle: {
    width: "10%",
    height: "100%"
  },
  titleAndQueSpan: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  formControlLabel: {
    fontSize: "70%",
    "@media (max-width: 900px)": {
      fontSize: "80%",
      fontWeight: "600"
    },
    "@media (max-width: 700px)": {
      fontSize: "80%"
    },
    "@media (max-width: 600px)": {
      fontSize: "60%"
    }
  },

  responsiveToHideDiv: {
    "@media (max-width: 750px)": {
      display: "none"
    }
  }
});

export default function OfferDetails({ product }) {
  const classes = useStyles();

  const {
    cartState,
    addToCart,
    removeFromCart,
    user,
    selectedCLR
  } = AllContextState();

  const [selectQuantityValue, setSelectQuantityValue] = useState(1);

  const isINCart = cartState.some((p) => p.id === product.id);

  return (
    <>
      <div className={classes.MyOfferDetailsDiv}>
        <SelectButton
          onClick={() => {}}
          style={{
            width: "auto",
            height: "5px",
            padding: "20px",
            backgroundColor: "#ecf0f1",
            fontSize: "55%",
            position: "absolute",
            top: "-20px",
            left: "35%"
          }}
        >
          <h1>My Offer Details</h1>
        </SelectButton>

        <div className={classes.selCollectionDiv}>
          <div className={classes.selCollectionDiv1}>
            <div
              className={`${classes.selCollectionDiv1_1} ${classes.selCollectionDiv1_1_SecCLS}`}
            >
              <span
                className={classes.titleAndQueSpan}
                style={{ fontSize: "100%", alignSelf: "flex-start" }}
              >
                <span
                  style={{ color: "#bdc3c7", fontSize: "90%", alignSelf: "" }}
                >
                  Speify
                </span>
                <span
                  style={{
                    color: "#bdc3c7",
                    fontSize: "100%",
                    display: "flex",
                    alignSelf: ""
                  }}
                >
                  <AiOutlineQuestionCircle />
                </span>
              </span>
              <span style={{ fontSize: "130%", alignSelf: "center" }}>
                <b> Responce </b>
              </span>
              <span
                style={{
                  color: "#bdc3c7",
                  fontSize: "90%",
                  alignSelf: "flex-end"
                }}
              >
                Timeline
              </span>
            </div>

            <div
              className={`${classes.selCollectionDiv1_2} ${classes.selCollectionDiv1_2_SecCLS}`}
            >
              <div className={classes.selCollectionDiv1_2_1}>
                <SelectComp onChange={(e) => {}} style={() => {}} value={""} />
              </div>
              <div className={classes.selCollectionDiv1_2_2}>
                <SelectComp onChange={(e) => {}} style={() => {}} value={""} />
              </div>
            </div>
            <div
              className={`${classes.selCollectionDiv1_3} ${classes.selCollectionDiv1_3_SecCLS}`}
            ></div>
          </div>

          {/* --------------------------------- */}

          <div className={classes.selCollectionDiv1}>
            <div
              className={`${classes.selCollectionDiv1_1} ${classes.selCollectionDiv1_1_SecCLS}`}
            >
              <span
                className={classes.titleAndQueSpan}
                style={{ fontSize: "100%", alignSelf: "flex-start" }}
              >
                <span
                  style={{ color: "#bdc3c7", fontSize: "100%", alignSelf: "" }}
                >
                  Request
                </span>
                <span
                  style={{ color: "#bdc3c7", fontSize: "100%", alignSelf: "" }}
                >
                  <AiOutlineQuestionCircle />
                </span>
              </span>

              <span style={{ fontSize: "130%", alignSelf: "center" }}>
                <b> Quantity </b>
              </span>
            </div>

            <div
              className={`${classes.selCollectionDiv1_2} ${classes.selCollectionDiv1_2_SecCLS}`}
            >
              <div className={classes.selCollectionDiv2_2_1}>
                <SelectComp
                  array={[1, 2, 3]}
                  onChange={(e) => {
                    setSelectQuantityValue(e.target.value);
                  }}
                  style={() => {}}
                  value={selectQuantityValue}
                />
              </div>
            </div>
            <div
              className={`${classes.selCollectionDiv1_3} ${classes.selCollectionDiv1_3_SecCLS}`}
            >
              <RiDeleteBin6Line color="red" />
            </div>
          </div>

          {/* ----------------------------------------- */}

          <div className={classes.selCollectionDiv1}>
            <div
              className={`${classes.selCollectionDiv1_1} ${classes.selCollectionDiv1_1_SecCLS}`}
            >
              <span
                className={classes.titleAndQueSpan}
                style={{ fontSize: "100%", alignSelf: "flex-start" }}
              >
                <span
                  style={{ color: "#bdc3c7", fontSize: "100%", alignSelf: "" }}
                >
                  Offer
                </span>
                <span
                  style={{ color: "#bdc3c7", fontSize: "100%", alignSelf: "" }}
                >
                  <AiOutlineQuestionCircle />
                </span>
              </span>

              <span style={{ fontSize: "130%", alignSelf: "center" }}>
                <b> Amount </b>
              </span>
            </div>

            <div className={`${classes.EntClrRectangleDiv} `}>
              <div className={classes.colorRectangleDiv}>
                {[
                  "red",
                  "yellow",
                  "red",
                  "blue",
                  "purple",
                  "violet",
                  "orange",
                  "red",
                  "yellow"
                ].map((color, ind) => {
                  return (
                    <div
                      key={ind}
                      className={classes.colorRectangle}
                      style={{ backgroundColor: color }}
                    ></div>
                  );
                })}
              </div>

              <div className={classes.EntBtnDiv}>
                <SelectButton
                  onClick={() => {}}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    border: "1px solid gray",
                    fontSize: "55%"
                  }}
                >
                  <h1 style={{ color: "#bdc3c7" }}>
                    {product.price.currency === "INR" ? "₹" : "$"}
                    &nbsp;
                    {product.price.value}
                  </h1>
                </SelectButton>
              </div>
            </div>
            <div
              className={`${classes.selCollectionDiv1_3} ${classes.selCollectionDiv1_3_SecCLS}
              ${classes.responsiveDiv}
              `}
            >
              per item
            </div>
          </div>

          {/* ----------------------------------------- */}

          <div className={classes.selCollectionDiv1}>
            <div
              className={`${classes.selCollectionDiv1_1} ${classes.selCollectionDiv1_1_SecCLS}`}
            ></div>

            <div className={`${classes.selCollectionDivCheckbx} `}>
              <div
                style={{
                  color: "#bdc3c7",
                  height: "30%",
                  backgroundColor: "transparent"
                }}
                className={classes.selCollectionDiv2_2_1}
              >
                Attempts <b> 0 </b> of <b> 3 </b>
                <sup>
                  <span style={{ fontSize: "100%" }}>
                    <AiOutlineQuestionCircle />
                  </span>
                </sup>
              </div>

              <div
                style={{
                  color: "#bdc3c7",
                  height: "70%",
                  backgroundColor: "transparent"
                }}
                className={classes.selCollectionDiv2_2_1}
              >
                <FormGroup
                  style={{
                    width: "100%"
                  }}
                >
                  <FormControlLabel
                    style={{
                      width: "100%"
                    }}
                    control={<Checkbox defaultChecked />}
                    label={
                      <span className={classes.formControlLabel}>
                        Share your find on Social Media
                      </span>
                    }
                  />
                </FormGroup>
              </div>
            </div>

            <div
              className={`${classes.selCollectionDiv1_3} ${classes.selCollectionDiv1_3_SecCLS}
              ${classes.responsiveToHideDiv}
              `}
            ></div>
          </div>

          {/* ----------------------------------------- */}

          <div className={classes.selCollectionDiv1}>
            <div
              className={`${classes.selCollectionDiv1_1} ${classes.selCollectionDiv1_1_SecCLS}`}
            ></div>

            <div
              className={`${classes.selCollectionDiv1_2} ${classes.selCollectionDiv1_2_SecCLS}`}
            >
              <div className={classes.selCollectionDiv2_2_1}>
                <SelectButton
                  value={1}
                  onClick={(e) => {}}
                  style={{
                    width: "100%",
                    height: "100%",
                    padding: "20px",
                    backgroundColor: "blue",
                    fontSize: "55%"
                  }}
                >
                  <h1 style={{ color: "#ecf0f1" }}>My Offer</h1>
                </SelectButton>
              </div>
            </div>
            <div
              className={`${classes.selCollectionDiv1_3} ${classes.selCollectionDiv1_3_SecCLS}`}
            ></div>
          </div>

          {/* ----------------------------------------- */}

          {user && (
            <div className={classes.selCollectionDiv1}>
              <div
                className={`${classes.selCollectionDiv1_1} ${classes.selCollectionDiv1_1_SecCLS}`}
              ></div>

              <div
                className={`${classes.selCollectionDiv1_2} ${classes.selCollectionDiv1_2_SecCLS}`}
              >
                <div className={classes.selCollectionDiv2_2_1}>
                  <SelectButton
                    onClick={() => {
                      isINCart
                        ? removeFromCart({
                            id: product.id,
                            qty: selectQuantityValue
                          })
                        : addToCart({
                            ...product,
                            qty: selectQuantityValue,
                            color: selectedCLR.name
                          });
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      padding: "20px",
                      backgroundColor: isINCart ? "red" : "blue",
                      fontSize: "55%"
                    }}
                  >
                    {isINCart ? (
                      <h1 style={{ color: "#ecf0f1" }}>Remove From Cart</h1>
                    ) : (
                      <h1 style={{ color: "#ecf0f1" }}>Add To Cart</h1>
                    )}
                  </SelectButton>
                </div>
              </div>
              <div
                className={`${classes.selCollectionDiv1_3} ${classes.selCollectionDiv1_3_SecCLS}`}
              ></div>
            </div>
          )}
          {/* -----------lst DivEnd----------- */}
        </div>
      </div>
    </>
  );
}
