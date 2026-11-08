import styles from "./cardblock.module.css";
import { ImageGallery } from "../imageblock/imagegalery/imagegalery";

import { VideoCard } from "../videoblock/videocard/videocard";

type TypeCard = {
  name: string;
  subname: string[];
  video: string;
  text: string;
  image: string[];
  size?:number | string;
};

function CardBlock({ name, video, text, image, subname, size }: TypeCard) {
  return (
    <div className={styles.cardblock}>
      <div className={styles.name}>{name}</div>
      <div className={styles.videoblock}>
        <VideoCard videoId={video}></VideoCard>
      </div>
      <div className={styles.subtitle}>
        {subname.map((item, i) => (
          <p>{item}</p>
        ))}
      </div>
      <div className={styles.text}>
        <p className={styles.text}>{text}</p>
      </div>
      <div style={{width:"100%", margin:0, padding:0}}>
      <ImageGallery
        images={image }
        imagesmodal={image}
        height={size}
      ></ImageGallery>
      </div>
       
    </div>
  );
}

export default CardBlock;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
