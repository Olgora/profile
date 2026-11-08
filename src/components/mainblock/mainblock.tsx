import { listmenuc } from "../../data/menut";
import { text_final, text_name } from "../../data/section_9/text";
import AnimatedShapePerlin from "../animation/olho/olhoperl";
import OrganicText from "../animation/organictext/organictext";
import AppBorderSmall from "../app-bordsmall/app-bordsmall";
import CardBlockmenu from "../cardblockmenu/cardblockmenu";
import CardBlocksmall from "../cardblocksmall/cardblocksmall";
import styles from "./mainblock.module.css";

function MainBlock() {
  return (
    <div className={styles.main}>
      <div className={styles.blocktwoimage}>
        <div className={styles.textblock}  >
          <div className={styles.title}>
            <OrganicText text={text_name} size="3rem"></OrganicText>
          </div>
          <p style={{ marginTop: "40px" }}>{text_final}</p>
        </div>
        <div className={styles.imgblock}>
          <div className={styles.eye} style={{}}>
            <AnimatedShapePerlin></AnimatedShapePerlin>
          </div>
          <img
            src={"https://yepp.fun/images/ingbase.jpg"}
            alt={`ImageAlex`}
            className={styles.image}
          />
        </div>
      </div>
      <AppBorderSmall></AppBorderSmall>
      <div className={styles.listcard}>
        {listmenuc.map((item, index) => (
          <div key={index}>
            <CardBlockmenu
              name={item.name}
              link={item.link}
              video={item.video}
              image={item.image}
              text={item.text}
              auto={item.auto}
              title={item.title}
            ></CardBlockmenu>
          </div>
        ))}
        <CardBlocksmall
          name="Smaller Projects"
          link="/smallprojects"
        ></CardBlocksmall>
      </div>
    </div>
  );
}

export default MainBlock;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
/*<CardBlockmenu name=""></CardBlockmenu>*/
