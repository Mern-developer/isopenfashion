import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/system";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import MenuAccordian from "../components/Menu/MenuAccordian";
import MenuAccordian1 from "../components/Menu/MenuAccordian1";
import MenuAccordian2 from "../components/Menu/MenuAccordian2";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

const Menu = ({setOpen}) => {
  const [value, setValue] = React.useState(0);
  const [tabsIcon, setTabsIcon] = React.useState(true);
  const [tabsIcon2, setTabsIcon2] = React.useState(false);
  const [tabsIcon3, setTabsIcon3] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
   
    if(event.target.id === 'simple-tab-0' ){
      setTabsIcon(true)
      setTabsIcon2(false)
      setTabsIcon3(false)
    }else if (event.target.id === 'simple-tab-1'){
      setTabsIcon2(true)
      setTabsIcon3(false)
      setTabsIcon(false)
    }
    else if (event.target.id === 'simple-tab-2'){
      setTabsIcon(false)
      setTabsIcon2(false)
      setTabsIcon3(true)
    }

  };
  return (
    <>
      <Box my={1} onClick={()=>setOpen(false)} sx={{cursor: 'pointer' ,fontSize:'16px', fontWeight: '600'}}>
        X
      </Box>
      <Box sx={{ width: '100%', marginTop: '-10px'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={value} onChange={handleChange}
          aria-label="icon label tabs example"
           indicatorColor="error"
            
            sx={{ '& button.Mui-selected': { color: '#1A1b24' }, }}
          >
            <Tab disableRipple={true} label="WOMEN" {...a11yProps(0)}
            icon={tabsIcon ? (
              <Box textAlign={'center'} zIndex={-1111}>
                <img src="images/theDot.svg" width={11} alt="" />
              </Box>
            ) : null } iconPosition='bottom'
                sx={{padding:'0px', marginBottom: '-20px', fontSize: '16px',
              fontWeight: '400', lineHeight: '16px', fontamily: 'Tenor Sans' }}
             />
            <Tab disableRipple={true} label="MAN" {...a11yProps(1)}
            icon={tabsIcon2 ? (
              <Box textAlign={'center'} >
                <img src="images/theDot.svg" width={11} alt="" />
              </Box>
            ) : null } iconPosition='bottom'
            sx={{padding:'0px', marginBottom: '-20px', fontSize: '16px',
          fontWeight: '400', lineHeight: '16px', fontamily: 'Tenor Sans' }}
               />
            <Tab disableRipple={true} label="KIDS" {...a11yProps(2)}
            icon={tabsIcon3 ? (
              <Box  textAlign={'center'} >
                <img sx={{ background: 'red'}} src="images/theDot.svg" width={11} alt="" />
              </Box>
            ) : null } iconPosition='bottom'
            sx={{padding:'0px', marginBottom: '-20px', fontSize: '16px',
          fontWeight: '400', lineHeight: '16px', fontamily: 'Tenor Sans' }}
               />
            
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} sx={{padding: '0px', margin:'0px'}}>
                 <MenuAccordian />
        </TabPanel>
        <TabPanel value={value} index={1}>
        <MenuAccordian1 />

        </TabPanel>
        <TabPanel value={value} index={2}>
        <MenuAccordian2 />
        
        </TabPanel>
        
      </Box>
    </>
  );
};

export default Menu;
