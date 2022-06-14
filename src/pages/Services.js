import React, { createRef } from "react";

import CollaborationBar from "../components/CollaborationBar";
import Footer from "../components/Footer";
import crypto from "../assets/crypto.jpg";
import nft from "../assets/nft.webp";
import primaryResorce from "../assets/primary-resorce.jpg";
import BusinessCard from "../components/BusinessCard";
import Form from "../components/Form";
import ServicesInfo from "../components/ServicesInfo";
import { useMemo } from "react";
import { motion } from "framer-motion";

const textLoremS =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque earum, minus delectus tenetur aperiam maiores quisquam aliquid aliquam optio a, quo voluptas inventore";

const textLoremXL =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quod quia voluptates hic, ut culpa eius quibusdam porro officiis quis consequuntur perspiciatis aperiam nobis eos dolores aliquid sit tenetur cumque quidem rerum, eveniet, illum earum excepturi. Sit itaque error nemo deserunt. Iusto quibusdam earum sit, odit aut quasi. Facere voluptatibus corporis repudiandae exercitationem nesciunt dignissimos, ad ea magnam nobis veritatis tempora vero repellendus nostrum ipsa et amet illum quibusdam minima! Earum facere provident voluptatibus, nesciunt sequi sint reprehenderit laborum officiis nostrum! Temporibus illum dolore perspiciatis repudiandae expedita ratione autem minima, omnis reprehenderit, totam saepe fugit tenetur eaque deleniti, dicta voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque earum, minus delectus tenetur aperiam maiores quisquam aliquid aliquam optio a, quo voluptas inventore";

const information = [
  { id: 4, title: "Crypto Valute", img: crypto, text: textLoremS },
  { id: 5, title: "NFT", img: nft, text: textLoremS },
  { id: 6, title: "Risorse primarie", img: primaryResorce, text: textLoremS },
];

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
        textLorem={textLoremXL}
        handleScrollTo={handleScrollTo}
        card={card}
      />
      <CollaborationBar />
      <Form />
    </motion.div>
  );
}

export default Services;
