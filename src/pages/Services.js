import React, { createRef } from "react";

import CollaborationBar from "../components/CollaborationBar";
import { information, textLoremS, textLoremXXL } from "../document/array";
import BusinessCard from "../components/BusinessCard";
import Form from "../components/Form";
import ServicesInfo from "../components/ServicesInfo";
import { useMemo } from "react";
import { motion } from "framer-motion";

function Services({ returnUpPage }) {
  const card = useMemo(() => information.map((i) => createRef([])), []);
  const handleScrollTo = (index) => (e) => {
    if (card[index + 1]) {
      card[index + 1].current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.3 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <BusinessCard array={information} card={card} textLorem={textLoremS} />
      <ServicesInfo
        ref={returnUpPage}
        array={information}
        textLorem={textLoremXXL}
        handleScrollTo={handleScrollTo}
        card={card}
      />
      <CollaborationBar />
      <Form />
    </motion.div>
  );
}

export default Services;