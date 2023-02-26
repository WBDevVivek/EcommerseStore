import React, { useEffect, useState } from "react";

import { Grid, Paper } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DragHandleIcon from "@mui/icons-material/DragHandle";

import SelectButton from "../Components/SelectButton";
import CartCounter from "../Components/CartCounter";

import { AllContextState } from "../context/ContextAPI";

export default function Cart() {
  const { cartState, priceWithCommas } = AllContextState();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cartState.reduce(
        (acc, curr) => acc + Number(curr.price.value) * curr.qty,
        0
      )
    );
  }, [cartState]);

  const IMG = (title, src, color) => {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            alt={title}
            src={src}
            style={{
              width: "100%",
              height: "90%",
              objectFit: "contain"
            }}
          />
          <span
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "45%"
            }}
          >
            <b> Color :- </b> {color}
          </span>
        </div>
      </>
    );
  };

  const title = (title, brand) => {
    return (
      <>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "#ecf0f1",
            padding: "3px",
            fontSize: "40%"
          }}
        >
          <div style={{ alignSelf: "flex-start", fontWeight: "bold" }}>
            {title}
          </div>
          <div style={{ alignSelf: "flex-end" }}>by {brand}</div>
        </div>
      </>
    );
  };

  const price = (price) => {
    return (
      <>
        <div
          style={{
            width: "110px",
            height: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ecf0f1",
            fontSize: "45%",
            padding: "0%"
          }}
        >
          <span>₹</span>
          &nbsp;
          {priceWithCommas(price)}
          &nbsp;
          <span>/-</span>
        </div>
      </>
    );
  };

  const multiplyIcon = () => {
    return (
      <>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ecf0f1",
            padding: "0%",
            fontSize: "0%"
          }}
        >
          <CloseIcon
            style={{
              width: "0.8em"
            }}
          />
        </div>
      </>
    );
  };

  const addToCartCounter = (cartItem) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "auto",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "45%"
          }}
        >
          <CartCounter cartItem={cartItem} />
        </div>
      </>
    );
  };

  const equalTo = () => {
    return (
      <>
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ecf0f1",
            fontSize: "25%"
          }}
        >
          <DragHandleIcon />
        </div>
      </>
    );
  };

  const cartTotalAmount = (price, qty) => {
    return (
      <>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ecf0f1",
            fontSize: "45%",
            padding: "10%"
          }}
        >
          <span>₹</span>
          &nbsp;
          {priceWithCommas(price * qty)}
          &nbsp;
          <span>/-</span>
        </div>
      </>
    );
  };

  return (
    <>
      <Grid
        sx={{
          flexGrow: 1,
          fontSize: "2rem",
          maxWidth: "950px",
          margin: "65px auto"
        }}
        container
        spacing={0}
      >
        <Grid
          item
          xl={10}
          lg={10}
          md={10}
          sm={9.5}
          xs={8.5}
          sx={{
            padding: "1% 0.5%"
          }}
        >
          {cartState.length > 0 &&
            cartState?.map((cartItem, ind) => {
              return (
                <Grid
                  key={ind}
                  container
                  justifyContent="center"
                  spacing={0}
                  sx={{
                    marginTop: "0px",
                    marginBottom: "2%",
                    width: "100%",

                    height: "auto"
                  }}
                >
                  {[
                    IMG(cartItem?.title, cartItem?.images[0], cartItem?.color),
                    title(cartItem?.title, cartItem?.brand),
                    price(cartItem?.price.value),
                    multiplyIcon(),
                    addToCartCounter(cartItem),
                    equalTo(),
                    cartTotalAmount(cartItem?.price.value, cartItem?.qty)
                  ].map((value, ind) => (
                    <Paper
                      key={ind}
                      sx={{
                        backgroundColor: "#ecf0f1",
                        height: "120px",
                        width:
                          ind === 3 || ind === 5
                            ? "6%"
                            : ind === 0 || ind === 1
                            ? "25%"
                            : ind === 2 || ind === 6
                            ? "13%"
                            : "12%",
                        "@media (max-width: 900px)": {
                          width:
                            ind === 3 || ind === 5
                              ? "6%"
                              : ind === 0 || ind === 1
                              ? "24%"
                              : ind === 2 || ind === 6
                              ? "13%"
                              : "13%"
                        },
                        "@media (max-width: 800px)": {
                          width:
                            ind === 3 || ind === 5
                              ? "6%"
                              : ind === 0 || ind === 1
                              ? "22%"
                              : ind === 2 || ind === 6
                              ? "14%"
                              : "15%"
                        },
                        "@media (max-width: 750px)": {
                          width:
                            ind === 3 || ind === 5
                              ? "15%"
                              : ind === 0 || ind === 1
                              ? "49%"
                              : ind === 2 || ind === 6
                              ? "25%"
                              : "18%"
                        },
                        "@media (max-width: 650px)": {
                          width:
                            ind === 3 || ind === 5
                              ? "15%"
                              : ind === 0 || ind === 1
                              ? "48%"
                              : ind === 2 || ind === 6
                              ? "24%"
                              : "18%"
                        },
                        "@media (max-width: 600px)": {
                          width:
                            ind === 3 || ind === 5
                              ? "15%"
                              : ind === 0 || ind === 1
                              ? "48%"
                              : ind === 2 || ind === 6
                              ? "23%"
                              : "20%"
                        },
                        "@media (max-width: 550px)": {
                          width:
                            ind === 3 || ind === 5
                              ? "14%"
                              : ind === 0 || ind === 1
                              ? "48%"
                              : ind === 2 || ind === 6
                              ? "22%"
                              : "24%"
                        },
                        "@media (max-width: 450px)": {
                          width:
                            ind === 3 || ind === 5
                              ? "14%"
                              : ind === 0 || ind === 1
                              ? "48%"
                              : ind === 2 || ind === 6
                              ? "22%"
                              : "24%"
                        }
                      }}
                    >
                      <Grid
                        item
                        sx={{
                          height: "100%",
                          width: "100%",
                          padding: "2%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        <Paper
                          sx={{
                            height: ind === 0 ? "100%" : "auto",
                            width: "100%",
                            padding: "4%",
                            backgroundColor: "#bdc3c7",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                          }}
                        >
                          {value}
                        </Paper>
                      </Grid>
                    </Paper>
                  ))}
                </Grid>
              );
            })}
        </Grid>

        {/* ------------------------------------------------------------ */}

        <Grid
          item
          xl={2}
          lg={2}
          md={2}
          sm={2.5}
          xs={3.5}
          sx={{
            height: "85vh",
            marginTop: "1%",
            position: "sticky",
            top: "10%",
            right: "0"
          }}
        >
          <Grid
            container
            justifyContent="center"
            spacing={1}
            sx={{
              height: "100%",
              margin: "-8px -8px"
            }}
          >
            <Grid
              item
              sx={{
                paddingLeft: "0px",
                height: "83vh",
                alignItems: "flex-start",
                display: "flex"
              }}
            >
              <Paper
                sx={{
                  height: "300px",

                  width: "98%",
                  backgroundColor: "#ecf0f1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Paper
                  sx={{
                    height: "90%",
                    width: "80%",
                    backgroundColor: "#bdc3c7",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      fontSize: "50%",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      width: "100%",
                      height: "70%"
                    }}
                  >
                    <span style={{ fontWeight: 400, fontSize: "80%" }}>
                      Subtotal ({cartState.length}) items
                    </span>
                    <span
                      style={{
                        width: "70%",
                        height: "50px",
                        fontWeight: 700,
                        fontSize: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly"
                      }}
                    >
                      <span> Total : </span>
                      <span style={{ alignSelf: "flex-end" }}>
                        ₹ {priceWithCommas(total)}
                      </span>
                    </span>
                    <SelectButton
                      disabled={cartState.length === 0}
                      style={{ fontWeight: 500, fontSize: "90%" }}
                    >
                      Proceed to Checkout
                    </SelectButton>
                  </div>
                </Paper>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
