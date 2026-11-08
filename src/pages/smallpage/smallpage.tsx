
import styles from "./smallpage.module.css";
import Small from "../../components/small/small";
import { Helmet } from "react-helmet-async";

function StartPage() {
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


      <Small></Small>
    </div>
  );
}

export default StartPage;
