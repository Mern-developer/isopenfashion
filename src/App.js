import Index from "./screens/Index";
import { Route, Routes } from "react-router-dom";
import Blog from "./screens/Blog/Blog";
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import BlogPost from "./screens/Blog/BlogPost";
import Category from "./screens/Category/Category";
import ProductDetail from "./screens/ProductDetail";
import Aboutus from "./screens/Aboutus";
import Contactus from "./screens/Contactus";
import Error from "./screens/Error";
import { Box } from "@mui/material";
import NewArrival from "./components/newArrival/NewArrival";
import Checkout from "./screens/Checkout";

function App(){
  return (
    <ThemeProvider theme={theme}>
   <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
   <Header>
   <Header />
   </Header>
   <Box flexGrow={16}>
   <Routes>
   <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-post/:blogid" element={<BlogPost />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product-detail" element={<ProductDetail />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/error" element={<Error />} />
      </Routes>
      </Box>
      <Footer>
      <Footer /> 
      </Footer>
      </Box> 
    </ThemeProvider>
  );
}

export default App;
