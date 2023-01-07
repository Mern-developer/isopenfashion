import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Close, FilterIcon, GirdViewIcon, ListVeiw } from "../../assets/icons";
import { categoryData } from "../../components/ApiData";
import Gridviewcategory from "../../components/category/Gridviewcategory";
import ListviewCategory from "../../components/category/ListviewCategory";
import CustomChip from "../../components/CustomChip/CustomChip";
import CustomPagination from "../../components/Pagination/CustomPagination";

const Category = () => {
  const [g_lView, setg_lView] = useState(!true);
  const handleGrideView = () => {
    setg_lView((prev) => (!prev ? true : false));
  };
  const itemsPerPage = 3;
  const [currentPage1, setCurrentPage1] = useState(0);
  const lastIndex = currentPage1 * itemsPerPage;
  const productRenderPage = categoryData.slice(
    lastIndex,
    lastIndex + itemsPerPage
  );
  const pageCount = Math.ceil(categoryData.length / itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage1(event.selected);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          my={3}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            variant="h1"
            color="text.secondary"
            sx={{ fontSize: "15px", fontWeight: "400" }}
          >
            4500 APPAREL
          </Typography>
          <Box display={"flex"}>
            {g_lView ? (
              <Box mr={2} onClick={handleGrideView}>
              <ListVeiw />
              </Box>
            ) : (
              <Box mr={2} onClick={handleGrideView}>
              <GirdViewIcon />
              </Box>
            )}

            <Box ml={2}>
              <FilterIcon fill="red" />
            </Box>
          </Box>
        </Box>
        <Box >
          <CustomChip
            label="Women"
            deleteIcon={
              <Close
                width="20px"
                height="20px"
                style={{
                  paddingRight: "5px",
                }}
              />
            }
          />
          <CustomChip sx={{mx:1}}
            label="All apprael"
            deleteIcon={
              <Close
                width="20px"
                height="20px"
                style={{ paddingRight: "5px" }}
              />
            }
          />
        </Box>

        {/*Grid View */}
        {g_lView ? (
          <Grid my={2} container spacing={1}>
            {productRenderPage.map((item) => {
              return (
                <Grid key={item.id} item sx={6} sm={4} md={3}>
                  <Gridviewcategory item={item} />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <Grid my={2} container spacing={1}>
            <Stack>
              {productRenderPage.map((item) => {
                return <ListviewCategory item={item} />;
              })}
            </Stack>
          </Grid>
        )}
      </Container>
      <CustomPagination pageCount={pageCount} onPageChange={handlePageClick} />
    </>
  );
};

export default Category;
