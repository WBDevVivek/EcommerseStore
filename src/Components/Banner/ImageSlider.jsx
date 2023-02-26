import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  ImageSlider: {
    width: "100%",
    display: "flex",
    backgroundColor: "#ecf0f1",
    padding: "1% 3%",
    "@media (max-width: 900px)": {
      justifyContent: "space-between"
    }
  },

  sliderListing: {
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "480px",

    "@media (max-width: 900px)": {
      width: "20%"
    }
  },
  sliderList: {
    cursor: "pointer",
    width: "50px",
    height: "60px",
    "@media (max-width: 900px)": {
      width: "80%"
    }
  },
  sliderLeftImgCollection: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
    border: "1px solid #a2a6ac",
    borderRadius: "2px"
  },
  sliderRight: {
    padding: "0 3%",
    width: "300px",
    height: "450px",
    "@media (max-width: 900px)": {
      width: "70%"
    }
  },

  sliderMainImg: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center"
  }
});

export default function ImageSlider({ product }) {
  const classes = useStyles();

  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");

  useEffect(
    function () {
      setImages(product.images);
      if (product.images) {
        setImage(product.images[0]);
      } else {
        setImage("");
      }
    },
    [product]
  );

  const imageClick = (src) => {
    setImage(src);
  };
  return (
    <div className={classes.ImageSlider}>
      <ul className={classes.sliderListing}>
        {images &&
          images.map((image, i) => (
            <li
              className={classes.sliderList}
              key={i}
              onClick={() => {
                imageClick(image);
              }}
            >
              <img
                alt={product.title}
                src={image}
                className={classes.sliderLeftImgCollection}
              />
            </li>
          ))}
      </ul>

      <div className={classes.sliderRight}>
        <img
          alt={product.title}
          src={image}
          className={classes.sliderMainImg}
        />
      </div>
    </div>
  );
}
