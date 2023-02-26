import React from "react";
import { styled } from "@mui/material/styles";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { AllContextState } from "../context/ContextAPI";

export default function CartCounter({ cartItem }) {
  const { cartQuantityChange } = AllContextState();

  // ---------------------for styled-------------------------------

  const AddToCartMainDiv = styled("div")({
    display: "inline-flex",
    border: "1px solid #e2e2e2",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "3%",
    backgroundColor: "#ecf0f1"
  });

  const AddToCartBtn = styled("button")({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bdc3c7",
    padding: "0.1%",
    cursor: "pointer",
    border: "1px solid red",
    outline: "none",
    boxShadow: "none",
    fontWeight: "bold"
  });

  const AddToCartQuntityDiv = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1px",
    fontWeight: "bold",
    minWidth: "3px"
  });

  // ---------------------for styled-------------------------------

  return (
    <>
      <AddToCartMainDiv style={{}}>
        <AddToCartBtn
          onClick={() => {
            cartQuantityChange({
              id: cartItem.id,
              qty: cartItem.qty + 1
            });
          }}
        >
          <AddIcon style={{ fontSize: "150%" }} />
        </AddToCartBtn>
        <AddToCartQuntityDiv>{cartItem.qty}</AddToCartQuntityDiv>
        <AddToCartBtn
          onClick={() => {
            cartQuantityChange({
              id: cartItem.id,
              qty: cartItem.qty !== 0 ? cartItem.qty - 1 : cartItem.qty
            });
          }}
        >
          <RemoveIcon style={{ fontSize: "150%" }} />
        </AddToCartBtn>
      </AddToCartMainDiv>
    </>
  );
}
