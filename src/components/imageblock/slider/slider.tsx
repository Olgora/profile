
import styles from "./slider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Tprops = {
  
  list: string[];
  
};

export const SliderImg = ({ list }: Tprops) => {
   
   const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    cssEase: "linear",
    swipeToSlide: true,
    dots: true,
    focusOnSelect: false,
  };

  return (
    <div className={styles.main}>
      <div className={styles.stringtext} >
        <Slider {...settings}>
          {list.map((item, index) => {
            return (
              <div className={styles.box} key={index}>
                <div className={styles.boxnew} key={index}>
                <img  className={styles.image} src={item} alt={`Slide ${index + 1}`} />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SliderImg;
