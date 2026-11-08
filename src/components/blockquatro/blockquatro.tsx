import {
    text_1,
    text_2,
    text_3
} from "../../data/section_4/text";
import AppBorder from "../app-bord/app-bord";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import styles from "./blockquatro.module.css";

function BlockQuatro() {
  const images = [
    "https://yepp.fun/images/img0701_.jpg",
    "https://yepp.fun/images/img0702_.jpg",
    "https://yepp.fun/images/img0703_.jpg",
  ];

  const imagesmodal = [
    "https://yepp.fun/images/img4_1.jpg",
    "https://yepp.fun/images/img4_2.jpg",
    "https://yepp.fun/images/img4_3.jpg",
    "https://yepp.fun/images/img4_4.jpg",
    "https://yepp.fun/images/img4_5.jpg",
  ];

  const images_1 = ["https://yepp.fun/images/img4_1.jpg"];
  const images_2 = ["https://yepp.fun/images/img4_2.jpg"];
  const images_3 = ["https://yepp.fun/images/img4_3.jpg"];
  const images_4 = ["https://yepp.fun/images/img4_4.jpg"];
  const images_5 = ["https://yepp.fun/images/img4_5.jpg"];

  return (
    <div className={styles.main}>
      <AppBorder name="OutJump:" tit=" infinite void edition"></AppBorder>
      <div className={styles.titlebox}>
        <div className={styles.title}>Genre:Arcade Racer/Speedrunning</div>
        <div className={styles.title}>Engine: Godot</div>
      </div>

      <div className={styles.blocktwoimage}>
        <div className={styles.textblock}>
          <p>{text_1}</p>
          <p>{text_2}</p>
          <p>{text_3}</p>
        </div>
        <div className={styles.imgblock}>
          <ImageGallery
            images={images_1}
            imagesmodal={imagesmodal}
          ></ImageGallery>
          <ImageGallery
            images={images_2}
            imagesmodal={imagesmodal}
          ></ImageGallery>
          <ImageGallery
            images={images_3}
            imagesmodal={imagesmodal}
          ></ImageGallery>
          <ImageGallery
            images={images_4}
            imagesmodal={imagesmodal}
          ></ImageGallery>
          <ImageGallery
            images={images_5}
            imagesmodal={imagesmodal}
          ></ImageGallery>
        
        </div>
      </div>

      <div
        className={styles.videoblock}
        style={{ justifySelf: "center", margin: "auto" }}
      >
        <VideoCardHoverNoButton
          videoId="NFB8cbEIWk0"
          title="Автоплей миниатюры"
          autoplayOnLoad={true} // воспроизводится сразу
          autoplayOnHover={true} // воспроизводится при наведении
        />
      </div>
    </div>
  );
}

export default BlockQuatro;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
