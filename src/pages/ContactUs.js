import React from "react";
import CollaborationBar from "../components/CollaborationBar";
import Form from "../components/Form";
import TeamBg from "../components/TeamBg";
import { motion } from "framer-motion";
const infoTeam = "Contattaci";

function ContactUs() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.3 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <TeamBg infoTeam={infoTeam} />
      <Form />
      <CollaborationBar />
    </motion.div>
  );
}

export default ContactUs;
