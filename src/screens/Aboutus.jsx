import { Box, Container, TextField, Typography } from '@mui/material'
import React from 'react'
import { ForwardArrow, StyleishLine } from '../assets/icons'
import CustomButton from '../components/CusButton/CustomButton'
import CustomCard from '../components/CustomCard/CustomCard'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Aboutus = () => {
  return (
    <Container maxWidth="md">
    <Box textAlign={'center'} mt={1.5}>
    <Typography variant='text' color="success" fontSize={{xs:'16px',sm:'22px', md:'25px'}}>
    OUR STORY
    </Typography>
        <Box textAlign={'center'}>
        <StyleishLine />
        </Box>
    </Box>
    <Typography my={2} variant={'text'} color={'secondary'}>
    Open Fashion - Free Ecommerce UI Kit is a free download UI kit. You can open Open Fashion - Free Ecommerce UI Kit file by Figma. Create stunning shop with bulletproof guidelines and thoughtful components. Its library contains more than 50+ components supporting Light & Dark Mode and 60+ ready to use mobile screens.
    </Typography>
    <Box my={1}>
    <CustomCard image={'images/image3.png'} elevation='0' />
    </Box>
    <Box textAlign={'center'} mt={1.5}>
    <Typography variant='text' color="success" fontSize={{xs:'16px',sm:'22px', md:'25px'}}>
    SIGN UP
    </Typography>
        <Box textAlign={'center'}>
        <StyleishLine />
        </Box>
    </Box>
    <Typography my={2} variant="text" color='secondary'>
    Receive early access to new arrivals, sales, exclusive content, events and much more!
    </Typography>
    <Box 
    sx={{ my: '30px'}}
    component="form"
    textAlign={'center'}
  >
    <TextField variant="filled" sx={{width: {xs: '100%', sm: '230px'}, height: '40px'}} label="Email Address" color="secondary" />
  </Box>
  <Box textAlign={'center'}>
<CustomButton label='SUBMIT' variant="contained" color="success" 
endIcon={<ArrowRightAltIcon  />} 
sx={{width:{xs: '100%', sm: '230px'}}}
/>
</Box>
    </Container>

  )
}

export default Aboutus