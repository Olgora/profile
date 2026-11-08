import { useResize } from "../../utils/hook";
import AppBorder from "../app-bord/app-bord";
import AppBordermob from "../app-bordmob/app-bordmob";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import styles from "./blockdois.module.css";

import {
  text_1,
  text_2,
  text_3,
  text_4,
  text_5,
  text_6,
  text_8,
  text_9,
} from "../../data/section_2/text";

function BlockDois() {
  const ww = useResize();
  const wl = ww.isScreenXl;
  const imagesmodal = [
    "https://yepp.fun/images/img2_1_1.jpg",
    "https://yepp.fun/images/img2_1_2.jpg",
    "https://yepp.fun/images/img2_1_3.jpg",
    "https://yepp.fun/images/img2_1_4.jpg",
    "https://yepp.fun/images/img2_1_5.jpg",
    "https://yepp.fun/images/img2_2_1.jpg",
    "https://yepp.fun/images/img2_2_2.jpg",
    "https://yepp.fun/images/img2_3_1.jpg",
    "https://yepp.fun/images/img2_3_2.jpg",
    "https://yepp.fun/images/img2_4_1.jpg",
    "https://yepp.fun/images/img2_4_2.jpg",
    "https://yepp.fun/images/img2_4_3.jpg",
    "https://yepp.fun/images/img2_5_1.jpg",
    "https://yepp.fun/images/img2_5_2.jpg",
    "https://yepp.fun/images/img2_6_1.jpg",
    "https://yepp.fun/images/img2_6_2.jpg",
    "https://yepp.fun/images/img2_7_1.jpg",
    "https://yepp.fun/images/img2_7_2.jpg",
    "https://yepp.fun/images/img2_8_1.jpg",
    "https://yepp.fun/images/img2_8_2.jpg",
    "https://yepp.fun/images/img2_8_3.jpg",
    "https://yepp.fun/images/img2_9_1.jpg",
    "https://yepp.fun/images/img2_9_2.jpg",
    "https://yepp.fun/images/img2_9_3.jpg",
    "https://yepp.fun/images/img2_9_4.jpg",
    "https://yepp.fun/images/img2_9_5.jpg",
    "https://yepp.fun/images/img2_9_6.jpg",
  ];

  const images_1 = [
    "https://yepp.fun/images/img2_1_1.jpg",
    "https://yepp.fun/images/img2_1_2.jpg",
    "https://yepp.fun/images/img2_1_3.jpg",
  ];
  const images_2 = [
    "https://yepp.fun/images/img2_1_4.jpg",
    "https://yepp.fun/images/img2_1_5.jpg",
  ];
  const images_3 = [
    "https://yepp.fun/images/img2_2_1.jpg",
    "https://yepp.fun/images/img2_2_2.jpg",
  ];

  const images_7 = [
    "https://yepp.fun/images/img2_7_1.jpg",
    "https://yepp.fun/images/img2_7_2.jpg",
  ];
  const images_8 = [
    "https://yepp.fun/images/img2_8_1.jpg",
    "https://yepp.fun/images/img2_8_2.jpg",
    "https://yepp.fun/images/img2_8_3.jpg",
  ];
  const images_4_1 = ["https://yepp.fun/images/img2_3_1.jpg"];
  const images_4_2 = ["https://yepp.fun/images/img2_3_2.jpg"];

  const images_6 = [
    "https://yepp.fun/images/img2_5_1.jpg",
    "https://yepp.fun/images/img2_5_2.jpg",
  ];
  const images_9 = [
    "https://yepp.fun/images/img2_6_1.jpg",
    "https://yepp.fun/images/img2_6_2.jpg",
  ];
  const images_5_1 = ["https://yepp.fun/images/img2_4_1.jpg"];
  const images_5_2 = ["https://yepp.fun/images/img2_4_2.jpg"];
  const images_5_3 = ["https://yepp.fun/images/img2_4_3.jpg"];

  return (
    <div>
      {wl && (
        <div className={styles.main}>
          <AppBorder name="3D Modelling"></AppBorder>

          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ paddingRight: "20px" }}>
              <p>{text_1}</p>
              <p>{text_2}</p>
            </div>
            <div className={styles.imgblock} style={{ width: "65%" }}>
              <ImageGallery
                images={images_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
              <ImageGallery
                images={images_2}
                imagesmodal={imagesmodal}
              ></ImageGallery>
              <ImageGallery
                images={images_9}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          </div>

          <div className={styles.blockimagecol}>
            <div
              className={styles.imgblock}
              style={{ width: "100%", gap: "40px" }}
            >
              <ImageGallery
                images={images_3}
                imagesmodal={imagesmodal}
                height={"97%"}
              ></ImageGallery>
            </div>
            <div className={styles.textblock} style={{ width: "100%" }}>
              <p>{text_3}</p>
            </div>
          </div>

          <div className={styles.blockimagecol}>
            <div className={styles.imgblockrou} style={{ width: "100%" }}>
              <ImageGallery
                images={images_4_1}
                imagesmodal={imagesmodal}
                height={"100%"}
              ></ImageGallery>
              <ImageGallery
                images={images_4_2}
                imagesmodal={imagesmodal}
                height={"70%"}
              ></ImageGallery>
            </div>
            <div className={styles.textblock} style={{ width: "100%" }}>
              <p>{text_4}</p>
            </div>
          </div>

          <div className={styles.blockimagecol}>
            <div className={styles.imgblockrou} style={{ width: "100%" }}>
              <ImageGallery
                images={images_5_2}
                imagesmodal={imagesmodal}
                height={"100%"}
              ></ImageGallery>
              <div className={styles.imgblock} style={{ width: "43%" }}>
                <ImageGallery
                  images={images_5_1}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
                <ImageGallery
                  images={images_5_3}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
            </div>
            <div className={styles.textblock} style={{ width: "100%" }}>
              <p>{text_5}</p>
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.imgblock} style={{ width: "65%" }}>
              <ImageGallery
                images={images_6}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
            <div className={styles.textblock} style={{ width: "35%" }}>
              <p>{text_6}</p>
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ width: "33%" }}>
              <p>{text_8}</p>
            </div>
            <div className={styles.imgblock} style={{ width: "65%" }}>
              <ImageGallery
                images={images_7}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          </div>
          <div className={styles.blocktwoimage}>
            <div className={styles.imgblock} style={{ width: "65%" }}>
              <ImageGallery
                images={images_8}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
            <div className={styles.textblock} style={{ width: "33%" }}>
              <p>{text_9}</p>
            </div>
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.mainv}>
          <AppBordermob name="3D Modelling"></AppBordermob>

          <div className={styles.textblockv} >
            <p>{text_1}</p>
            <p>{text_2}</p>
          </div>
          <div className={styles.imgblockv} >
            <ImageGallery
              images={images_1}
              imagesmodal={imagesmodal}
            ></ImageGallery>
            <ImageGallery
              images={images_2}
              imagesmodal={imagesmodal}
            ></ImageGallery>
            <ImageGallery
              images={images_9}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>

          <div
            className={styles.imgblockv}
          >
            <ImageGallery
              images={images_3}
              imagesmodal={imagesmodal}
              height={"97%"}
            ></ImageGallery>
          </div>
          <div className={styles.textblockv}  >
            <p>{text_3}</p>
          </div>

          <div className={styles.imgblockv} >
            <ImageGallery
              images={images_4_1}
              imagesmodal={imagesmodal}
              height={"100%"}
            ></ImageGallery>
            <ImageGallery
              images={images_4_2}
              imagesmodal={imagesmodal}
              height={"70%"}
            ></ImageGallery>
          </div>
          <div className={styles.textblockv}  >
            <p>{text_4}</p>
          </div>

          <div className={styles.imgblockv}  >
            <ImageGallery
              images={images_5_2}
              imagesmodal={imagesmodal}
              height={"100%"}
            ></ImageGallery>
            <div className={styles.imgblockv} >
              <ImageGallery
                images={images_5_1}
                imagesmodal={imagesmodal}
              ></ImageGallery>
              <ImageGallery
                images={images_5_3}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          </div>
          <div className={styles.textblockv} >
            <p>{text_5}</p>
          </div>

          <div className={styles.imgblockv} >
            <ImageGallery
              images={images_6}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>
          <div className={styles.textblockv}  >
            <p>{text_6}</p>
          </div>

          <div className={styles.textblockv} >
            <p>{text_8}</p>
          </div>
          <div className={styles.imgblockv} >
            <ImageGallery
              images={images_7}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>

          <div className={styles.imgblockv} >
            <ImageGallery
              images={images_8}
              imagesmodal={imagesmodal}
            ></ImageGallery>
          </div>
          <div className={styles.textblockv}  >
            <p>{text_9}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockDois;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
