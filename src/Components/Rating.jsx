import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  Rating: {
    display: "flex",
    alignItems: "center"
  }
});

export default function Rating({ rating, maxRating, size = 1.2 }) {
  const classes = useStyles();

  return (
    <div className={classes.Rating}>
      {new Array(maxRating).fill(0).map((_, index) => {
        const isActive = rating >= index + 1;
        return isActive ? (
          <AiFillStar fontSize="15px" key={index} />
        ) : (
          <AiOutlineStar fontSize="15px" key={index} />
        );
      })}
    </div>
  );
}
