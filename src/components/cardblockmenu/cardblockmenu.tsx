import styles from "./cardblockmenu.module.css";
import { NavLink } from "react-router-dom";
import OrganicText from "../animation/organictext/organictext";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import { motion } from "framer-motion";

type TypeCard = {
  name: string;
  link: string;
  video?: string;
  text: string;
  image: string;
  auto: boolean;
  title?: string;
};

function CardBlockmenu({
  name,
  video,
  text,
  image,
  link,
  auto,
  title,
}: TypeCard) {
  return (
    <motion.div
      className={styles.cardblock}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className={styles.name}>
        {name}
        {title && (
          <div
            className={styles.name}
            style={{
              fontSize: "1.2rem",
              marginLeft: 0,
              marginBottom: 0,
              marginTop: "10px",
            }}
          >
            {title}
          </div>
        )}
      </div>

      {video && (
        <div className={styles.videoblock}>
          <VideoCardHoverNoButton
            videoId={video}
            autoplayOnLoad={auto}
            autoplayOnHover={!auto}
          ></VideoCardHoverNoButton>
        </div>
      )}
      {image && (
        <div style={{ width: "100%", margin: 0, padding: 0 }}>
          <img src={image} alt={`ImageAlex`} className={styles.image} />
        </div>
      )}

      <div className={styles.text}>
        <p className={styles.text}>{text}</p>
      </div>
      <NavLink className={styles.link} to={link}>
        <OrganicText text="Read more >" size="2rem"></OrganicText>
      </NavLink>
    </motion.div>
  );
}

export default CardBlockmenu;

/**/
