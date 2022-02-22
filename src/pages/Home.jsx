import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import NavMenu from "../components/Menu";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import PageHeader from "../components/PageHeader";
import ProductList from "./ProductList";

const Home = () => {
  return (
    <BrowserRouter>
      <div dir="rtl">
        <PageHeader />
        <Routes>
          <Route path="/poductlist" element={<ProductList />} /> 
          <Route path="*" element={<Page />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

const Page = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  let navigate = useNavigate();

  return (
    <div>

      <Slider />
      <Categories />
      <Products />
      <Newsletter />
    </div>
  );
};
export default Home;
