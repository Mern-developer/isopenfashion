import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import CustomChip from "../CustomChip/CustomChip";

const ListviewCategory = ({ item }) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <>
    <Card  sx={{ my: 1 ,display: 'flex' }} elevation={0}>
    <CardMedia
    component="img"
    sx={{width: {xs: "119px", sm: '150px', md: '300px'}
, height: {xs: '185px',sm: '230px' , md: '320px'}, objectFit: 'cober'}}
    image={item.images[0]}
    alt=""
  />
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
      <Typography
      variant="h1"
      color="text.primary"
      sx={{
        fontSize: { xs: "16px", sm: "18px", md: "24px" },
        fontWeight: "400",
      }}
    >
      {item.title}
    </Typography>
    <Typography
      mt={1}
      varant="h1"
      color="text.primary"
      sx={{
        fontSize: { xs: "14px", sm: "16px", md: "20px" },
        fontWeight: "400",
      }}
    >
    {item.subTitle}
    </Typography>
    <Typography
    variant="h1"
    color="text.primary"
      sx={{
        fontSize: { xs: "14px", sm: "16px", md: "18px" },
        fontWeight: "400", py: {xs: 1, sm: 2 , md: 3}
      }}
    >
      ${item.price}
    </Typography>
    <Box sx={{ py: {xs: 1, sm: 2 , md: 3} }} display={"flex"} alignItems={"center"}>
      <Rating
        name="size-small"
        max={1}
        defaultValue={1}
        size="small"
      />
      <Typography
      ml={1}
      variant="h1"
        color="text.primary"
        sx={{
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          fontWeight: "400",
        }}
      >
        {item.ratings} Ratings
      </Typography>
    </Box>
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
    <Box display={"flex"} alignItems={"center"}>
    <Typography
    variant="h1"
    color="text.primary"
          sx={{ fontSize: { xs: "13px", md: "16px" },py: {xs: 0, sm: 2 , md: 3} }}
        >
          Size
          </Typography>
        {item.size.map(size=>{
          return(
            <CustomChip key={size.size}
              sx={{ mx: 1 }}
              label={size[0]}
              onClick={() => console.log("first")}
            />
  
          )
        })}
  
      </Box>
      <Checkbox
        {...label}
        color="info"
        icon={<FavoriteBorder />}
        checkedIcon={<Favorite color="info" />}
        />
</Box>


      </CardContent>
      
    </Box>
    
  </Card>
    </>
  );
};

export default ListviewCategory;




//   </Box>
//   </Box>
// </Card>

// </Box>
