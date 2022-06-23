import React from "react";
import CollaborationBar from "../components/CollaborationBar";
import Form from "../components/Form";
import TeamBg from "../components/TeamBg";
import { motion } from "framer-motion";
const infoTeam = "Contattaci";

function ContactUs() {
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <TeamBg infoTeam={infoTeam} />
      <Form />
      <CollaborationBar />
    </motion.div>
  );
}

export default ContactUs;
