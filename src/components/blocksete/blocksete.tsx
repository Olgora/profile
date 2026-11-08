import {
    text_1,
    text_2,
    text_3,
    text_4,
    text_5,
} from "../../data/section_7/text";
import { useResize } from "../../utils/hook";
import AppBorder from "../app-bord/app-bord";
import AppBordermob from "../app-bordmob/app-bordmob";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import styles from "./blocksete.module.css";

function BlockSete() {
  const ww = useResize();
  const wl = ww.isScreenXl;
  const imagesmodal = [
    "https://yepp.fun/images/img8_1.jpg",
    "https://yepp.fun/images/img8_2_1.jpg",
    "https://yepp.fun/images/img8_2_2.jpg",
    "https://yepp.fun/images/img8_2_3.jpg",
  ];

  const images_1 = ["https://yepp.fun/images/img8_1.jpg"];

  const images_2_1 = ["https://yepp.fun/images/img8_2_1.jpg"];
  const images_2_2 = ["https://yepp.fun/images/img8_2_2.jpg"];
  const images_2_3 = ["https://yepp.fun/images/img8_2_3.jpg"];

  return (
    <div>
      {wl && (
        <div className={styles.main}>
          <AppBorder name="King of Snow Tower"></AppBorder>
          <div className={styles.titlebox}>
            <div className={styles.title}>Genre:Top Down Arcade Game</div>
            <div className={styles.title}>Engine: Godot</div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ width: "50%" }}>
              <p>{text_1}</p>
            </div>
            <div className={styles.imgblock} style={{ width: "40%" }}>
              <ImageGallery
                images={images_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.videoblock} style={{ width: "60%" }}>
              <VideoCardHoverNoButton
                videoId={"GD2AhfGGk-4"}
                autoplayOnHover={false}
                autoplayOnLoad={true}
              ></VideoCardHoverNoButton>
            </div>
            <div className={styles.textblock} style={{ width: "30%" }}>
              <p>{text_2}</p>
            </div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.imgblock} style={{ width: "100%" }}>
              <ImageGallery
                images={images_2_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
            <div className={styles.textblock} style={{ width: "100%" }}>
              <p>{text_3}</p>
            </div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ width: "100%" }}>
              <p>{text_4}</p>
            </div>
            <div className={styles.imgblock} style={{ width: "100%" }}>
              <ImageGallery
                images={images_2_2}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.imgblock} style={{ width: "100%" }}>
              <ImageGallery
                images={images_2_3}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
            <div className={styles.textblock} style={{ width: "100%" }}>
              <p>{text_5}</p>
            </div>
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.mainv}>
          <AppBordermob name="King of Snow Tower"></AppBordermob>
          <div className={styles.titlebox}>
            <div className={styles.title}>Genre:Top Down Arcade Game</div>
            <div className={styles.title}>Engine: Godot</div>
          </div>
          b
          <div className={styles.textblockv}>
            <p>{text_1}</p>
          </div>
          <div className={styles.imgblockv}>
            <ImageGallery
              images={images_1}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>
          b
          <div className={styles.videoblock}>
            <VideoCardHoverNoButton
              videoId={"GD2AhfGGk-4"}
              autoplayOnHover={false}
              autoplayOnLoad={true}
            ></VideoCardHoverNoButton>
          </div>
          <div className={styles.textblockv}>
            <p>{text_2}</p>
          </div>
          <div className={styles.imgblockv}>
            <ImageGallery
              images={images_2_1}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>
          <div className={styles.textblockv}>
            <p>{text_3}</p>
          </div>
          <div className={styles.textblockv}>
            <p>{text_4}</p>
          </div>
          <div className={styles.imgblockv}>
            <ImageGallery
              images={images_2_2}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>
          <div className={styles.imgblockv}>
            <ImageGallery
              images={images_2_3}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>
          <div className={styles.textblockv}>
            <p>{text_5}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockSete;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
