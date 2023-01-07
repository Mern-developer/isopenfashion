import React, { useEffect, useState } from "react";
import CustomButton from "../CusButton/CustomButton";
import { Box, Container, Grid,  Typography } from "@mui/material";
import {
  ForwardArrow,
  InstagramHollo,
  MainLogo,
  StyleishLine,
  StylishLine,
  TheDot,
  ThreadImage,
} from "../../assets/icons";
import CustomCard from "../CustomCard/CustomCard";
import CustomSlider from "../CustomSlider/CustomSlider";
import CustomChip from "../CustomChip/CustomChip";
import Slider from "../Slider";
import { cardData } from '../ApiData'
const NewArrival = () => {
  // const [newArrivalApi, setNewArrivalApi]= useState(cardData)
  const [newArrival, setNewArrival]= useState([])
  const [checked, setChecked] = useState(true);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
   
  const handleDot = () => {
    setNewArrival(cardData)
    setChecked(true);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
  };
  const handleDot1 = () => {
    setChecked(false);
    setChecked1(true);
    setChecked2(false);
    setChecked3(false);
    setChecked4(false);
    setNewArrival(apparel)
  };
  const handleDot2 = () => {
    setChecked(false);
    setChecked1(false);
    setChecked2(true);
    setChecked3(false);
    setChecked4(false);
    setNewArrival(dress)

  };
  const handleDot3 = () => {
    setChecked(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(true);
    setChecked4(false);
    setNewArrival(tshirt)

  };
  const handleDot4 = () => {
    setChecked(false);
    setChecked1(false);
    setChecked2(false);
    setChecked3(false);
    setChecked4(true);
    setNewArrival(bag)

  };
  const changeColor = checked ? "#212806" : "#888888";
  const changeColor1 = checked1 ? "#212806" : "#888888";
  const changeColor2 = checked2 ? "#212806" : "#888888";
  const changeColor3 = checked3 ? "#212806" : "#888888";
  const changeColor4 = checked4 ? "#212806" : "#888888";



  const responsiveSettings = [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ];
const apparel = cardData.filter((item)=> item.category === "Apparel");
const dress = cardData.filter((item)=> item.category === "Dress");
const tshirt = cardData.filter((item)=> item.category === "Tshirt");
const bag = cardData.filter((item)=> item.category === "Bag");

useEffect(()=>{
  setNewArrival(cardData);
},[])
  return (
    <>
    <Slider />
      <Box
        component="ul"
        color="error"
        sx={{
          display: "flex",
          mt: 2,
          justifyContent: "center",
          listStyle: "none",
        }}
      >
        <Box
          component="li"
          onClick={handleDot}
          sx={{
            marginRight: { xs: "10px", md: "30px" },
            fontSize: { xs: "14px", md: "18px" },
            color: changeColor,
            cursor: "pointer",
          }}
        >
          All
          {checked ? (
            <Box textAlign={'center'}>
              <TheDot width="15" height="15" />
            </Box>
          ) : null}
        </Box>
        <Box
          component="li"
          onClick={handleDot1}
          sx={{
            marginRight: { xs: "10px", md: "30px" },
            fontSize: { xs: "14px", md: "18px" },
            color: changeColor1,
            cursor: "pointer",
          }}
        >
          Apparel
          {checked1 ? (
            <Box textAlign={'center'}>
              <img src="images/theDot.svg" width={11} alt="" />
            </Box>
          ) : null}
        </Box>
        <Box
          component="li"
          onClick={handleDot2}
          sx={{
            marginRight: { xs: "10px", md: "30px" },
            fontSize: { xs: "14px", md: "18px" },
            color: changeColor2,
            cursor: "pointer",
          }}
        >
          Dress
          {checked2 ? (
            <Box textAlign={'center'}>
              <TheDot width="15" height="15" />
            </Box>
          ) : null}
        </Box>
        <Box
          component="li"
          onClick={handleDot3}
          sx={{
            marginRight: { xs: "10px", md: "30px" },
            fontSize: { xs: "14px", md: "18px" },
            color: changeColor3,
            cursor: "pointer",
          }}
        >
          Tshirt
          {checked3 ? (
            <Box textAlign={'center'}>
              <TheDot width="15" height="15" />
            </Box>
          ) : null}
        </Box>
        <Box
          component="li"
          onClick={handleDot4}
          sx={{
            marginRight: { xs: "10px", md: "30px" },
            fontSize: { xs: "14px", md: "18px" },
            color: changeColor4,
            cursor: "pointer",
          }}
        >
          Bag
          {checked4 ? (
            <Box textAlign={'center'}>
              <TheDot sx={{ ml: 2 }} width="15" height="15" />
            </Box>
          ) : null}
        </Box>
      </Box>
      <Box sx={{ width: "95%", margin: "0 auto" }}>
        <Grid container spacing={1}>
          {newArrival.map((item, i) => {
            return (
              <Grid  item xs={6} sm={4} md={3}>
                <CustomCard
                  key={i}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.img}
                  titleStyle={{fontSize: {xs: '14px' ,sm:'20px'}, px:1}}
                ></CustomCard>
              </Grid>
            );
          })}
        </Grid>
        <Box textAlign={"center"}>
          <CustomButton
            sx={{  my: 3, width: "230px", fontSize: '16px',fontWeight: '400' }}
            label={"Explore More"}
            endIcon={<ForwardArrow color="text.primary" />}
            variant="outlined"
            color="success"
          />
        </Box>
      </Box>

      <Box textAlign={"center"} mt={2}>
        <StyleishLine />
        <Box
          my={3}
          sx={{
            width: { xs: "100%", sm: "60%" },
            display: "flex",
            justifyContent: "space-between",
            mx: "auto",
          }}
        >
          <Box ml={1}>
            <img
              src="images/Tiffany&Co.png"
              width={{ xs: "80px", md: "150px" }}
              alt=""
            />
          </Box>
          <Box>
            <img
              src="images/Gucci.png"
              width={{ xs: "80px", md: "150px" }}
              alt=""
            />
          </Box>
          <Box mr={1}>
            <img
              src="images/Catier.png"
              width={{ xs: "80px", md: "150px" }}
              alt=""
            />
          </Box>
        </Box>
        <StyleishLine />
      </Box>
      {/* Collection*/}
      <Box>
        <Typography
          variant="h1"
          sx={{ mt: 6, mb: 2, fontSize: { xs: "20px", md: "28px" } }}
          textAlign={"center"}
          color="text.primary"
        >
          COLLECTION
        </Typography>

        <Box textAlign={"center"}>
          <CustomCard
            
            style={{ height: { xs: "100%", md: "400px" } }}
            cardActionStyle={{ boxShadow: "none" }}
            image="images/Frame2.png"
          ></CustomCard>
        </Box>
      </Box>

      {/* slider*/}

      <Box sx={{ width: { md: "900px" }, mt: 1, mx: "auto" }}>
        <Typography
          variant="h1"
          sx={{
            letterSpacing: "3px",
            fontSize: { xs: "20px", md: "28px" },
            fontWeight: "400",
          }}
          textAlign={"center"}
          color="text.primary"
        >
          JUST FOR YOU
          <Box mt={1}>
            <StylishLine   width="250px" height="20px" />
          </Box>
        </Typography>
        <CustomSlider
          indicator={true}
          slidesToShow={2}
          slidesToScroll={1}
          responsiveSettings={responsiveSettings}
        >
          {cardData.slice(0,5).map((item, i) => {
            return (
              <Box>
                <CustomCard
                  key={i}
                  titleStyle={{fontSize: '12px',px: 1}}
                  title={item.title}
                  price={item.price}
                  category={item.category}
                  image={item.img}
                ></CustomCard>
              </Box>
            );
          })}
        </CustomSlider>
      </Box>

      {/* Trending*/}
      <Box my={5}>
        <Typography
          variant="h1"
          sx={{
            letterSpacing: "3px",
            fontSize: { xs: "17px", md: "20px" },
            fontWeight: "400",
          }}
          textAlign={"center"}
          color="text.primary"
        >
          @ TRENDING
        </Typography>
        <Box textAlign={'center'} mt={3}>
        <CustomChip sx={{m:1}}  label="#2021" color='secondary'  />
        <CustomChip sx={{m:1}}  label="#spring" color='secondary'  />
        <CustomChip sx={{m:1}} label="#collection" color='secondary'  />
        <CustomChip sx={{m:1}} label="#fall" color='secondary'  />
        <CustomChip sx={{m:1}} label="#dress" color='secondary'  />
        <CustomChip sx={{m:1}} label="#autumncollection" color='secondary'  />
        <CustomChip sx={{m:1}}  label="#openfashion" color='secondary'  />
        </Box>
      </Box>
{/*
openfashion
*/}
<Box sx={{ bgcolor: "background.default", padding: '30px 0px'}}>
<Box  textAlign={'center'}>
<MainLogo />
</Box>
<Typography mt={4} textAlign={'center'} variant="h3" color='text.secondary' sx={{fontSize: '14px'}}
>Making a luxurious lifestyle accessible for a generous group of women is our daily drive.
<Box mt={1}>
  <StylishLine  width="250px" height="20px" />
</Box>
</Typography>
<Box>
<Grid container spacing={1}>
  <Grid item xs={6} md={3}>
  <Box textAlign={'center'} >
  <img src='images/MiroodlesSticker.png' alt='' />
  <Typography mt={2} textAlign={'center'} variant="h3" color='text.secondary' sx={{fontSize: '14px'}} >
  Fast shipping. Free on orders over $25.
  </Typography>
  </Box>
  </Grid>
  <Grid item xs={6} md={3}>
  <Box textAlign={'center'} >
  <img src='images/MiroodlesSticker.png' alt=''/>
  <Typography mt={2} textAlign={'center'} variant="h3" color='text.secondary' sx={{fontSize: '14px'}} >
  Fast shipping. Free on orders over $25.
  </Typography>
  </Box>
  </Grid>
  <Grid item xs={6} md={3}>
  <Box textAlign={'center'} >
  <img src='images/MiroodlesSticker.png' alt=''/>
  <Typography mt={2} textAlign={'center'} variant="h3" color='text.secondary' sx={{fontSize: '14px'}} >
  Fast shipping. Free on orders over $25.
  </Typography>
  </Box>
  </Grid>
  <Grid item xs={6} md={3}>
  <Box textAlign={'center'} >
  <img src='images/MiroodlesSticker.png' alt='' />
  <Typography mt={2} textAlign={'center'} variant="h3" color='text.secondary' sx={{fontSize: '14px'}} >
  Fast shipping. Free on orders over $25.
  </Typography>
  </Box>
  </Grid>
</Grid>

</Box>
<Box mt={3} textAlign={'center'}>
<ThreadImage  />
</Box>
</Box>

{/*Follow us*/}
<Box mt={3}>
<Typography textAlign={'center'} sx={{letterSpacing: '3px',fontSize: {xs: '20px' ,md:'28px'}}} variant='h2'>
FOLLOW US
</Typography>
<Box mt={1} textAlign={'center'}>
<InstagramHollo />
</Box>
<Container  maxWidth='md'>
<Grid mt={3} px={1} container >
<Grid item xs={6} sm={3} >
<Box >
<img src="images/Rectangle335.png" alt='Follows' 
sx={{position: 'relative'}} />
<Box sx={{position:  'absolute', content: '""', background: 'rgba(0,0,0,0.5)', 
marginTop: '-34px',
width: '163px', height: '30px', zIndex: 11}}>
<Typography sx={{color: '#fff', fontSize: '14px', fontWeight: '400', }}>
@ Fello
</Typography>  
</Box>
</Box>
</Grid>
<Grid item xs={6} sm={3} >
<Box >
<img src="images/Rectangle335.png" alt='Follows' 
sx={{position: 'relative'}} />
<Box sx={{position:  'absolute', content: '""', background: 'rgba(0,0,0,0.5)', 
marginTop: '-34px',
width: '163px', height: '30px', zIndex: 11}}>
<Typography sx={{color: '#fff', fontSize: '14px', fontWeight: '400', }}>
@ Fello
</Typography>  
</Box>
</Box>
</Grid>
<Grid item xs={6} sm={3} >
<Box >
<img src="images/Rectangle335.png" alt='Follows' 
sx={{position: 'relative'}} />
<Box sx={{position:  'absolute', content: '""', background: 'rgba(0,0,0,0.5)', 
marginTop: '-34px',
width: '163px', height: '30px', zIndex: 11}}>
<Typography sx={{color: '#fff', fontSize: '14px', fontWeight: '400', }}>
@ Fello
</Typography>  
</Box>
</Box>
</Grid>
<Grid item xs={6} sm={3} >
<Box >
<img src="images/Rectangle335.png" alt='Follows' 
sx={{position: 'relative'}} />
<Box sx={{position:  'absolute', content: '""', background: 'rgba(0,0,0,0.5)', 
marginTop: '-34px',
width: '163px', height: '30px', zIndex: 11}}>
<Typography sx={{color: '#fff', fontSize: '14px', fontWeight: '400', }}>
@ Fello
</Typography>  
</Box>
</Box>
</Grid>






</Grid>
</Container>
</Box>

</>
  );
};

export default NewArrival;
