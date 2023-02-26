import React, { useEffect } from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Homepage from "./Pages/HomePage";
import Header from "./Components/Header";
import ViewAll from "./Pages/ViewAll";
import Cart from "./Pages/Cart";
import { AllContextState } from "./context/ContextAPI";
import Alert from "./Components/Alert";
import { FaShoppingCart } from "react-icons/fa";
import Badge from "@mui/material/Badge";
import Footer from "./Components/Footer";

const useStyles = makeStyles({
  App: {
    minHeight: "100vh",

    backgroundColor: "#bdc3c7",
    color: "#000"
  },
  CartIconDiv: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    backgroundColor: "black",
    position: "fixed",
    bottom: "20px",
    right: "45px"
  }
});

export default function App() {
  const classes = useStyles();

  const { navigate, location, cartState, user } = AllContextState();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/1");
    }
  });

  return (
    <>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/:paramProductID" element={<Homepage />} />
          <Route exact path="/viewall" element={<ViewAll />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
        {user && (
          <div
            onClick={() => navigate("/cart")}
            className={classes.CartIconDiv}
            style={{}}
          >
            <span
              style={{
                color: "white"
              }}
            >
              <Badge badgeContent={cartState?.length} color="primary">
                <FaShoppingCart size={30} />
              </Badge>
            </span>
          </div>
        )}
      </div>
      <Footer />
      <Alert />
    </>
  );
}
