import { useResize } from "../../utils/hook";
import AppBorder from "../app-bord/app-bord";
import AppBordermob from "../app-bordmob/app-bordmob";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import { ImageGalleryVert } from "../imageblock/imagegaleryvert/imagegaleryvert";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import styles from "./blockdez.module.css";

import {
    text_1,
    text_2,
    text_3,
    text_4,
    text_4_1,
    text_4_2,
    text_4_3,
    text_4_4,
    title_2,
    title_3,
    title_4,
    video_1,
    video_2,
    video_3,
} from "../../data/section_9/text";

function BlockDez() {
  const ww = useResize();
  const wl = ww.isScreenXl;

  const imagesmodal = [
    "https://yepp.fun/images/img9_1.jpg",
    "https://yepp.fun/images/img9.jpg",
    "https://yepp.fun/images/img9_2_1.jpg",
    "https://yepp.fun/images/img9_2_2.jpg",
    "https://yepp.fun/images/img9_2_3.jpg",
    "https://yepp.fun/images/img9_2_4.jpg",
    "https://yepp.fun/images/img9_3.jpg",
  ];

  const images_1 = ["https://yepp.fun/images/img9_1.jpg"];

  const images_2_1 = [
    "https://yepp.fun/images/img9_2_1.jpg",

    "https://yepp.fun/images/img9_2_3.jpg",
  ];

  const images_2_2 = ["https://yepp.fun/images/img9_2_2.jpg"];
  const images_3 = ["https://yepp.fun/images/img9_3.jpg"];
  const images_0 = ["https://yepp.fun/images/img9.jpg"];

  return (
    <div>
      {wl && (
        <div className={styles.main}>
          <AppBorder name="Development tools"></AppBorder>

          <div className={styles.blocktwoimage}>
            <div className={styles.imgblock} style={{ width: "40%" }}>
              <ImageGallery
                images={images_0}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>

            <div className={styles.textblock} style={{ paddingLeft: "60px" }}>
              <p>{text_1}</p>
            </div>
          </div>
          <div className={styles.name}>{title_4}</div>
          <div className={styles.blocktwoimage}>
            <div className={styles.vertical}>
              <div className={styles.videoblock} style={{ width: "100%" }}>
                <VideoCardHoverNoButton
                  videoId={video_3}
                ></VideoCardHoverNoButton>
              </div>

              <div className={styles.vertical}>
                <div className={styles.textblock} style={{ width: "100%" }}>
                  <p>{text_4_4}</p>
                  <p>{text_4}</p>
                </div>
                <div className={styles.gorizont}>
                  <div className={styles.textblock} style={{ width: "45%" }}>
                    <p>{text_4_1}</p>
                    <p>{text_4_2}</p>
                  </div>

                  <div className={styles.imgblock} style={{ width: "55%" }}>
                    <ImageGallery
                      images={images_3}
                      imagesmodal={imagesmodal}
                    ></ImageGallery>
                  </div>
                </div>
                <div className={styles.textblock} style={{ width: "100%" }}>
                  <p>{text_4_3}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.name}>{title_2}</div>

          <div className={styles.blocktwoimage}>
            <div className={styles.vertical} style={{ width: "50%" }}>
              <div className={styles.textblock} style={{ width: "100%" }}>
                <p>{text_2}</p>
              </div>
              <div className={styles.videoblock}>
                <VideoCardHoverNoButton
                  videoId={video_1}
                ></VideoCardHoverNoButton>
              </div>
            </div>
            <div className={styles.vertical} style={{ width: "45%" }}>
              <div className={styles.imgblock} style={{ width: "100%" }}>
                <ImageGallery
                  images={images_1}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
            </div>
          </div>

          <div className={styles.name}>{title_3}</div>
          <div className={styles.blocktwoimage}>
            <div className={styles.vertical}>
              <div className={styles.imgblock} style={{ width: "100%" }}>
                <ImageGallery
                  images={images_2_1}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
                <ImageGalleryVert
                  images={images_2_2}
                  imagesmodal={imagesmodal}
                ></ImageGalleryVert>
              </div>
              <div className={styles.videoblock} style={{ width: "100%" }}>
                <VideoCardHoverNoButton
                  videoId={video_2}
                ></VideoCardHoverNoButton>
              </div>
            </div>
            <div className={styles.textblock} style={{ paddingLeft: "30px" }}>
              <p>{text_3}</p>
            </div>
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.main}>
          <AppBordermob name="Development tools"></AppBordermob>

          <div className={styles.imgblockv}>
            <ImageGallery
              images={images_0}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>

          <div className={styles.textblockv}>
            <p>{text_1}</p>
          </div>

          <div className={styles.name}>{title_4}</div>

          <div className={styles.vertical}>
            <div className={styles.videoblock}>
              <VideoCardHoverNoButton
                videoId={video_3}
              ></VideoCardHoverNoButton>
            </div>

            <div className={styles.vertical}>
              <div className={styles.textblockv}  >
                <p>{text_4_4}</p>
                <p>{text_4}</p>
              </div>
              <div className={styles.gorizontv}>
                <div className={styles.textblockv}  >
                  <p>{text_4_1}</p>
                  <p>{text_4_2}</p>
                </div>

                <div className={styles.imgblockv}  >
                  <ImageGallery
                    images={images_3}
                    imagesmodal={imagesmodal}
                  ></ImageGallery>
                </div>
              </div>
              <div className={styles.textblockv}  >
                <p>{text_4_3}</p>
              </div>
            </div>
          </div>

          <div className={styles.name}>{title_2}</div>

          <div className={styles.vertical}  >
            <div className={styles.textblockv}  >
              <p>{text_2}</p>
            </div>
            <div className={styles.videoblock}>
              <VideoCardHoverNoButton
                videoId={video_1}
              ></VideoCardHoverNoButton>
            </div>
          </div>
          <div className={styles.vertical} >
            <div className={styles.imgblockv} >
              <ImageGallery
                images={images_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          </div>

          <div className={styles.name}>{title_3}</div>

          <div className={styles.vertical}>
            <div className={styles.imgblockv}>
              <ImageGallery
                images={images_2_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
              <ImageGalleryVert
                images={images_2_2}
                imagesmodal={imagesmodal}
              ></ImageGalleryVert>
            </div>
            <div className={styles.videoblock} >
              <VideoCardHoverNoButton
                videoId={video_2}
              ></VideoCardHoverNoButton>
            </div>
          </div>
          <div className={styles.textblockv} >
            <p>{text_3}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockDez;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
