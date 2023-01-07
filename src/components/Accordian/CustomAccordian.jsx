import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomAccordian = ({title, list1,list2,list3,list4,list5}) => {
  return (
    <Accordion
    square={true}
    disableGutters={true}
    elevation={0}
    >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography variant='h1' color='text.primarysecondary'
       sx={{fontSize: { xs: "18px", md: "22px" }}}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails>
    <Box
    component="ul"
    color="error"
    sx={{
      display: "flex",
      
      ml: 3,
      flexDirection: 'column',
      justifyContent: "center",
      listStyle: "none",
    }}
  >
  {list1 ? 
    <Box
      component="li"
            sx={{
        marginBottom: '10px',
        fontSize: { xs: "15px", md: "18px" },
        color: '#333333',
        cursor: "pointer",
      }}
    >
      {list1}
      
    </Box>
    : null}
    {list2 ? 
    <Box
      component="li"
      
      sx={{
        marginBottom: '10px',
        fontSize: { xs: "15px", md: "18px" },
        color: '#333333',
        cursor: "pointer",
      }}
    >
    {list2}
      
    </Box>: null}
    {list3 ? 
    <Box
      component="li"
      
      sx={{
        marginBottom: '10px',
        fontSize: { xs: "15px", md: "18px" },
        color: '#333333',
        cursor: "pointer",
      }}
    >
      {list3}
      
    </Box>
    : null}
    {list4 ? 
    <Box
      component="li"
      
      sx={{
        marginBottom: '10px',
        fontSize: { xs: "15px", md: "18px" },
        color: '#333333',
        cursor: "pointer",
      }}
    >
      {list4}
      
    </Box> : null}
    {list5 ? 
    <Box
      component="li"
      
      sx={{
        marginBottom: '10px',
        fontSize: { xs: "15px", md: "18px" },
        color: '#333333',
        cursor: "pointer",
      }}
    >
      {list5}
      
    </Box> : null}
  </Box>
    </AccordionDetails>
    </Accordion>
  )
}

export default CustomAccordian