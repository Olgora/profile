import { text_01, text_02, text_3, text_4 } from "../../data/section_1/text";
import { useResize } from "../../utils/hook";
import AppBorder from "../app-bord/app-bord";
import AppBordermob from "../app-bordmob/app-bordmob";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";
import { ImageGalleryVert } from "../imageblock/imagegaleryvert/imagegaleryvert";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import styles from "./blockone.module.css";

function Blockone() {
  const ww = useResize();
  const wl = ww.isScreenXl;
  const imagesmodal = [
    "https://yepp.fun/images/img0701_.jpg",
    "https://yepp.fun/images/img0702_.jpg",
    "https://yepp.fun/images/img0703_.jpg",
    "https://yepp.fun/images/img0101.jpg",
    "https://yepp.fun/images/img0102.jpg",
    "https://yepp.fun/images/img02.jpg",
    "https://yepp.fun/images/img0302.png",
    "https://yepp.fun/images/img0303.jpg",
    "https://yepp.fun/images/img0301.png",
    "https://yepp.fun/images/img05.jpg",
    "https://yepp.fun/images/img06.jpg",
  ];
  const imagestwo = [
    "https://yepp.fun/images/img0101.jpg",
    "https://yepp.fun/images/img0102.jpg",
  ];

  const images_2 = ["https://yepp.fun/images/img02.jpg"];
  const images_3 = [
    "https://yepp.fun/images/img0302.png",
    "https://yepp.fun/images/img0303.jpg",
  ];
   
  const images_5 = [
    "https://yepp.fun/images/img06.jpg",
    "https://yepp.fun/images/img05.jpg",
  ];
  const images_6 = ["https://yepp.fun/images/img08.jpg"];

  return (
    <div>
      {wl && (
        <div className={styles.main}>
          <AppBorder name="Sea of The Mind"></AppBorder>
          <div className={styles.titlebox}>
            <div className={styles.title}>
              Genre:2D Platformer, First Person Walking Simulator
            </div>
            <div className={styles.title}>Engine: prototype made in Unity</div>
            <div className={styles.title}>WIP</div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ width: "30%" }}>
              {text_01}
            </div>
            <div className={styles.imgblock} style={{ width: "65%" }}>
              <ImageGallery
                images={imagestwo}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.vertical}>
              <div className={styles.imgblock} style={{ width: "80%" }}>
                <ImageGallery
                  images={images_2}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
              <div className={styles.imgblock} style={{ width: "80%" }}>
                <ImageGallery
                  images={images_3}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
            </div>
            <div className={styles.textblock} style={{ width: "55%" }}>
              {text_02}
            </div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.textblock} style={{ width: "35%" }}>
              {text_3}
            </div>

            <div className={styles.imgblock} style={{ width: "55%" }}>
              <ImageGalleryVert
                images={images_5}
                imagesmodal={imagesmodal}
              ></ImageGalleryVert>
            </div>
          </div>

          <div className={styles.blocktwoimage}>
            <div className={styles.vertical} style={{ width: "60%" }}>
              <div className={styles.imageblock}>
                <ImageGallery
                  images={images_6}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
              <div className={styles.videoblock}>
                <VideoCardHoverNoButton
                  videoId="mMWUZOSaQcw"
                  title="Автоплей миниатюры"
                  autoplayOnLoad={true} // воспроизводится сразу
                  autoplayOnHover={true} // воспроизводится при наведении
                />
              </div>
            </div>
            <div className={styles.textblock} style={{ width: "35%" }}>
              {text_4}
            </div>
          </div>

          <div className={styles.videoblock} style={{ marginTop: "40px" }}>
            <VideoCardHoverNoButton
              videoId="FgzeyygynWc"
              title="Автоплей миниатюры"
              autoplayOnLoad={true} // воспроизводится сразу
              autoplayOnHover={true} // воспроизводится при наведении
            />
            <VideoCardHoverNoButton
              videoId="HCq0SrpHcfA"
              title="Автоплей миниатюры"
              autoplayOnLoad={true} // воспроизводится сразу
              autoplayOnHover={true} // воспроизводится при наведении
            />
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.mainv}>
          <AppBordermob name="Sea of The Mind"></AppBordermob>
          <div className={styles.titlebox}>
            <div className={styles.title}>
              Genre:2D Platformer, First Person Walking Simulator
            </div>
            <div className={styles.title}>Engine: prototype made in Unity</div>
            <div className={styles.title}>WIP</div>
          </div>

          
            <div className={styles.textblockv}  >
              {text_01}
            </div>
            <div className={styles.imgblockv}  >
              <ImageGallery
                images={imagestwo}
                imagesmodal={imagesmodal}
              ></ImageGallery>
            </div>
          

          
            <div className={styles.vertical}>
              <div className={styles.imgblockv}>
                <ImageGallery
                  images={images_2}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
              <div className={styles.imgblockv} >
                <ImageGallery
                  images={images_3}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
            </div>
            <div className={styles.textblockv}  >
              {text_02}
            </div>
       

        
            <div className={styles.textblockv} >
              {text_3}
            </div>

            <div className={styles.imgblockv}  >
              <ImageGalleryVert
                images={images_5}
                imagesmodal={imagesmodal}
              ></ImageGalleryVert>
            </div>
       

          
            <div className={styles.vertical}  >
              <div className={styles.imageblockv}>
                <ImageGallery
                  images={images_6}
                  imagesmodal={imagesmodal}
                ></ImageGallery>
              </div>
              <div className={styles.videoblock}>
                <VideoCardHoverNoButton
                  videoId="mMWUZOSaQcw"
                  title="Автоплей миниатюры"
                  autoplayOnLoad={true} // воспроизводится сразу
                  autoplayOnHover={true} // воспроизводится при наведении
                />
              </div>
            </div>
            <div className={styles.textblockv}  >
              {text_4}
            </div>
         

          <div className={styles.videoblockv} style={{ marginTop: "20px" }}>
            <VideoCardHoverNoButton
              videoId="FgzeyygynWc"
              title="Автоплей миниатюры"
              autoplayOnLoad={true} // воспроизводится сразу
              autoplayOnHover={true} // воспроизводится при наведении
            />
            <VideoCardHoverNoButton
              videoId="HCq0SrpHcfA"
              title="Автоплей миниатюры"
              autoplayOnLoad={true} // воспроизводится сразу
              autoplayOnHover={true} // воспроизводится при наведении
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Blockone;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
