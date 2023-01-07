import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

const ListViewLayout = ({   title,
    image,
   descr,
  hashTag,
 timeLine}) => {
  return (
<>

<Container maxWidth='md' >
<Stack spacing={1}>
<Card sx={{ display: 'flex' }}>
<CardMedia
 component="img"
 sx={{ maxWidth: {xs: 160 ,md: 251} }}
 image={image}
 alt="image"
/>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
 <CardContent sx={{ flex: '1' }}>
   <Typography gutterBottom component="div" variant="h5" sx={{fontSize: '16px',
    fontWeight: '400'}}>
   {title}
   </Typography>
   <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontSize: '13px'}}>
{descr}
   </Typography>
 </CardContent>
 <Box sx={{ display: 'flex', alignItems: 'center', pl: 1.9, pb: 8 }}>
   <Typography variant='caption'>{timeLine}Days ago</Typography>
 </Box>
</Box>

</Card>
</Stack>
<Box>
</Box>
</Container>

</>
    )
}

export default ListViewLayout