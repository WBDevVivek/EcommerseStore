import { makeStyles } from "@mui/styles";

import { Select, MenuItem } from "@mui/material";

const useStyles = makeStyles({
  SelectComp: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    color: "black",
    borderRadius: "5px"
  }
});

const SelectComp = ({ onChange, style, menuPropsStyle, array, value }) => {
  const classes = useStyles();

  return (
    <Select
      className={classes.SelectComp}
      variant="outlined"
      onChange={onChange}
      value={value || ""}
      sx={[style]}
      MenuProps={{
        PaperProps: {
          sx: menuPropsStyle
        }
      }}
    >
      {array?.map((cat, i) => (
        <MenuItem
          key={i}
          value={cat}
          sx={{
            lineHeight: "80%",
            minHeight: "auto",
            "@media (max-width: 600px)": {}
          }}
        >
          {cat}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectComp;

// ---------------------------------------------------------------------------
