import React from "react";
import { motion } from "framer-motion";
import {
  businessCard,
  information,
  opinion,
  loremSite,
} from "../document/array";
import BusinessCard from "../components/BusinessCard";
import CompanyMission from "../components/CompanyMission";
import AboutUss from "../components/AboutUss";
import HowWork from "../components/HowWork";
import CollaborationBar from "../components/CollaborationBar";
import ClientOpinion from "../components/ClientOpinion";
import SubscribeBar from "../components/SubscribeBar";
import PromoVideo from "../components/PromoVideo";
import WhyCooseUs from "../components/WhyCooseUs";

function Home({ handleScroll }) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.3 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <BusinessCard array={businessCard} />
      <CompanyMission />
      <AboutUss />
      <HowWork information={information} handleScroll={handleScroll} />
      <CollaborationBar />
      <SubscribeBar />
      <PromoVideo />
      <WhyCooseUs />
      <ClientOpinion loremSite={loremSite} opinion={opinion} />
    </motion.div>
  );
}

export default Home;
