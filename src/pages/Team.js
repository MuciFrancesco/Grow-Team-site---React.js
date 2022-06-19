import React, { useRef } from "react";
import { motion } from "framer-motion";
import { desctiption, teams } from "../document/array";
import TeamBg from "../components/TeamBg";
import TeamComponenets from "../components/TeamComponenets";
import CollaborationBar from "../components/CollaborationBar";

const infoTeam = "Il nostro Team";

function Team() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.3 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <TeamBg infoTeam={infoTeam} />
      <TeamComponenets desctiption={desctiption} team={teams} />
      <CollaborationBar />
    </motion.div>
  );
}

export default Team;
