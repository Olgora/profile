import { text_1, text_2, text_3 } from "../../data/section_3/text";
import { useResize } from "../../utils/hook";
import AppBorder from "../app-bord/app-bord";
import AppBordermob from "../app-bordmob/app-bordmob";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import styles from "./blocktres.module.css";

function BlockTres() {
  const ww = useResize();
  const wl = ww.isScreenXl;

  const imagesmodal = [
    "https://yepp.fun/images/img3_1.jpg",
    "https://yepp.fun/images/img3_2.jpg",
    "https://yepp.fun/images/img3_3.jpg",
  ];

  const images_1 = ["https://yepp.fun/images/img3_1.jpg"];
  const images_2 = ["https://yepp.fun/images/img3_2.jpg"];
  const images_3 = ["https://yepp.fun/images/img3_3.jpg"];

  return (
    <div>
      {wl && (
        <div className={styles.main}>
          <AppBorder name="Anti-Spiral"></AppBorder>
          <div className={styles.titlebox}>
            <div className={styles.title}>Genre:2D Bullet Hell/Puzzle Game</div>
            <div className={styles.title}>Engine: Godot</div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.imgblock} style={{ width: "55%" }}>
              <ImageGallery
                images={images_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
              <div
                className={styles.videoblock}
                style={{ paddingBottom: "40px", paddingTop: "40px" }}
              >
                <VideoCardHoverNoButton
                  videoId={"-bEx4ibzUdk"}
                ></VideoCardHoverNoButton>
              </div>
              <div className={styles.videoblock}>
                <VideoCardHoverNoButton
                  videoId={"uKZzLkJy178"}
                ></VideoCardHoverNoButton>
              </div>
            </div>
            <div className={styles.textblock} style={{ paddingLeft: "40px" }}>
              <p>{text_1}</p>
              <p>{text_2}</p>
              <p>{text_3}</p>
            </div>
          </div>
          <div className={styles.blockimage}>
            <div className={styles.imgblock}>
              <ImageGallery
                images={images_2}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>

            <div className={styles.videoblock} style={{ width: "45%" }}>
              <VideoCardHoverNoButton
                videoId={"5QteYg5U-Fw"}
              ></VideoCardHoverNoButton>
            </div>
            <div className={styles.imgblock}>
              <ImageGallery
                images={images_3}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.mainv}>
          <AppBordermob name="Anti-Spiral"></AppBordermob>
          <div className={styles.titlebox}>
            <div className={styles.title}>Genre:2D Bullet Hell/Puzzle Game</div>
            <div className={styles.title}>Engine: Godot</div>
          </div>

          <div className={styles.imgblockv}  >
            <ImageGallery
              images={images_1}
              imagesmodal={imagesmodal}
            ></ImageGallery>
            <div
              className={styles.videoblock}
              
            >
              <VideoCardHoverNoButton
                videoId={"-bEx4ibzUdk"}
              ></VideoCardHoverNoButton>
            </div>
            <div className={styles.videoblock}>
              <VideoCardHoverNoButton
                videoId={"uKZzLkJy178"}
              ></VideoCardHoverNoButton>
            </div>
          </div>
          <div className={styles.textblockv}  >
            <p>{text_1}</p>
            <p>{text_2}</p>
            <p>{text_3}</p>
          </div>

          <div className={styles.imgblockv}>
            <ImageGallery
              images={images_2}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>

          <div className={styles.videoblock}  >
            <VideoCardHoverNoButton
              videoId={"5QteYg5U-Fw"}
            ></VideoCardHoverNoButton>
          </div>
          <div className={styles.imgblockv}>
            <ImageGallery
              images={images_3}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockTres;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
