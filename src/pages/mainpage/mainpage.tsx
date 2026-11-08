
import styles from "./main.module.css";
import MainBlock from "../../components/mainblock/mainblock";
import { Helmet } from "react-helmet-async";

function MaindPage() {
  return (
    <div className={styles.main}>
       <Helmet>
        <title>Game Programming Portfolio</title>
        <meta
          name="description"
          content="A personal game design portfolio page"
        />
        <link rel="canonical" href="https://lastyatagarasu.website/" />
      </Helmet>

      <MainBlock></MainBlock>
    </div>
  );
}

export default MaindPage;
