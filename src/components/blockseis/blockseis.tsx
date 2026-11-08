import { useResize } from "../../utils/hook";
import AppBorder from "../app-bord/app-bord";
import AppBordermob from "../app-bordmob/app-bordmob";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import styles from "./blockseis.module.css";

import {
    text_1,
    text_2,
    text_3,
    text_4,
    text_5,
    text_6,
} from "../../data/section_6/text";
import { ImageGalleryVert } from "../imageblock/imagegaleryvert/imagegaleryvert";

function BlockSeis() {
  const ww = useResize();
  const wl = ww.isScreenXl;

  const imagesmodal = [
    "https://yepp.fun/images/img6_1_1.jpg",
    "https://yepp.fun/images/img6_1_2.jpg",
    "https://yepp.fun/images/img6_1_3.jpg",
    "https://yepp.fun/images/img6_2_1.jpg",
    "https://yepp.fun/images/img6_2_2.jpg",
  ];

  const images_1 = [
    "https://yepp.fun/images/img6_1_1.jpg",
    "https://yepp.fun/images/img6_1_2.jpg",
    "https://yepp.fun/images/img6_1_3.jpg",
  ];
  const images_1_1 = ["https://yepp.fun/images/img6_1_1.jpg"];
  const images_1_2 = ["https://yepp.fun/images/img6_1_2.jpg"];
  const images_1_3 = ["https://yepp.fun/images/img6_1_3.jpg"];
  const images_2 = [
    "https://yepp.fun/images/img6_2_1.jpg",
    "https://yepp.fun/images/img6_2_2.jpg",
  ];
  const images_2_1 = ["https://yepp.fun/images/img6_2_1.jpg"];
  const images_2_2 = ["https://yepp.fun/images/img6_2_2.jpg"];
  return (
    <div>
      {wl && (
        <div className={styles.main}>
          <AppBorder name="Visual effects"></AppBorder>

          <div className={styles.blockimagecol}>
            <div className={styles.textblock} style={{ width: "100%" }}>
              <p>{text_1}</p>
            </div>

            <div
              className={styles.videoblock}
              style={{
                width: "100%",
                flexDirection: "row",
                marginBottom: "40px",
              }}
            >
              <VideoCardHoverNoButton
                videoId={"DG82s00nFx4"}
              ></VideoCardHoverNoButton>
              <VideoCardHoverNoButton
                videoId={"9zIDO4hZZ04"}
              ></VideoCardHoverNoButton>
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.videoblock} style={{ width: "80%" }}>
              <VideoCardHoverNoButton
                videoId={"W7ErCJGSxFQ"}
              ></VideoCardHoverNoButton>
            </div>
            <div className={styles.textblock} style={{ paddingLeft: "20px" }}>
              <p>{text_2}</p>
            </div>
          </div>

          <div className={styles.blockimagecol}>
            <div className={styles.imgblock} style={{ width: "100%" }}>
              <ImageGallery
                images={images_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
            <div className={styles.textblock} style={{ width: "100%" }}>
              <p>{text_3}</p>
            </div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ paddingRight: "20px" }}>
              <p>{text_4}</p>
            </div>
            <div className={styles.videoblock} style={{ width: "60%" }}>
              <VideoCardHoverNoButton
                videoId={"5Kv-GB6KSvc"}
              ></VideoCardHoverNoButton>
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.imgblockr} style={{ width: "80%" }}>
              <ImageGallery
                images={images_2_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
              <ImageGallery
                images={images_2_2}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
            <div className={styles.textblock} style={{ width: "40%" }}>
              <p>{text_5}</p>
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ paddingRight: "20px" }}>
              <p>{text_6}</p>
            </div>
            <div className={styles.videoblock} style={{ width: "60%" }}>
              <VideoCardHoverNoButton
                videoId={"QSD3vFMMlDE"}
              ></VideoCardHoverNoButton>
            </div>
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.main}>
          <AppBordermob name="Visual effects"></AppBordermob>

          <div className={styles.textblockv}>
            <p>{text_1}</p>
          </div>

          <div
            className={styles.videoblock}
            style={{
              marginBottom: "40px",
            }}
          >
            <VideoCardHoverNoButton
              videoId={"DG82s00nFx4"}
            ></VideoCardHoverNoButton>
            <VideoCardHoverNoButton
              videoId={"9zIDO4hZZ04"}
            ></VideoCardHoverNoButton>
          </div>

          <div className={styles.videoblock}>
            <VideoCardHoverNoButton
              videoId={"W7ErCJGSxFQ"}
            ></VideoCardHoverNoButton>
          </div>
          <div className={styles.textblockv}>
            <p>{text_2}</p>
          </div>

          <div className={styles.imgblockv}>
            <ImageGalleryVert
              images={images_1}
              imagesmodal={imagesmodal}
            ></ImageGalleryVert>
          </div>
          <div className={styles.textblockv}>
            <p>{text_3}</p>
          </div>

          <div className={styles.textblockv}>
            <p>{text_4}</p>
          </div>
          <div className={styles.videoblock}>
            <VideoCardHoverNoButton
              videoId={"5Kv-GB6KSvc"}
            ></VideoCardHoverNoButton>
          </div>

          <div className={styles.imgblockv}>
            <ImageGalleryVert
              images={images_2_1}
              imagesmodal={imagesmodal}
            ></ImageGalleryVert>
            <ImageGalleryVert
              images={images_2_2}
              imagesmodal={imagesmodal}
            ></ImageGalleryVert>
          </div>
          <div className={styles.textblockv}>
            <p>{text_5}</p>
          </div>

          <div className={styles.textblockv}>
            <p>{text_6}</p>
          </div>
          <div className={styles.videoblock}>
            <VideoCardHoverNoButton
              videoId={"QSD3vFMMlDE"}
            ></VideoCardHoverNoButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockSeis;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
