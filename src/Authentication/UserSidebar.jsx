import React from "react";

import Drawer from "@mui/material/Drawer";

import SelectButton from "../Components/SelectButton";
// --------------for firebase to ?------------------------

import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";

// --------------for firebase to ?------------------------

// --------------for Avatar--------------------

import Avatar from "@mui/material/Avatar";

// --------------for Avatar--------------------

// --------------for react icon--------------------
import { AiFillDelete } from "react-icons/ai";
// --------------for react icon--------------------

import { AllContextState } from "../context/ContextAPI";
import { makeStyles } from "@mui/styles";

// --------------for Style------------------------

const useStyles = makeStyles({
  container: {
    width: 350,
    padding: 25,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    fontFamily: "monospace"
  },
  profile: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    height: "92%"
  },
  logout: {
    height: "8%",
    width: "100%",
    backgroundColor: "#EEBC1D",
    marginTop: 20
  },
  picture: {
    width: 200,
    height: 200,
    cursor: "pointer",
    backgroundColor: "#EEBC1D",
    objectFit: "contain"
  },
  addToFavorite: {
    flex: 1,
    width: "100%",
    backgroundColor: "grey",
    borderRadius: 10,
    padding: 15,
    paddingTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    overflowY: "scroll"
  },
  product: {
    padding: 10,
    borderRadius: 5,
    color: "black",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EEBC1D",
    boxShadow: "0 0 3px black"
  },
  Drawer: {
    background: "blue"
  }
});

// --------------for Style------------------------

export default function UserSidebar() {
  // --------------for Style------------------------

  const classes = useStyles();

  // --------------for Style------------------------

  // --------------for cryptoState------------------------
  const {
    user,
    setAlert,
    addToFavorite,
    trendingProd,
    removeFromFavoriteFun
  } = AllContextState();

  // --------------for cryptoState------------------------

  // --------------for userSideBarPosition------------------------
  const [state, setState] = React.useState({
    right: false
  });
  // --------------for userSideBarPosition------------------------

  // ---------- for to close Drawer Sidebar Function---------------
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // ---------- for to close Drawer Sidebar Function---------------

  // -------------for LogOut Function----------------

  const logOut = () => {
    signOut(auth);

    setAlert({
      open: true,
      type: "success",
      message: "Logout Successfull !"
    });

    // ---------- for to close Drawer Sidebar---------------

    toggleDrawer();

    // ---------- for to close Drawer Sidebar---------------
  };

  // -------------for LogOut Function----------------

  return (
    <div>
      {["right"].map((anchor, i) => (
        <React.Fragment key={i}>
          <Avatar
            onClick={toggleDrawer(anchor, true)}
            style={{
              height: 38,
              width: 38,
              marginLeft: 15,
              cursor: "pointer",
              backgroundColor: "#bdc3c7",
              color: "#ecf0f1"
            }}
            src={user.photoURL}
            alt={user.displayName || user.email}
          />

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              sx: {
                backgroundColor: "#ecf0f1"
              }
            }}
          >
            {/* ---------for sideBarContent---------------------*/}

            <div className={classes.container} sx={{}}>
              <div className={classes.profile} sx={{}}>
                <Avatar
                  className={classes.picture}
                  src={user.photoURL}
                  alt={user.displayName || user.email}
                  sx={{ backgroundColor: "#bdc3c7", color: "blue" }}
                />

                <span
                  style={{
                    width: "100%",
                    fontSize: 25,
                    textAlign: "center",
                    fontWeight: "bolder",
                    wordWrap: "break-word"
                  }}
                >
                  {user.displayName || user.email}
                </span>

                <div
                  className={classes.addToFavorite}
                  style={{ backgroundColor: "#bdc3c7" }}
                >
                  <span style={{ fontSize: 15, textShadow: "0 0 5px black" }}>
                    Favorite Products
                  </span>

                  {trendingProd?.map((prod, i) => {
                    if (addToFavorite?.includes(prod.id))
                      return (
                        <div
                          className={classes.product}
                          key={i}
                          style={{ backgroundColor: "#ecf0f1" }}
                        >
                          <span>{prod.title}</span>
                          <span style={{ display: "flex", gap: 8 }}>
                            <AiFillDelete
                              style={{ cursor: "pointer" }}
                              fontSize="16"
                              onClick={() => removeFromFavoriteFun(prod.id)}
                            />
                          </span>
                        </div>
                      );
                    else return <div key={i}></div>;
                  })}
                </div>
              </div>
              <SelectButton
                variant="contained"
                className={classes.logout}
                onClick={logOut}
                style={{
                  backgroundColor: "blue",
                  "&:hover": {
                    backgroundColor: "#0d0daa"
                  }
                }}
              >
                Log Out
              </SelectButton>
            </div>

            {/* ---------for sideBarContent---------------------*/}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
