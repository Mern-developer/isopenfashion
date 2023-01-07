import { Box, Typography } from "@mui/material"
import { StyleishLine } from "./assets/icons"

export const StyleishLineFun=({childern})=>{
    return(
        <Box display={'flex'} justifyContent={'center'} 
        alignItems={'center'} flexDirection={'column'} >
        <Typography variant="p"  >
        <StyleishLine  />
        </Typography>
        </Box> 

    )
}

export const randomApi =(random)=>{
    let temRan = random.length;
    let randNo= Math.floor(Math.random() * temRan);
    return random.slice(0,randNo);
  
  } 
