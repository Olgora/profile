import styles from "./cardblocksmall.module.css";
import { NavLink } from "react-router-dom";
import OrganicText from "../animation/organictext/organictext";
import { motion } from "framer-motion";

type TypeCard = {
  name: string;
  link: string;
};

function CardBlocksmall({ name, link }: TypeCard) {
  return (
    <motion.div
      className={styles.cardblock}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <NavLink className={styles.link} to={link}>
         
        <OrganicText text={name} size="2rem"></OrganicText>
        <OrganicText text="+" size="3rem"></OrganicText>
      </NavLink>
    </motion.div>
  );
}

export default CardBlocksmall;

/**/
