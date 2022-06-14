import React, { useRef } from "react";
import { motion } from "framer-motion";
import Topbar from "../components/Topbar";
import Footer from "../components/Footer";
import BusinessCard from "../components/BusinessCard";
import TopbarInfo from "../components/TopbarInfo";
import CompanyMission from "../components/CompanyMission";
import AboutUss from "../components/AboutUss";
import HowWork from "../components/HowWork";
import Team from "../components/Team";
import grow from "../assets/grow.jpg";
import team from "../assets/team.jpg";
import partner from "../assets/partner.jpg";
import business from "../assets/business.jpg";
import crypto from "../assets/crypto.jpg";
import nft from "../assets/nft.webp";
import primaryResorce from "../assets/primary-resorce.jpg";
import ContactUss from "../components/AboutUss";
import CollaborationBar from "../components/CollaborationBar";
import ClientOpinion from "../components/ClientOpinion";

const businessCard = [
  {
    id: 0,
    img: grow,
    intro: "Siamo qui per",
    title: "Aiutarti con il tuo Business",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem iste, facere nostrum fugit odit ullam ea praesentium laborum consequuntur itaque neque officia error pariatur, nisi maiores ipsum enim corrupti.",
  },
  {
    id: 1,
    img: business,
    intro: "Fatti consigliare",
    title: "Nuovi Business",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem iste, facere nostrum fugit odit ullam ea praesentium laborum consequuntur.",
  },
  {
    id: 2,
    img: team,
    intro: "Inizia ora",
    title: "Entra a far parte del Team",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem iste, facere nostrum fugit odit ullam ea praesentium laborum consequuntur.",
  },
  {
    id: 3,
    img: partner,
    intro: "Lavora con noi",
    title: "Diventa nostro Partner",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem iste, facere nostrum fugit odit ullam ea praesentium laborum consequuntur.",
  },
];

const textLoremS =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eaque earum, minus delectus tenetur aperiam maiores quisquam aliquid aliquam optio a, quo voluptas inventore";

const information = [
  { id: 4, title: "Crypto Valute", img: crypto, text: textLoremS },
  { id: 5, title: "NFT", img: nft, text: textLoremS },
  { id: 6, title: "Risorse primarie", img: primaryResorce, text: textLoremS },
];
const loremSite = "www.loremIpsum.com";
const opinion = [
  { id: 0, text: textLoremS, name: "Amelia Richards", feedBack: 4.5 },
  { id: 1, text: textLoremS, name: "Richard Thomson", feedBack: 5 },
  { id: 2, text: textLoremS, name: "Giulia Holl", feedBack: 3.5 },
  { id: 3, text: textLoremS, name: "Stephan Robertson", feedBack: 5 },
  { id: 4, text: textLoremS, name: "Patrick Nelson", feedBack: 4 },
  { id: 5, text: textLoremS, name: "William Dolfin", feedBack: 4.5 },
];

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
      <ClientOpinion loremSite={loremSite} opinion={opinion} />
    </motion.div>
  );
}

export default Home;
