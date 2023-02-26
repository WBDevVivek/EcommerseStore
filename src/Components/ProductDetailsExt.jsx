import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import SelectButton from "./SelectButton";
import SelectComp from "./SelectComp";

import OfferDetails from "./OfferDetails";
import { AllContextState } from "../context/ContextAPI";

const useStyles = makeStyles({
  ProductDetailsExt: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ecf0f1",
    padding: "3%",
    marginLeft: "-3%",
    "@media (max-width: 900px)": {
      marginLeft: "0%"
    }
  },
  firstDiv: {
    width: "100%",
    height: "25%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  secondDiv: {
    width: "90%",
    height: "70%",
    display: "flex",
    justifyContent: "center",
    margin: "10% auto"
  },
  conditionDiv: {
    width: "90%",
    height: "20%",
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width: 900px)": {
      width: "65%"
    },
    "@media (max-width: 800px)": {
      width: "70%"
    },
    "@media (max-width: 750px)": {
      display: "none"
    }
  },
  conditionResDiv: {
    "@media (min-width: 750px)": {
      display: "none"
    },
    "@media (max-width: 750px)": {
      display: "block"
    }
  },
  colorDiv: {
    width: "60%",
    height: "43%",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "1%",

    "@media (max-width: 750px)": {
      display: "none"
    }
  },
  colorResDiv: {
    "@media (min-width: 750px)": {
      display: "none"
    },
    "@media (max-width: 750px)": {
      display: "block"
    }
  },
  colorCircle: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
  },
  colorCircleDiv: {
    width: "80px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
});

const colorObjectArray = [
  {
    name: "Blue",
    bG: "blue"
  },
  {
    name: "Green",
    bG: "green"
  },
  {
    name: "Black",
    bG: "black"
  },
  {
    name: "Orange",
    bG: "orange"
  }
];

const arrayForConditionDiv = [
  {
    name: "New",
    value: 1
  },
  {
    name: "New-Open-Box",
    value: 2
  },
  {
    name: "Used-Like-New",
    value: 3
  },
  {
    name: "Used-Good",
    value: 4
  },
  {
    name: "Used-Acceptable",
    value: 5
  },
  {
    name: "Refurbished",
    value: 6
  }
];

const arrayForConditionResDiv = [
  "New",
  "New - Open - Box",
  "Used - Like - New",
  "Used - Good",
  "Used - Acceptabl"
];

const arrayForColorResDiv = ["Blue", "Green", "Black", "Orange"];

export default function ProductDetailsExt({ product }) {
  const classes = useStyles();
  const { selectedCLR, setSelectedCLR } = AllContextState();

  const [selectedBTN, setSelectedBTN] = useState({
    name: `${arrayForConditionResDiv[0]}`,
    value: 0
  });

  return (
    <>
      <div className={classes.ProductDetailsExt}>
        <div className={classes.firstDiv}>
          <h3>Condition</h3>
          <div className={classes.conditionDiv}>
            {arrayForConditionDiv.map((BTNvalue, ind) => {
              return (
                <SelectButton
                  key={ind}
                  onClick={() => {
                    setSelectedBTN({
                      ...selectedBTN,
                      name: BTNvalue.name,
                      value: ind
                    });
                  }}
                  style={{
                    width: "auto",
                    height: "5px",
                    padding: "10.6px",
                    border: "1px solid #bdc3c7",
                    fontSize: "55%",
                    color: "#bdc3c7",
                    backgroundColor:
                      selectedBTN.value === ind ? "black" : "#ecf0f1"
                  }}
                >
                  {BTNvalue.name}
                </SelectButton>
              );
            })}
          </div>

          <div className={classes.conditionResDiv}>
            <SelectComp
              value={selectedBTN.name}
              array={arrayForConditionResDiv}
              onChange={(e, ind) => {
                setSelectedBTN({
                  ...selectedBTN,
                  name: e.target.value,
                  value: ind
                });
              }}
              style={{ width: 200, height: 25 }}
            />
          </div>

          <h3>Color</h3>
          <div className={classes.colorDiv}>
            {colorObjectArray.map((val, ind) => {
              return (
                <div
                  key={ind}
                  className={classes.colorCircleDiv}
                  style={{
                    border: `1px solid ${
                      selectedCLR.value === ind ? "black" : "#bdc3c7"
                    }`
                  }}
                >
                  <div
                    onClick={() => {
                      setSelectedCLR({
                        ...selectedCLR,
                        name: val.name,
                        value: ind
                      });
                    }}
                    className={classes.colorCircle}
                    style={{
                      backgroundColor: `${val.bG}`
                    }}
                  ></div>
                  <span
                    style={{
                      color: `${
                        selectedCLR.value === ind ? "black" : "#bdc3c7"
                      }`
                    }}
                  >
                    {val.name}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={classes.colorResDiv}>
            <SelectComp
              value={selectedCLR.name}
              array={arrayForColorResDiv}
              onChange={(e, ind) => {
                setSelectedCLR({
                  ...selectedBTN,
                  name: e.target.value,
                  value: ind
                });
              }}
              style={{ width: 200, height: 25 }}
            />
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}

        <div className={classes.secondDiv}>
          <OfferDetails product={product} />
        </div>
      </div>
    </>
  );
}
