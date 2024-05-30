import { useEffect, useState } from "react";

const useWindow = (screeSize) => {
  const [onSmallScreen, setonSmallScreen] = useState(false);
  //   const checkScreenSize = () => {
  //     setonSmallScreen(window.innerWidth > screeSize);
  //   };
  useEffect(() => {
    const checkScreenSize = () => {
      setonSmallScreen(window.innerWidth > screeSize);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [screeSize]);
  return onSmallScreen;
};
export default useWindow;
