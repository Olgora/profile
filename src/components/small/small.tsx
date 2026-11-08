import { useResize } from "../../utils/hook";
import AppBorder from "../app-bord/app-bord";
import AppBordermob from "../app-bordmob/app-bordmob";
import CardBlock from "../cardblock/cardblock";
import styles from "./small.module.css";

function Small() {
  const ww = useResize();
  const wl = ww.isScreenXl;
  return (
    <div>
      {wl && (
        <div className={styles.main}>
          <AppBorder name="Small Projects"></AppBorder>
          <div className={styles.cardsblock}>
            <CardBlock
              name="Through the Memories"
              subname={["Engine: Unity", "Genre: 2D Platformer"]}
              image={[
                "https://yepp.fun/images/img7_1_1.jpg",
                "https://yepp.fun/images/img7_1_2.jpg",
              ]}
              video="wifE4eoW4L4"
              text="Made during a game jam in order to both figure out the process for completing a game and to put together a team, which has stayed with me for most future projects. I made the code, the level, as well as the effects: the entire team was very inexperienced, so in order to create atmosphere, I had to use really heavy bloom and emphasize the lighting. Later on I experimented with normal maps, but decided that they didn’t fit the simpler artstyle."
            ></CardBlock>
            <CardBlock
              name="Moon Rabbit"
              image={[
                "https://yepp.fun/images/img7_2_1.jpg",
                "https://yepp.fun/images/img7_2_2.jpg",
              ]}
              subname={["Engine: Godot", "Genre:3D Platformer"]}
              video="UCGMEcWqCBE"
              text="A small 3D platformer with 2 gimmicks: escaping from shadowy clones of the main character and dimension swapping using a button, which affects certain platforms. Made during a gamejam in a team as our first 3D game, with me making the 3D models and code. The main difficulty was getting the directional sprites to work consistently on multiple objects (the main character and the clones) due to Godot’s internal optimizations restricting the amount of texture swap requests."
            ></CardBlock>
          </div>
        </div>
      )}

      {!wl && (
        <div className={styles.main}>
          <AppBordermob name="Small Projects"></AppBordermob>
          <div className={styles.cardsblock}>
            <CardBlock
              name="Through the Memories"
              subname={["Engine: Unity", "Genre: 2D Platformer"]}
              image={[
                "https://yepp.fun/images/img7_1_1.jpg",
                "https://yepp.fun/images/img7_1_2.jpg",
              ]}
              video="wifE4eoW4L4"
              text="Made during a game jam in order to both figure out the process for completing a game and to put together a team, which has stayed with me for most future projects. I made the code, the level, as well as the effects: the entire team was very inexperienced, so in order to create atmosphere, I had to use really heavy bloom and emphasize the lighting. Later on I experimented with normal maps, but decided that they didn’t fit the simpler artstyle."
            ></CardBlock>
            <CardBlock
              name="Moon Rabbit"
              image={[
                "https://yepp.fun/images/img7_2_1.jpg",
                "https://yepp.fun/images/img7_2_2.jpg",
              ]}
              subname={["Engine: Godot", "Genre:3D Platformer"]}
              video="UCGMEcWqCBE"
              text="A small 3D platformer with 2 gimmicks: escaping from shadowy clones of the main character and dimension swapping using a button, which affects certain platforms. Made during a gamejam in a team as our first 3D game, with me making the 3D models and code. The main difficulty was getting the directional sprites to work consistently on multiple objects (the main character and the clones) due to Godot’s internal optimizations restricting the amount of texture swap requests."
            ></CardBlock>
          </div>
        </div>
      )}
    </div>
  );
}

export default Small;
/*<div style={{height:"1200px"}} >
        <AnimatedBackground></AnimatedBackground>
      </div>*/
