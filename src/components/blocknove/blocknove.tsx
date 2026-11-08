import {
    text_1,
    text_2,
    text_3,
    text_4,
    text_5,
    video_1,
    video_2,
    video_3,
} from "../../data/section_10/text";
import { useResize } from "../../utils/hook";
import AppBorder from "../app-bord/app-bord";
import AppBordermob from "../app-bordmob/app-bordmob";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import { ImageGalleryVert } from "../imageblock/imagegaleryvert/imagegaleryvert";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import styles from "./blocknove.module.css";

function BlockNove() {
  const ww = useResize();
  const wl = ww.isScreenXl;
  const imagesmodal = [
    "https://yepp.fun/images/img10_1_1.jpg",
    "https://yepp.fun/images/img10_1_2.jpg",
    "https://yepp.fun/images/img10_1_3.jpg",
    "https://yepp.fun/images/img10_2_1.jpg",
    "https://yepp.fun/images/img10_2_2.jpg",
    "https://yepp.fun/images/img10_2_3.jpg",
    "https://yepp.fun/images/img10_3.jpg",
  ];

  const images_1 = [
    "https://yepp.fun/images/img10_1_1.jpg",
    "https://yepp.fun/images/img10_1_2.jpg",
    "https://yepp.fun/images/img10_1_3.jpg",
  ];

  const images_2 = [
    "https://yepp.fun/images/img10_2_1.jpg",
    "https://yepp.fun/images/img10_2_2.jpg",
    "https://yepp.fun/images/img10_3.jpg",
  ];
  const images_2_3 = ["https://yepp.fun/images/img10_2_3.jpg"];

  return (
    <div>
      {wl && (
        <div className={styles.main}>
          <AppBorder name="Corvus"></AppBorder>
          <div className={styles.titlebox}>
            <div className={styles.title}>Genre:Arcade/Score Attack</div>
            <div className={styles.title}>Engine: Godot</div>
            <div className={styles.title}>WIP</div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ width: "30%" }}>
              <p>{text_1}</p>
              <p>{text_2}</p>
              <p>{text_3}</p>
            </div>
            <div className={styles.vertical} style={{ width: "65%" }}>
              <div className={styles.imgblock} style={{ width: "100%" }}>
                <ImageGallery
                  images={images_1}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
              <div className={styles.vertical}>
                <div className={styles.videoblock}>
                  <VideoCardHoverNoButton
                    videoId={video_1}
                  ></VideoCardHoverNoButton>
                  <VideoCardHoverNoButton
                    videoId={video_2}
                  ></VideoCardHoverNoButton>
                </div>
                <div className={styles.imgblock} style={{ width: "100%" }}>
                  <ImageGallery
                    images={images_2_3}
                    imagesmodal={imagesmodal}
                  ></ImageGallery>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.imgblock} style={{ width: "100%" }}>
              <ImageGallery
                images={images_2}
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
              <VideoCardHoverNoButton
                videoId={video_3}
              ></VideoCardHoverNoButton>
            </div>
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.mainv}>
          <AppBordermob name="Corvus"></AppBordermob>
          <div className={styles.titlebox}>
            <div className={styles.title}>Genre:Arcade/Score Attack</div>
            <div className={styles.title}>Engine: Godot</div>
            <div className={styles.title}>WIP</div>
          </div>

          <div className={styles.textblockv}>
            <p>{text_1}</p>
            <p>{text_2}</p>
            <p>{text_3}</p>
          </div>
          <div className={styles.vertical}>
            <div className={styles.imgblockv}>
              <ImageGalleryVert
                images={images_1}
                imagesmodal={imagesmodal}
              ></ImageGalleryVert>
            </div>
            <div className={styles.vertical}>
              <div className={styles.videoblock}>
                <VideoCardHoverNoButton
                  videoId={video_1}
                ></VideoCardHoverNoButton>
                <VideoCardHoverNoButton
                  videoId={video_2}
                ></VideoCardHoverNoButton>
              </div>
              <div className={styles.imgblockv}>
                <ImageGallery
                  images={images_2_3}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
            </div>
          </div>

          <div className={styles.imgblockv}>
            <ImageGalleryVert
              images={images_2}
              imagesmodal={imagesmodal}
            ></ImageGalleryVert>
          </div>

          <div className={styles.textblockv}>
            <p>{text_4}</p>
          </div>

          <div className={styles.textblockv}>
            <p>{text_5}</p>
          </div>
          <div className={styles.videoblock}>
            <VideoCardHoverNoButton videoId={video_3}></VideoCardHoverNoButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockNove;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
