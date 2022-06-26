import React, { createRef, useCallback } from "react";

import CollaborationBar from "../components/CollaborationBar";
import { information, textLoremS, textLoremXXL } from "../document/array";
import BusinessCard from "../components/BusinessCard";
import Form from "../components/Form";
import ServicesInfo from "../components/ServicesInfo";
import { useMemo } from "react";
import { motion } from "framer-motion";

function Services({ returnUpPage }) {
  const card = useMemo(() => information.map((i) => createRef([])), []);
  const handleScrollTo =useCallback( (index) => (e) => {
    if (card[index + 1]) {
      card[index + 1].current.scrollIntoView({ behavior: "smooth" });
    }
  },[card]);
  return (
    <motion.div
    initial={{ opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
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
