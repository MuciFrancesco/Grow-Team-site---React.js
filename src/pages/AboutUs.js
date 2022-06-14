import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import TeamBg from "../components/TeamBg";
import ClientOpinion from "../components/ClientOpinion";
import AboutPhilosophy from "../components/AboutPhilosophy";
import AboutUss from "../components/AboutUss";
import CompanyMission from "../components/CompanyMission";
const infoTeam = "Scopri chi siamo";
const textLorem =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem dolorum, doloremque quibusdam odit architecto eaque obcaecati harum beatae, labore repellendus cupiditate sunt deserunt dolore quisquam fuga. Quae, quas odit. Dolor.";
const loremSite = "www.loremIpsum.com";
const opinion = [
  { id: 0, text: textLorem, name: "Amelia Richards", feedBack: 4.5 },
  { id: 1, text: textLorem, name: "Richard Thomson", feedBack: 5 },
  { id: 2, text: textLorem, name: "Giulia Holl", feedBack: 3.5 },
  { id: 3, text: textLorem, name: "Stephan Robertson", feedBack: 5 },
  { id: 4, text: textLorem, name: "Patrick Nelson", feedBack: 4 },
  { id: 5, text: textLorem, name: "William Dolfin", feedBack: 4.5 },
];

function AboutUs() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.3 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <TeamBg infoTeam={infoTeam} />
      <AboutPhilosophy />
      <AboutUss />
      <CompanyMission />
      <ClientOpinion loremSite={loremSite} opinion={opinion} />
    </motion.div>
  );
}

export default AboutUs;
