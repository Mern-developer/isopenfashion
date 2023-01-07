import { Box } from "@mui/material";
import React from "react";

import Typography from "@mui/material/Typography";
import CustomCard from "../CustomCard/CustomCard";
import CustomButton from "../CusButton/CustomButton";
import { CloseIcon } from "../../assets/icons";
import CustomChip from "../CustomChip/CustomChip";
import { Link } from "react-router-dom";

const GridView = ({ title, image1, hashTag, timeLine, uniqId }) => {
  return (
    <>
    <Link to={`/blog-post/${uniqId}`}>
      <Box  {...uniqId} sx={{ position: "relative" }}>
        <Box
          sx={{
            zIndex: 111,
            position: "absolute",
            content: '""',
            width: "100%",
            height: "100%",
            backgroundImage:
              "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.4))",
          }}
        >
          <Typography
            variant="text"
            color="primary"
            sx={{
              position: "absolute",
              content: '""',
              bottom: "10px",
              paddingLeft: "10px",
              letterSpacing: "3px",
            }}
          >
            {title}{" "}
          </Typography>
          <CustomButton
            endIcon={<CloseIcon />}
            sx={{ position: "absolute", content: '""', right: "0px" }}
          ></CustomButton>
        </Box>
        <Box >
        <CustomCard  image={image1} />
        </Box>
      </Box></Link>
      <Box
        mt={1}
        mx={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <CustomChip label={hashTag}></CustomChip>
          <CustomChip label={hashTag} color="error"></CustomChip>
        </Box>
        <Box>
          <Typography variant="caption">{timeLine} Days ago</Typography>
        </Box>
      </Box>

      {/*listview card*/}
    </>
  );
};

export default GridView;
