import React, { useRef } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import App from "../App";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import NotFound from "./NotFound";
import Team from "../pages/Team";
import TopbarInfo from "./TopbarInfo";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Home from "../pages/Home";

function AnimatedRoutes() {
  const location = useLocation();
  const returnUpPage = useRef(null);
  const handleScroll = () => {
    returnUpPage.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <TopbarInfo returnUpPage={returnUpPage} />
      <Topbar />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path='*' element={<NotFound />}></Route>
          <Route
            path='/'
            element={<Home handleScroll={handleScroll} />}
          ></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/contact-us' element={<ContactUs />}></Route>
          <Route
            path='/services'
            element={<Services returnUpPage={returnUpPage} />}
          ></Route>
          <Route path='/about-us' element={<AboutUs />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer handleScroll={handleScroll} />
    </>
  );
}

export default AnimatedRoutes;
