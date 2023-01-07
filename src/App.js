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

function App(){
  return (
    <ThemeProvider theme={theme}>
    <Header />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-post/:blogid" element={<BlogPost />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product-detail" element={<ProductDetail />} />
    </Routes>
    <Footer /> 
    </ThemeProvider>
  );
}

export default App;
