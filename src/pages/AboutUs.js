import React from "react";
import { motion } from "framer-motion";
import { infoTeam, opinion, loremSite } from "../document/array";
import TeamBg from "../components/TeamBg";
import ClientOpinion from "../components/ClientOpinion";
import AboutPhilosophy from "../components/AboutPhilosophy";
import AboutUss from "../components/AboutUss";
import CompanyMission from "../components/CompanyMission";
import SubscribeBar from "../components/SubscribeBar";
import CollaborationBar from "../components/CollaborationBar";

function AboutUs() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <TeamBg infoTeam={infoTeam} />
      <AboutPhilosophy />
      <AboutUss />
      <CompanyMission />
      <SubscribeBar/>
      <ClientOpinion loremSite={loremSite} opinion={opinion} />
      <CollaborationBar/>
    </motion.div>
  );
}

export default AboutUs;
