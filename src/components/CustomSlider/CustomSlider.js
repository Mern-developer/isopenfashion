import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const CustomSlider = ({indicator, slidesToShow, slidesToScroll,sx,responsiveSettings, children}) => {
   
  return (
    <>
    <div>
    <Slide sx={sx} slidesToScroll={slidesToScroll} slidesToShow={slidesToShow} indicators={indicator} responsive={responsiveSettings}>
        {children}
    </Slide>
</div>
    
    </>
  )
}

export default CustomSlider