
import styles from "./startpage.module.css";
import Start from "../../components/start/start";
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


      <Start></Start>
    </div>
  );
}

export default StartPage;
