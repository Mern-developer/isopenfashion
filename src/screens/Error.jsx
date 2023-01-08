import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { DummyTailor } from '../assets/icons'
import CustomButton from '../components/CusButton/CustomButton'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
const Error = () => {
  return (
    <Container mt={3} maxWidth="md">
    <Typography  variant='text' color="success" fontSize={{xs:'16px',sm:'22px', md:'25px'}}>
    PAGE NOT FOUND
    </Typography>
    <Box my={9} textAlign={'center'}>
    <DummyTailor />
    </Box>

    <Typography my={2} variant="h1" color="success" sx={{fontSize: {xs:'16px',sm:'22px', md:'25px'} }}>
    We can't find the page you looking for, it will return to the
    </Typography>
   
    <Box sx={{paddingTop: '100px'}} >
<CustomButton label='HOME PAGE' variant="contained" color="success" 
sx={{width:{ sm: '230px'}}}
startIcon={<KeyboardBackspaceIcon /> }
/>
</Box> 

    </Container>
  )
}

export default Error