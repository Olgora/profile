import { useState } from "react";
import styles from "./menuleft.module.css";
import { listmenu } from "../../data/menut";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function MenuLeft() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* БУРГЕР */}
      <button
        className={styles.burger}
        onClick={() => setOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* МЕНЮ */}
      <div className={`${styles.menulist} ${open ? styles.open : ""}`}>
        {listmenu.map((item) => (
          <motion.div whileHover={{ scale: 1.1 }} key={item.link}>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                `${styles.menuitem} ${isActive ? styles.active : ""}`
              }
              onClick={() => setOpen(false)} // закрывать при клике
            >
              {item.name}
            </NavLink>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default MenuLeft;
