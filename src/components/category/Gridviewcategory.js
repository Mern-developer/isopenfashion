import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Box, Checkbox } from '@mui/material';
import React from 'react'
import CustomCard from '../CustomCard/CustomCard';

const Gridviewcategory = ({item}) => {

  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
<>


      <Box 
      position={{position:"relative"}}  
      >
          <Checkbox
            sx={{
              content: '""',
              position: 'absolute',
              zIndex: 111,
              top: {xs: "55%", sm:'65%'},
              right: "1.1%",
            }}
            {...label}
            color="info"
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="info" />}
          />
          <CustomCard
          image={item.images[1]}
          title={item.title}
          titleStyle={{
            fontSize: "18px",
            fontWeight: "400",
            my: 0.5,
          }}
          subTitleStyle={{
              fontSize: "14px",
              fontWeight: "400",
              my: 0.5,
            }}
            elevation={0}
            subTitle={item.subTitle}
            price={item.price}
          />
          </Box>
         


</>

    )
}

export default Gridviewcategory