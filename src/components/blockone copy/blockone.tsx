import AppBorder from "../app-bord/app-bord";
import { SliderImg } from "../imageblock/slider/slider";
import { VideoCard } from "../videoblock/videocard/videocard";
import { VideoCardHoverNoButton } from "../videoblock/videocardauto/videocardauto";
import { YouTubePlayer } from "../videoblock/youtube/youtube";
import styles from "./start.module.css";

function Start() {
  const images = [
    "https://yepp.fun/images/img0701_.jpg",
    "https://yepp.fun/images/img0702_.jpg",
    "https://yepp.fun/images/img0703_.jpg",
  ];
  return (
    <div className={styles.main}>
      <AppBorder name="Sea of The Mind"></AppBorder>

      

     
       
      <div style={{ width: "70vw", margin: "0 auto", padding: 0, height:"60vh"  }}>
        <SliderImg list={images} />
      </div>
      <div style={{ width: 700, margin: "0 auto", padding: 20 }}>
        <YouTubePlayer videoId="3m7Tyo-3TNM" autoPlay controls mute={false} />
      </div>
      <div style={{ padding: 20 }}>
        <VideoCard videoId="3m7Tyo-3TNM" title="Пример видео" />
      </div>
      <div style={{ padding: 20 }}>
        <h2>Видео с миниатюрой без кнопки Play</h2>
        <VideoCardHoverNoButton
          videoId="3m7Tyo-3TNM"
          title="Автоплей миниатюры"
          autoplayOnLoad={true} // воспроизводится сразу
          autoplayOnHover={true} // воспроизводится при наведении
        />
      </div>
       
    </div>
  );
}

export default Start;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
