import React from "react";
import { makeStyles } from "@mui/styles";

// for react-alice-carousel
import AliceCarousel from "react-alice-carousel";
import SliderOne from "./SliderOne";
// for react-alice-carousel End

import { AllContextState } from "../../context/ContextAPI";

const useStyles = makeStyles({
  Slider: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default function Slider() {
  const classes = useStyles();

  const { trendingProdFilter } = AllContextState();

  const sliderProducts = trendingProdFilter.map((coin, ind) => {
    return (
      <>
        <SliderOne
          key={ind}
          coin={coin}
          style={{
            height: "300px",

            "@media (min-width: 980px)": {
              width: "218px"
            },

            "@media (max-width: 980px)": {
              width: "280px"
            },
            "@media (max-width: 970px)": {
              width: "275px"
            },
            "@media (max-width: 960px)": {
              width: "270px"
            },
            "@media (max-width: 940px)": {
              width: "265px"
            },
            "@media (max-width: 920px)": {
              width: "260px"
            },
            "@media (max-width: 900px)": {
              width: "255px"
            },
            "@media (max-width: 890px)": {
              width: "250px"
            },
            "@media (max-width: 870px)": {
              width: "245px"
            },
            "@media (max-width: 850px)": {
              width: "240px"
            },
            "@media (max-width: 840px)": {
              width: "235px"
            },
            "@media (max-width: 820px)": {
              width: "230px"
            },
            "@media (max-width: 800px)": {
              width: "225px"
            },
            "@media (max-width: 790px)": {
              width: "220px"
            },
            "@media (max-width: 770px)": {
              width: "215px"
            },
            "@media (max-width: 750px)": {
              width: "210px"
            },
            "@media (max-width: 740px)": {
              width: "205px"
            },
            "@media (max-width: 720px)": {
              width: "200px"
            },
            "@media (max-width: 700px)": {
              width: "290px"
            },
            "@media (max-width: 690px)": {
              width: "285px"
            },
            "@media (max-width: 670px)": {
              width: "280px"
            },
            "@media (max-width: 660px)": {
              width: "275px"
            },
            "@media (max-width: 650px)": {
              width: "270px"
            },
            "@media (max-width: 640px)": {
              width: "265px"
            },
            "@media (max-width: 630px)": {
              width: "260px"
            },
            "@media (max-width: 620px)": {
              width: "255px"
            },
            "@media (max-width: 610px)": {
              width: "250px"
            },
            "@media (max-width: 580px)": {
              width: "245px"
            },
            "@media (max-width: 570px)": {
              width: "240px"
            },
            "@media (max-width: 560px)": {
              width: "235px"
            },
            "@media (max-width: 550px)": {
              width: "230px"
            },
            "@media (max-width: 540px)": {
              width: "225px"
            },
            "@media (max-width: 530px)": {
              width: "220px"
            },
            "@media (max-width: 520px)": {
              width: "310px"
            }
          }}
        />
      </>
    );
  });

  const responsive = {
    0: {
      items: 1
    },
    520: {
      items: 2
    },
    700: {
      items: 3
    },
    980: {
      items: 4
    }
  };

  return (
    <>
      <div className={classes.Slider} style={{}}>
        <AliceCarousel
          mouseTracking
          infinite
          autoPlayInterval={1000}
          animationDuration={1500}
          disableDotsControls
          disableButtonsControls
          responsive={responsive}
          autoPlay
          items={sliderProducts}
        />
      </div>
    </>
  );
}
