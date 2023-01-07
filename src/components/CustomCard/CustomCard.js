import React from 'react'
import Card from '@mui/material/Card';
import {  CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';


const CustomCard = ({ cardActionStyle,textAlign, subTitle,
  titleStyle,position, subTitleStyle, style,elevation, title, image, price}) => {
  return (
    <Card sx={cardActionStyle} elevation={elevation} >
    <CardActionArea disableRipple={true}>
      
     <CardMedia 
        component="img"
        image={image}
        alt="green iguana"
        style={style} //style={style}
        sx={position}
        />
     
     
      {title && (
      <CardContent sx={{m:'0px 0px 0px 0xp', p: '5px 0px 0px 0px',}}>
        <Typography textAlign={textAlign} variant="h5" sx={titleStyle} component="div">
            {title}
          </Typography>
        {subTitle && ( 
          <Typography textAlign={textAlign} variant="h5" sx={subTitleStyle} component="div">
            {subTitle}
          </Typography>
          ) }
          </CardContent>
          )}  
    </CardActionArea>
    {price && ( 
    <CardActions textAlign={textAlign}>
      <Typography variant='h1' sx={{fontSize: '14px', color: '#DD8560'  }}  >
        ${price}
      </Typography>
      </CardActions>
      )}
  </Card>
  )
}

export default CustomCard