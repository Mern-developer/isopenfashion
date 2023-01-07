import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  Bleach,
  Clean,
  CODPolicy,
  FastDelivery,
  Iron,
  Plus,
  TumbleDry,
} from "../assets/icons";
import CustomButton from "../components/CusButton/CustomButton";
import { Favorite, Refresh } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Gridviewcategory from "../components/category/Gridviewcategory";
import { categoryData } from "../components/ApiData";
import { randomApi } from "../Helper";

const ProductDetail = () => {
  const data = [
    {
      id: 1,
      img: "images/Rectangle344(1).png",
    },
    {
      id: 2,
      img: "images/Rectangle344(3).png",
    },
    {
      id: 3,
      img: "images/Rectangle344(4).png",
    },
    {
      id: 4,
      img: "images/Rectangle344(5).png",
    },
  ];
  const [apiData] = useState(categoryData);
  const [getImages, setImages] = useState("");
  const [getImage] = useState(data.slice(0, 1));
  const tempString = getImage.map((a) => a.img).toString();


  const result = randomApi(apiData);
  return (
    <>
      <Container maxWidth="md">
        <Grid my={2} container spacing={1} column={{ xs: 12, sm: 8 }}>
          <Grid item xs={12} sm={6} md={6}>
            <Card
              elevation={0}
              sx={{ width: { xs: "100%", sm: { maxWidth: "350px" } } }}
            >
              {getImages === "" ? (
                <CardMedia
                  component="img"
                  sx={{ objectFit: "cover" }}
                  image={tempString}
                />
              ) : (
                <CardMedia
                  component="img"
                  sx={{ objectFit: "cover" }}
                  image={getImages}
                />
              )}
              <CardContent sx={{ display: "flex" }} m={0}>
                {data.map((item) => {
                  return (
                    <>
                      <Box key={item.id} onClick={() => setImages(item.img)}>
                        <CardMedia
                          component="img"
                          sx={{ objectFit: "cover" }}
                          image={item.img}
                        />
                      </Box>
                    </>
                  );
                })}
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "26px" },
                my: { xs: 1, sm: 2, md: 3 },
              }}
              color="success"
            >
              Mohan
            </Typography>
            <Typography
              variant="h1"
              sx={{
                my: { xs: 1, sm: 2, md: 3 },
                fontSize: { xs: "16px", sm: "18px", md: "22px" },
              }}
              color="Secondary"
            >
              Recycle Boucle Knit Cardigan Pink
            </Typography>
            <Typography
              variant="body1"
              sx={{ my: { xs: 1, sm: 2, md: 3 } }}
              color="info"
            >
              $120
            </Typography>
            <Box
              sx={{
                my: { xs: 1, sm: 2, md: 3 },
                display: "flex",
                cursor: "pointer",
              }}
            >
              Color
              <Box
                component={"div"}
                mx={1}
                sx={{ width: "20px", borderRadius: "50%", background: "black" }}
              >
                h
              </Box>
              <Box
                component={"div"}
                sx={{
                  width: "20px",
                  borderRadius: "50%",
                  color: "#DD8560",
                  background: "#DD8560",
                }}
              >
                h
              </Box>
              <Box
                component={"div"}
                mx={1}
                sx={{
                  width: "20px",
                  borderRadius: "50%",
                  color: "#E1E0DB",
                  background: "#E1E0DB",
                }}
              >
                h
              </Box>
            </Box>
            <Box sx={{ display: "flex", my: { xs: 1, sm: 2, md: 3 } }}>
              Size
              <Box
                mx={1}
                component={"div"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  color: !true ? "#000000" : "white",
                  background: !true ? "white" : "#000000",
                }}
              >
                S
              </Box>
              <Box
                component={"div"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  color: !true ? "#000000" : "white",
                  background: !true ? "white" : "#000000",
                }}
              >
                M
              </Box>
              <Box
                mx={1}
                component={"div"}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  color: true ? "#000000" : "white",
                  background: true ? "white" : "#000000",
                }}
              >
                L
              </Box>
            </Box>
            <CustomButton
              onClick={() => console.log("overAll")}
              variant="contained"
              color="success"
              startIcon={<Plus stroke="white" fill="white" />}
              label="ADD TO BASKET"
              sx={{ width: "100%" }}
              endIcon={
                <Favorite
                  sx={{ display: "flex", justifyContent: "space-between" }}
                  onClick={() => console.log("first is the ")}
                />
              }
            />
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "26px" },
                my: { xs: 2, md: 3 },
              }}
              color="success"
            >
              MATERIALS
            </Typography>
            <Typography
              variant="h1"
              sx={{
                my: { xs: 2, md: 3 },
                fontSize: { xs: "16px", sm: "18px", md: "20px" },
              }}
              color="Secondary"
            >
              We work with monitoring programmes to ensure compliance with
              safety, health and quality standards for our products.
            </Typography>
          </Grid>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "26px" },
              my: { xs: 1, md: 3 },
            }}
            color="success"
          >
            CARE
          </Typography>
          <Typography
            variant="h1"
            sx={{
              my: { xs: 1, sm: 2, md: 3 },
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
            }}
            color="Secondary"
          >
            To keep your jackets and coats clean, you only need to freshen them
            up and go over them with a cloth or a clothes brush. If you need to
            dry clean a garment, look for a dry cleaner that uses technologies
            that are respectful of the environment.
          </Typography>

          <Box component={"ul"} sx={{ listStyle: "none" }}>
            <Box component={"li"}>
              <Box display={" flex"}>
                <IconButton>
                  <Bleach />
                </IconButton>

                <Typography
                  variant="h1"
                  sx={{
                    my: { xs: 1, sm: 2, md: 3 },
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                  color="Secondary"
                >
                  Do not use bleach
                </Typography>
              </Box>
            </Box>

            <Box component={"li"}>
              <Box display={" flex"}>
                <IconButton>
                  <TumbleDry />
                </IconButton>
                <Typography
                  variant="h1"
                  sx={{
                    my: { xs: 1, sm: 2, md: 3 },
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                  color="Secondary"
                >
                  Do not tumble dry
                </Typography>
              </Box>
            </Box>

            <Box component={"li"}>
              <Box display={" flex"}>
                <IconButton>
                  <Clean />
                </IconButton>
                <Typography
                  variant="h1"
                  sx={{
                    my: { xs: 1, sm: 2, md: 3 },
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                  color="Secondary"
                >
                  Dry clean with tetrachloroethlene
                </Typography>
              </Box>
            </Box>

            <Box component={"li"}>
              <Box display={" flex"}>
                <IconButton>
                  <Iron />
                </IconButton>
                <Typography
                  variant="h1"
                  sx={{
                    my: { xs: 1, sm: 2, md: 3 },
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  }}
                  color="Secondary"
                >
                  Iron at a maximum of 110C/230F
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box display={"flex"} alignItems={"center"}>
              <IconButton>
                <FastDelivery />
              </IconButton>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "22px" },
                  my: { xs: 1, sm: 2, md: 3 },
                }}
                color="success"
              >
                Free Flat Rate Shipping
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box display={"flex"} alignItems={"center"}>
              <IconButton>
                <CODPolicy />
              </IconButton>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "22px" },
                  my: { xs: 1, sm: 2, md: 3 },
                }}
                color="success"
              >
                COD Policy
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Box display={"flex"} alignItems={"center"}>
              <IconButton>
                <Refresh />
              </IconButton>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "22px" },
                  my: { xs: 1, sm: 2, md: 3 },
                }}
                color="success"
              >
                Return Policy
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "26px" },
          my: { xs: 1, sm: 2, md: 3 },
        }}
        color="success"
        textAlign={"center"}
      >
        YOU MAY ALSO LIKE
      </Typography>
      <Grid my={2} px={1} container spacing={1}>
        {result.slice(0, 6).map((item) => {
          return (
            <Grid key={item.id} item xs={6} sm={4} md={3} >
              <Gridviewcategory item={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default ProductDetail;
