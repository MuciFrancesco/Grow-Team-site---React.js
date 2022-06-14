import React, { useRef } from "react";
import { motion } from "framer-motion";
import kristina from "../assets/team-kristina.jpg";
import bob from "../assets/team-bob.jpg";
import ali from "../assets/team-ali.jpg";
import robert from "../assets/team-robert.jpg";
import TeamBg from "../components/TeamBg";
import TeamComponenets from "../components/TeamComponenets";
import CollaborationBar from "../components/CollaborationBar";
const desctiption =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, aperiam. Labore, quibusdam esse iste porro a officia eveniet exercitationem hic deleniti corporis ipsa error culpa totam dolor Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, labore ipsa impedit eum dolor voluptatem laudantium, rerum facere quisquam eius recusandae! Assumenda, culpa alias vitae placeat, ipsum magnam magni iusto quam dolorem quod, consequatur illo nam? Ut perspiciatis, consequuntur repellendus eligendi enim tempore nisi explicabo. Eius asperiores praesentium facilis, recusandae velit voluptatem nobis aliquam illum debitis, voluptate sit, iure quis. Natus accusantium doloremque ab repudiandae quisquam.";

const team = [
  { id: 0, img: kristina, name: "Kristina", role: "Team Leader" },
  { id: 1, img: bob, name: "Bob Anderson", role: "Web Designer" },
  { id: 2, img: ali, name: "Ali Thoms", role: "Marketing Executor" },
  { id: 3, img: robert, name: "Robert Wilmson", role: "Creative" },
];
const infoTeam = "Il nostro Team";

function Team() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%", transition: { duration: 0.3 } }}
      exit={{ x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <TeamBg infoTeam={infoTeam} />
      <TeamComponenets desctiption={desctiption} team={team} />
      <CollaborationBar />
    </motion.div>
  );
}

export default Team;
