import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Typography from "@mui/material/Typography";
import { Carousel } from "react-responsive-carousel";

import { Box } from '@mui/material';
const Slider = () => {
    const imageSize = {
        width: '100%',
        height: '500px'
       };
     
  return (
    <Box>
    <Carousel infiniteLoop autoPlay> 
    <Box >
     <img alt="" src="images/unplash7.png" style={imageSize}/>
     <p className="legend" sx={{width: {xs: '220px'}}}>EXPLORE COLLECTION</p>
     </Box>
    <Box >
     <img alt="" src="images/unplash3.png" style={imageSize}/>
     </Box>
    <Box >
     <img alt="" src="images/unplash2.png" style={imageSize}/>
     </Box>
    <Box >
    <img alt="" src="images/unplash5.png" style={imageSize}/>
    </Box>
    </Carousel>
{/* new rrival page*/}

<Typography textAlign={'center'} sx={{letterSpacing: '3px',fontSize: {xs: '20px' ,md:'28px'}}} variant='h2'>
NEW ARRIVAL
</Typography>
</Box>

  )
}

export default Slider