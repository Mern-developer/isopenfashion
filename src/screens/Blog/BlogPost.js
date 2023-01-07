import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom';
import CustomCard from '../../components/CustomCard/CustomCard';
import CustomChip from '../../components/CustomChip/CustomChip';
import { glView } from '../../components/ApiData'
const BlogPost = () => {
const params = useParams();
    let { blogid }= params;
console.log(blogid)
      const savVal = glView.find(i=> i.id == blogid);
    const turncate = savVal.desc;
    const turncateOne = turncate.length / 2;

console.log(blogid)

      return (
    <Container maxWidth='md'>
     <Grid container  mt={2} spacing={1} >
     <Grid item xs={12} sm={6} md={6}>
     <Grid container spacing={1} display={'flex'} justifyContent={'center'}>
     <Grid item xs={10} sm={10} md={10}>
     <CustomCard image={`../${savVal.image}`} />
     </Grid>
     <Typography mt={2}
     sx={{display: {xs: 'none', sm: 'block' }, fontSize: '20px', justifyContent: 'center'}} variant='h3' 
     color='secondary' >
     {savVal.desc.slice(turncateOne, turncate.length)}
     </Typography>     
     </Grid>
   
     </Grid>
             <Grid item  xs={12} sm={6} md={6}>
             <Typography variant='h3' color='text.primary' my={3} 
             sx={{fontSize:{xs: '16px', sm: '22px',md:'28px'}}}>
             {savVal.title} 
             </Typography>
             
             <Typography  variant='h3' color='secondary' mb={2} sx={{
                fontSize:{xs: '18px',md:'20px'}}}>
             {savVal.desc.slice(0, turncateOne)}
             </Typography>     
             
             <Grid container spacing={1} display={'flex'} justifyContent={'center'}>
             <Grid item xs={10} sm={10} md={10}>
             <CustomCard image={`../${savVal.image}`} />
             <Typography my={2} 
             sx={{display: {xs: 'block', sm: 'none' }, justifyContent: 'center' }} 
             variant='h3' color='secondary' fontSize={18}>
             {savVal.desc}
             </Typography>     
            
             </Grid>
             </Grid>
           
             </Grid>   
             </Grid>
                   <Box>
                   <Typography my={2} 
                   variant='h3' color='secondary' fontSize={16}>
                     Posted by OpenFashion | {savVal.timeLine} days ago   
                   </Typography>     
                   </Box>
                <Box>
                <CustomChip label={savVal.hashTag} />
                <CustomChip label={savVal.hashTag} />
                </Box>

    </Container>

  )
}

export default BlogPost



