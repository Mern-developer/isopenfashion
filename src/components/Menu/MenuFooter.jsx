import { Box, Typography } from '@mui/material'
import React from 'react'
import { CallIcon, LocationIcon, Twitter,StylishLine, Youtube, Instagram } from '../../assets/icons'
const MenuFooter = () => {
  return (
    <>
    <Box my={3} display={'flex'} >
    <CallIcon />
    <Typography variant='h1' color='text.secondary' sx={{fontSize: '16px'}} ml={1}>(+92) 3043138173</Typography>
    </Box>
    <Box display={'flex'} >
    <LocationIcon />
    <Typography variant='h1' color='text.secondary' sx={{fontSize: '16px'}} ml={1}>Store locator</Typography>
    </Box>
    <Box my={3} textAlign={'center'}>
    <Box  sx={{width: '150px', mx: 'auto'}}>
    <StylishLine />
    </Box>
    <Box mt={1}>
    <Twitter /> {' '}
    <Youtube />{ ' '}
    <Instagram />
    
    </Box>
    </Box>
    
    </>
  )
}

export default MenuFooter