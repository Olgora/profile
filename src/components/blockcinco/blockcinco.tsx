import styles from "./blockcinco.module.css";
import AppBorder from "../app-bord/app-bord";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import { useResize } from "../../utils/hook";
import {
  text_4,
  text_3,
  text_2,
  text_1,
  text_5,
} from "../../data/section_4/text";
import { VideoCard } from "../videoblock/videocard/videocard";
import { ImageGalleryVert } from "../imageblock/imagegaleryvert/imagegaleryvert";
import AppBordermob from "../app-bordmob/app-bordmob";

function BlockCinco() {
  const ww = useResize();
  const wl = ww.isScreenXl;

  const imagesmodal = [
    "https://yepp.fun/images/img4_1.jpg", 
    "https://yepp.fun/images/img4_2.jpg",
    "https://yepp.fun/images/img4_3.jpg",
    "https://yepp.fun/images/img4_4.jpg",
    "https://yepp.fun/images/img4_5_1.jpg",
    "https://yepp.fun/images/img4_5_2.jpg",
  ];

  const images_1 = ["https://yepp.fun/images/img4_1.jpg"];
  const images_2 = ["https://yepp.fun/images/img4_2.jpg"];
  const images_3 = ["https://yepp.fun/images/img4_3.jpg"];
  const images_4 = ["https://yepp.fun/images/img4_4.jpg"];
  const images_5 = [
    "https://yepp.fun/images/img4_5_1.jpg",
    "https://yepp.fun/images/img4_5_2.jpg",
  ];

  return (
    <div>
      {wl && (
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
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.imgblock} style={{ width: "95%" }}>
              <ImageGallery
                images={images_5}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>

            <div className={styles.textblock} style={{ paddingLeft: "40px" }}>
              <p>{text_4}</p>
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ paddingRight: "20px" }}>
              <p>{text_5}</p>
            </div>
            <div className={styles.videoblock} style={{ width: "60%" }}>
              <VideoCard videoId={"AS3C6YZD0Ec"}></VideoCard>
            </div>
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.mainv}>
          <AppBordermob name="OutJump:" tit=" infinite void edition"></AppBordermob>
          <div className={styles.titlebox}>
            <div className={styles.title}>Genre:Arcade Racer/Speedrunning</div>
            <div className={styles.title}>Engine: Godot</div>
          </div>

          <div className={styles.textblockv}>
            <p>{text_1}</p>
            <p>{text_2}</p>
            <p>{text_3}</p>
          </div>
          <div className={styles.imgblockv}>
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
          </div>

          <div className={styles.imgblockv}>
            <ImageGalleryVert
              images={images_5}
              imagesmodal={imagesmodal}
            ></ImageGalleryVert>

            <div className={styles.textblockv} style={{ paddingLeft: "40px" }}>
              <p>{text_4}</p>
            </div>
          </div>

          <div className={styles.textblockv} style={{ paddingRight: "20px" }}>
            <p>{text_5}</p>
          </div>
          <div className={styles.videoblock}>
            <VideoCard videoId={"AS3C6YZD0Ec"}></VideoCard>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockCinco;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
