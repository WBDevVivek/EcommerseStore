import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { AllContextState } from "../context/ContextAPI";
import MenuIcon from "@mui/icons-material/Menu";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineClose } from "react-icons/ai";
import { FiVideo } from "react-icons/fi";
import { ImFire } from "react-icons/im";
import { GiShoppingBag } from "react-icons/gi";

import Search from "./Search";

import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import UserSidebar from "../Authentication/UserSidebar";
import AuthModal from "../Authentication/AuthModal";

const useStyles = makeStyles({
  displayFlex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cursorPointer: {
    cursor: "pointer"
  },
  title: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "0%"
  },
  responsiveMENU: {
    width: "400px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    fontSize: "1.5rem",
    padding: "15px",
    background: "black",
    zIndex: 1,
    position: "absolute",
    top: "100%",
    left: "15%",

    "@media (min-width: 750px)": {
      display: "none"
    },
    "@media (max-width: 750px)": {
      display: "flex"
    },
    "@media (max-width: 500px)": {
      left: "10%"
    },
    "@media (max-width: 450px)": {
      width: "100%",
      left: "0%"
    }
  }
});

export default function Header() {
  const headerClasses = useStyles();
  const navigate = useNavigate();
  const { user } = AllContextState();

  const [respMenuState, setRespMenuState] = useState(false);

  return (
    <AppBar
      position="fixed"
      sx={{
        fontFamily: "Montserrat",
        width: "100%",
        height: "64px",
        paddingTop: "0%",
        "@media (max-width: 600px)": {
          paddingTop: "1%"
        },

        transition: "all 0.5s",
        backgroundColor: "#000",
        color: "#fff",
        "&:hover": {
          backgroundColor: "",
          color: ""
        }
      }}
    >
      <Container
        sx={{
          width: "100%",
          maxWidth: "1050px !important"
        }}
      >
        <Toolbar
          className={headerClasses.displayFlex}
          sx={{
            width: "100%",
            fontSize: "95%",
            "@media (max-width: 960px)": {
              fontSize: "90%"
            },
            "@media (max-width: 900px)": {
              fontSize: "85%"
            }
          }}
        >
          <Box
            sx={{
              color: "#fff",
              width: "auto",

              fontSize: "150%"
            }}
          >
            <Typography
              className={headerClasses.title}
              onClick={() => navigate("/1")}
              variant="h6"
            >
              <span style={{ color: "red" }}>LO</span>go
            </Typography>
          </Box>
          <Box
            className={`${headerClasses.displayFlex} ${headerClasses.cursorPointer}`}
            onClick={() => {
              setRespMenuState(!respMenuState);
            }}
            sx={{
              width: "80px",
              fontSize: "140%",

              "@media (min-width: 750px)": {
                display: "none"
              }
            }}
          >
            <span
              style={{
                display: "grid"
              }}
            >
              {!respMenuState ? <MenuIcon /> : <AiOutlineClose />}
            </span>
            Menu
          </Box>
          <Box
            className={`${headerClasses.displayFlex} ${headerClasses.cursorPointer}`}
            sx={{
              width: "auto",
              fontSize: "100%",
              "@media (max-width: 750px)": {
                display: "none"
              }
            }}
          >
            <span
              style={{
                fontSize: "150%",
                display: "grid"
              }}
            >
              <VscLocation />
            </span>
            <span style={{ fontSize: "100%" }}>Location</span>
          </Box>
          <Box
            sx={{
              width: "40%",
              height: "30px",
              cursor: "pointer",

              "@media (max-width: 750px)": {
                width: "50%"
              },
              "@media (max-width: 600px)": {
                display: "none"
              }
            }}
          >
            <Search />
          </Box>

          <Box
            className={`${headerClasses.displayFlex} ${headerClasses.cursorPointer}`}
            sx={{
              width: "auto",
              fontSize: "100%",
              "@media (max-width: 750px)": {
                display: "none"
              }
            }}
          >
            <span
              style={{
                marginRight: "5px",
                color: "blue",
                fontSize: "150%",
                display: "grid"
              }}
            >
              <FiVideo />
            </span>
            <span style={{ fontSize: "100%" }}> Road shows</span>
          </Box>
          <Box
            className={headerClasses.displayFlex}
            sx={{
              width: "auto",
              fontSize: "100%"
            }}
          >
            <Box
              className={headerClasses.cursorPointer}
              sx={{
                "@media (max-width: 750px)": {
                  display: "none"
                }
              }}
            >
              <span style={{}}>
                <ImFire />
              </span>
            </Box>
            <Box
              className={headerClasses.cursorPointer}
              sx={{
                "@media (max-width: 750px)": {
                  display: "none"
                }
              }}
            >
              <span style={{}}>
                <GiShoppingBag />
              </span>
            </Box>

            <Box
              sx={{
                width: "50%",
                "@media (max-width: 750px)": {
                  width: "80%"
                }
              }}
            >
              {/* for LogIn button & form */}
              {user ? <UserSidebar /> : <AuthModal />}
              {/* for LogIn button & form */}
            </Box>
          </Box>
        </Toolbar>

        {respMenuState && (
          // {/* forResponsiveMenu---------------- */}

          <Box className={headerClasses.responsiveMENU} sx={{}}>
            <Box
              sx={{
                width: "100%",
                height: "30px",
                cursor: "pointer",
                display: "none",
                fontSize: "70%",

                "@media (max-width: 750px)": {
                  width: "100%"
                },
                "@media (max-width: 600px)": {
                  display: "block"
                }
              }}
            >
              <Search />
            </Box>

            <Box
              className={`${headerClasses.displayFlex} ${headerClasses.cursorPointer}`}
              sx={{
                width: "40%",

                "@media (max-width: 450px)": {
                  width: "35%"
                },
                "@media (max-width: 400px)": {
                  width: "40%"
                },
                "@media (max-width: 350px)": {
                  width: "50%"
                },
                "@media (max-width: 300px)": {
                  width: "60%"
                }
              }}
            >
              <span
                style={{
                  fontSize: "150%",
                  display: "grid"
                }}
              >
                <VscLocation />
              </span>
              <span style={{ fontSize: "80%" }}>Location</span>
            </Box>
            <Box
              className={`${headerClasses.displayFlex} ${headerClasses.cursorPointer}`}
              sx={{
                width: "48%",
                fontSize: "100%",

                "@media (max-width: 450px)": {
                  width: "43%"
                },
                "@media (max-width: 400px)": {
                  width: "50%"
                },
                "@media (max-width: 350px)": {
                  width: "60%"
                },
                "@media (max-width: 300px)": {
                  width: "73%"
                }
              }}
            >
              <span
                style={{
                  marginRight: "3px",
                  color: "blue",
                  fontSize: "150%",
                  display: "grid"
                }}
              >
                <FiVideo />
              </span>
              <span style={{ fontSize: "80%" }}> Road shows</span>
            </Box>
            <Box
              className={`${headerClasses.displayFlex} ${headerClasses.cursorPointer}`}
              sx={{
                width: "100px",
                fontSize: "100%"
              }}
            >
              <span style={{}}>
                <ImFire />
              </span>
              <span style={{}}>
                <GiShoppingBag />
              </span>
            </Box>
          </Box>
        )}
      </Container>
    </AppBar>
  );
}
