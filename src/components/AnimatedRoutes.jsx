import React, { useCallback, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Services from "../pages/Services";
import NotFound from "./NotFound";
import Team from "../pages/Team";
import TopbarInfo from "./TopbarInfo";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Home from "../pages/Home";
import SubscribeButton from "./SubscribeButton";


function AnimatedRoutes() {
  const [openSubscribe, SetOpenSubscribe] = useState(false);
  const location = useLocation();
  const returnUpPage = useRef(null);

  const openSubscribeBur = useCallback(() => {
    SetOpenSubscribe(true);
  }, []);

  const closeSubscribeBur = useCallback(() => {
    SetOpenSubscribe(false);
  }, []);

  const handleScroll = useCallback(() => {
    returnUpPage.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      {openSubscribe
        ? (document.body.style.overflow = "hidden") &&
          document.body.style.textOverflow === ""
        : (document.body.style.overflow = "auto") &&
          document.body.style.textOverflow === ""}
      {openSubscribe ? (
        <div className="bg" onClick={closeSubscribeBur} />
      ) : null}
      <TopbarInfo returnUpPage={returnUpPage} />
      {openSubscribe ? (
        <SubscribeButton closeSubscribeBur={closeSubscribeBur} />
      ) : null}
      <Topbar openSubscribeBur={openSubscribeBur} />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="*" element={<NotFound />}></Route>
          <Route
            path="/"
            element={<Home handleScroll={handleScroll} />}
          ></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route
            path="/services"
            element={<Services returnUpPage={returnUpPage} />}
          ></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer handleScroll={handleScroll} />
    </>
  );
}

export default AnimatedRoutes;
