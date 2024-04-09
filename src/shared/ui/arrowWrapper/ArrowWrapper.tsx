import { weatherIcon } from "@/shared/assets";
import { ReactNode } from "react";

const ArrowWrapper = ({ children, isArrowUp }: { children: ReactNode; isArrowUp: boolean }) => {
  return (
    <>
      {isArrowUp ? <img src={weatherIcon.arrowUp} alt="" /> : <img src={weatherIcon.arrowDown} alt="" />}
      {children}
      {isArrowUp ? <img src={weatherIcon.arrowUp} alt="" /> : <img src={weatherIcon.arrowDown} alt="" />}
    </>
  );
};

export default ArrowWrapper;
