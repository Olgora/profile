// use-resize.js
/*import { useState, useEffect } from "react";

export const SCREEN_SM = 576;
export const SCREEN_MD = 768;
export const SCREEN_LG = 992;
export const SCREEN_XL = 1200;
export const SCREEN_XXL = 1400;

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [hight, setHight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
      setHight(event.target.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    width,
    hight,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};*/

// use-resize.js
import { useLayoutEffect, useState } from "react";

export const SCREEN_SM = 576;
export const SCREEN_MD = 768;
export const SCREEN_LG = 992;
export const SCREEN_XL = 1200;
export const SCREEN_XXL = 1400;

export const useResize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    let rafId:number;

    const update = () => {
      cancelAnimationFrame(rafId);

      rafId = requestAnimationFrame(() => {
        const width = window.innerWidth;
        const height =
          window.visualViewport?.height || window.innerHeight;

        setSize({ width, height });
      });
    };

    update(); // ❗ первый расчёт ДО paint

    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
    };
  }, []);

  const { width, height } = size;

  return {
    width,
    hight: height,
    isScreenSm: width >= SCREEN_SM,
    isScreenMd: width >= SCREEN_MD,
    isScreenLg: width >= SCREEN_LG,
    isScreenXl: width >= SCREEN_XL,
    isScreenXxl: width >= SCREEN_XXL,
  };
};
