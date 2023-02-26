import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// for firebase-------------------------------------

import { auth, db } from "../firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

// for firebase-------------------------------------

const ProductStates = createContext();

export function ContextAPI({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  // -----------------------------------

  const [selectCatValue, setSelectCatValue] = useState();

  // -----------------------------------

  // --------------for slider Component------------

  const [trendingProd, setTrendingProd] = useState([]);

  const [trendingProdFilter, setTrendingProdFilter] = useState(trendingProd);

  const categoryFilterFun = (filterCategory) => {
    const updateCategory = trendingProd.filter((ele) => {
      return ele.category.toUpperCase() === filterCategory.toUpperCase();
    });

    filterCategory === "all Category"
      ? setTrendingProdFilter(trendingProd)
      : setTrendingProdFilter(updateCategory);
  };

  const fetchTrendingProd = async () => {
    const { data } = await axios.get(
      "https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products"
    );
    setTrendingProd(data);
    setTrendingProdFilter(data);
  };

  useEffect(() => {
    fetchTrendingProd();
  }, []);

  // ------------Slider Component-->to fetch category of products--------

  const allProductsCategory = trendingProd?.map((curEle) => {
    return curEle.category;
  });

  const allProductsCategoryUnic = [
    ...new Set(allProductsCategory),
    "all Category"
  ];

  useEffect(() => {
    setSelectCatValue(allProductsCategoryUnic[0]);
  }, []);

  // ------------Slider Component-->to fetch category of products--------

  // --------------for Slider Component------------

  // -------------for ProductDetails Component------------

  const [product, setProduct] = useState(null);

  // -------------for ProductDetails Component------------

  // --------------for cart---------------

  const [cartState, setCartState] = useState([]);

  const cartFilterByID = (filterableID) =>
    cartState?.filter((ele) => {
      return ele.id === filterableID;
    });

  const addToCart = (addItem) => {
    const findInCart = cartState.some((ele) => {
      return ele.id === addItem.id;
    });

    if (findInCart) {
      setCartState(
        cartState.map((elemForUpd) => {
          if (elemForUpd.id === addItem.id) {
            return { ...elemForUpd, qty: addItem.qty };
          }
          return elemForUpd;
        })
      );
    } else {
      setCartState([
        ...cartState,
        {
          ...addItem,
          qty: addItem.qty
        }
      ]);
    }
  };

  const removeFromCart = (removeItem) => {
    setCartState(cartState.filter((c) => c.id !== removeItem.id));
  };

  const cartQuantityChange = (cartQuantity) => {
    setCartState(
      cartState.filter((c) =>
        c.id === cartQuantity.id ? (c.qty = cartQuantity.qty) : c.qty
      )
    );
  };

  // --------------for cart---------------

  // --------------priceWithCommas---------------

  function priceWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  // --------------priceWithCommas---------------

  // -----------for User Login signup firebase-----------------

  // -----------for User Login---------------
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  // -----------for User Login-----------------

  // -----------------for addToFavorite-------------------
  const [addToFavorite, setAddToFavorite] = useState([]);

  useEffect(() => {
    if (user) {
      const prodRef = doc(db, "addToFavoriteDB", user?.uid);

      var unsubscribe = onSnapshot(prodRef, (prod) => {
        if (prod.exists()) {
          setAddToFavorite(prod.data().favoriteProducts);
        } else {
          console.log(
            "ContextAPI.jsx - No Items in addToFavoriteDB - favoriteProducts"
          );
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [user]);

  const addToFavoriteFun = async (prodID) => {
    const prodRef = doc(db, "addToFavoriteDB", user?.uid);

    try {
      await setDoc(
        prodRef,
        {
          favoriteProducts: addToFavorite
            ? [...addToFavorite, prodID]
            : [prodID]
        },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${prodID} Added to the Favorite !`,
        type: "success"
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error"
      });
    }
  };

  const removeFromFavoriteFun = async (prodID) => {
    const prodRef = doc(db, "addToFavoriteDB", user.uid);
    try {
      await setDoc(
        prodRef,
        { favoriteProducts: addToFavorite.filter((fvt) => fvt !== prodID) },
        { merge: true }
      );

      setAlert({
        open: true,
        message: `${prodID} Removed from the Favorite !`,
        type: "success"
      });
    } catch (error) {
      setAlert({
        open: true,
        message: error.message,
        type: "error"
      });
    }
  };

  // -----------------for addToFavorite-------------------

  // -----------for User Login signup firebase-----------------

  // ------------for alert msj when login or signup-----------------------------------

  const [alert, setAlert] = useState({
    open: false,
    message: "",
    type: "success"
  });

  // ------------for alert msj when login or signup-----------------------------------

  // ---------------for color selection-------------

  const [selectedCLR, setSelectedCLR] = useState({
    name: "Blue",
    value: 0
  });
  // ---------------for color selection-------------

  return (
    <ProductStates.Provider
      value={{
        navigate,
        location,
        allProductsCategoryUnic,
        trendingProd,
        setTrendingProd,
        trendingProdFilter,
        categoryFilterFun,
        product,
        setProduct,
        cartState,
        setCartState,
        addToCart,
        removeFromCart,
        cartQuantityChange,
        cartFilterByID,
        priceWithCommas,
        alert,
        setAlert,
        user,
        setUser,
        addToFavoriteFun,
        removeFromFavoriteFun,
        addToFavorite,
        selectedCLR,
        setSelectedCLR,
        selectCatValue,
        setSelectCatValue
      }}
    >
      {children}
    </ProductStates.Provider>
  );
}

export const AllContextState = () => {
  return useContext(ProductStates);
};
