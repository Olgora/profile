import styles from "./app.module.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "../../pages/startpage/startpage";
import SmallPage from "../../pages/smallpage/smallpage";
import PageCinco from "../../pages/pagecinco/pagecinco";
import PageTres from "../../pages/pagetres/pagetres";
import PageDois from "../../pages/pagedois/pagedois";
import PageSeis from "../../pages/pageseis/pageseis";
import PageSete from "../../pages/pagesete/pagesete";
import PageNove from "../../pages/pagenove/pagenove";
import PageDez from "../../pages/pagedez/pagedez";
import MaindPage from "../../pages/mainpage/mainpage";
import MenuLeft from "../../components/menuleft/menuleft";
import ScrollToTop from "./toptt";

function App() {
  useEffect(() => {
    document.title = "Game Programming Portfolio";
  }, []);

  return (
    <div className={styles.app}>
      <ScrollToTop />
      <div className={styles.blockmenu}>
        <div className={styles.menuleft}>
          <MenuLeft></MenuLeft>
        </div>
      </div>
      <div className={styles.main}>
        <Routes>
          <Route path="/" element={<MaindPage />} />
          <Route path="/smallprojects" element={<SmallPage />} />
          <Route path="/outjump" element={<PageCinco />} />
          <Route path="/theloop" element={<PageTres />} />
          <Route path="/models" element={<PageDois />} />
          <Route path="/visuals" element={<PageSeis />} />
          <Route path="/kost" element={<PageSete />} />
          <Route path="/corvus" element={<PageNove />} />
          <Route path="/systems" element={<PageDez />} />
          <Route path="/athreedthree" element={<StartPage />} />
          <Route path="*" element={<StartPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
