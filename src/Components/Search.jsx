import React, { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";

import { makeStyles } from "@mui/styles";
import { AllContextState } from "../context/ContextAPI";

const useStyles = makeStyles({
  search: {
    display: "flex",
    alignItems: "stretch",
    flex: "1 1 0",
    borderRadius: "2px",
    overflow: "hidden",
    width: "100%",
    height: "100%"
  },
  search__select: {
    display: "inline-block",
    backgroundColor: "#f2f2f2",
    borderRight: "0.1rem solid #e2e2e2 !important",
    width: "30%",
    margin: "0",
    padding: "0",
    textAlign: "center",
    fontSize: "80%",
    height: "30px",
    lineHeight: "10%",

    "@media (max-width: 800px)": {
      fontSize: "70%"
    }
  },
  search__form: {
    width: "70%",
    display: "flex"
  },

  search__input: {
    display: "inline-block",
    backgroundColor: "#ffffff",
    color: "black",
    flex: "1 0 0",
    fontSize: "70%",
    width: "70%"
  },
  search__button: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    color: "white",
    width: "10%"
  }
});

export default function Search() {
  const searchClasses = useStyles();
  const {
    allProductsCategoryUnic,
    categoryFilterFun,
    selectCatValue,
    setSelectCatValue
  } = AllContextState();

  const [category, setCategory] = useState(0);

  const [searchCatValue, setSearchCatValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const allProductsCategoryUnicFilter = allProductsCategoryUnic.filter(
      (singleCatValue, i) => {
        return (
          singleCatValue.substring(0, 1).toUpperCase() ===
          searchCatValue.substring(0, 1).toUpperCase()
        );
      }
    );

    allProductsCategoryUnic.includes(allProductsCategoryUnicFilter[0])
      ? setSelectCatValue(allProductsCategoryUnicFilter[0])
      : setSelectCatValue("all Category");

    setSearchCatValue("");
  };

  useEffect(() => {
    categoryFilterFun(selectCatValue);
  }, [selectCatValue]);

  return (
    <>
      <div className={searchClasses.search}>
        <select
          className={searchClasses.search__select}
          value={category}
          onChange={(e) => setCategory(parseInt(e.target.value, 10))}
        >
          {allProductsCategoryUnic.map((cat, i) => (
            <option
              key={i}
              value={i}
              style={{
                display: cat === "all Category" ? "none" : "block"
              }}
            >
              {i === 0 ? "all Category" : cat === "all Category" ? "" : cat}
            </option>
          ))}
        </select>
        <form className={searchClasses.search__form} onSubmit={handleSubmit}>
          <input
            className={searchClasses.search__input}
            type="text"
            placeholder="Search Category.."
            autoComplete="off"
            name="searchCategory"
            value={searchCatValue}
            onChange={(e) => setSearchCatValue(e.target.value)}
          />
          <button className={searchClasses.search__button}>
            <span>
              <GoSearch />
            </span>
          </button>
        </form>
      </div>
    </>
  );
}
