import React from "react";
import { motion } from "framer-motion";
import { desctiption, teams } from "../document/array";
import TeamBg from "../components/TeamBg";
import TeamComponenets from "../components/TeamComponenets";
import CollaborationBar from "../components/CollaborationBar";

const infoTeam = "Il nostro Team";

function Team() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <TeamBg infoTeam={infoTeam} />
      <TeamComponenets desctiption={desctiption} team={teams} />
      <CollaborationBar />
    </motion.div>
  );
}

export default Team;
