import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";
import NavMenu from "../components/Menu";

import PageHeader from "../components/PageHeader";

const Home = () => {
  return (
    <div dir="rtl">
      <PageHeader/>

      <Slider/>
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;
