import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { GirdViewIcon, ListVeiw, Plus, StylishLine } from "../../assets/icons";
import CustomButton from "../../components/CusButton/CustomButton";
import CustomChip from "../../components/CustomChip/CustomChip";
import GridView from "../../components/Bolg/GridView";
import ListViewLayout from "../../components/Bolg/ListViewLayout";
import { glView } from '../../components/ApiData'
const Blog = () => {
  
  const [GridLayout, setGridLayout] = useState(true);
  const handleGridView = () => {
    setGridLayout(true);
  };
  const handleGridView2 = () => {
    setGridLayout(false);
  };
 const [loadApi, setLoadApi]=useState(2);
 const loadMore=()=>{
  setLoadApi(loadApi + 2);
 }
 
 return (
    <>
      <Box mt={3}>
        <Typography
          textAlign={"center"}
          sx={{ letterSpacing: "3px", fontSize: { xs: "20px", md: "28px" } }}
          variant="h2"
        >
          Blog
        </Typography>
        <Box mt={1} textAlign={"center"}>
          <StylishLine width='170px' height='20px'/>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "end" }}>
          <Box
          onClick={handleGridView}
            sx={{
              width: "40px",
              height: "40px",
              background: "#E7EAEF",
              borderRadius: "50px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              mr: 1,
            }}
          >
            <GirdViewIcon />
          </Box>
          <Box
          onClick={handleGridView2}
            sx={{
              width: "40px",
              height: "40px",
              background: "#E7EAEF",
              borderRadius: "50px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              mr: 1,
            }}
          >
            <ListVeiw />
          </Box>
        </Box>
      </Box>
      {/* */}
      <Box mt={3} textAlign={"center"}>
        <CustomChip
          label="Fashion"
          color="secondary"
          sx={{ letterSpacing: "1px", fontSize: "14px", fontWeight: "400" }}
        />
        <CustomChip
          label="Promo"
          color="secondary"
          sx={{ letterSpacing: "2px", mx: 1 ,fontSize: "14px", fontWeight: "400" }}
        />
        <CustomChip
          label="Policy"
          color="secondary"
          sx={{ letterSpacing: "1px", fontSize: "14px", fontWeight: "400" }}
        />
        <CustomChip
          label="Lookbook"
          color="secondary"
          sx={{ mx: 1 ,letterSpacing: "1px", fontSize: "14px", fontWeight: "400" }}
        />
      </Box>
      <Box>
      {/*grid layout*/}
      {GridLayout === true ? (

        <Box my={2}>
          <Grid container spacing={1}>
            {glView.slice(0, loadApi).map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <GridView 
                    uniqId={item.id}
                    title={item.title}
                    image={item.image}
                    image1={item.image1}
                    hashTag={item.hashTag}
                    timeLine={item.timeLine}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      ) : (
        <>
        {/*List laout*/}
     <Box>
     {glView.slice(0, loadApi).map((item) => {
      return (
        <ListViewLayout uniqId={item.id}
        title={item.title}
        image={item.image}
        descr={item.desc}
        
        timeLine={item.timeLine} />
      )})}
     </Box>   
     </>
      )}

        <Box textAlign={"center"} my={3}>
          <CustomButton
            variant={loadApi < glView.length ? "outlined" : "contained"}
            endIcon={<Plus  />}
            color="success"
            sx={{
              height: { xs: "35px", sm: "48px" },
              width: "236px",
              fontSize: "16px",
              fontWeight: "400",
            }}
            onClick={loadApi < glView.length ? loadMore : null}
             
              label={loadApi < glView.length ? " LOAD MORE " : 'DONE!'}
            
          />
        </Box>
      </Box>
    </>
  );
};

export default Blog;

