import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { ChatMessage, Emailto, StyleishLine, Twiterfor } from '../assets/icons'
import CustomButton from '../components/CusButton/CustomButton'

const Contactus = () => {
  return (
    <Container maxWidth="md" >
    <Box textAlign={'center'} mt={1.5}>
    <Typography variant='text' color="success" fontSize={{xs:'16px',sm:'22px', md:'25px'}}>
    CONTACT US
    </Typography>
        <Box textAlign={'center'}>
        <StyleishLine />
        </Box>
    </Box>
    <Box>
      <Box m={2} textAlign={'center'}>
      <ChatMessage />
      </Box>
<Typography p={2} my={1} color="secondary">
Need an ASAP answer? Contact us via chat, 24/7! For existing furniture orders, please call us.
</Typography>  
<Box textAlign={'center'}>
<CustomButton label='CHAT WITH US' variant="contained" color="success" 
sx={{width:{ sm: '230px'}}}
/>
</Box> 
    </Box>
    <Box>
      <Box m={2} textAlign={'center'}>
      <Emailto />
      </Box>
<Typography p={2} my={1} color="secondary">
You can text us at 800-309-2622 – or click on the “text us” link below on your mobile device. Please allow the system to acknowledge a simple greeting (even “Hi” will do!) before providing your question/order details. Consent is not required for any purchase. Message and data rates may apply. Text messaging may not be available via all carriers.
</Typography>  
<Box textAlign={'center'}>
<CustomButton label='TEXT US' variant="contained" color="success" 
sx={{width:{ sm: '230px'}}}
/>
</Box> 
    </Box>
    <Box>
      <Box m={2} textAlign={'center'}>
      <Twiterfor />
      </Box>
<Typography p={2} my={1} color="secondary">
To send us a private or direct message, like @Open Fashion on Facebook or follow us on Twitter. We’ll get back to you ASAP. Please include your name, order number, and email address for a faster response!
</Typography>  
<Box textAlign={'center'}>
<CustomButton label='Twitted' variant="contained" color="success" 
sx={{width:{ sm: '230px'}}}
/>
</Box> 
    </Box>
    </Container>
  )
}

export default Contactus