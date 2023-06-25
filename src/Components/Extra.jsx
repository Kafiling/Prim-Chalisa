import React, { useRef } from "react";
import { InView } from "react-intersection-observer";
import styles from "../style";
import Extra1 from "./Extra1";
import Extra2 from "./Extra2";
import Extra3 from "./Extra3";

const Extra = () => {
  return (
    <>
      <Extra1 />
      <p className="text-right pr-[10%] md:pr-0">01</p>
      <hr className="w-[80%] md:w-[100%] h-[3px] mx-auto border-0 rounded md:my-5 bg-gray-700"></hr>
      <Extra2 />
      <p className="text-right pr-[10%] md:pr-0">02</p>
      <hr className="w-[80%] md:w-[100%] h-[3px] mx-auto border-0 rounded md:my-5 bg-gray-700"></hr>
      <Extra3 />
      <p className="text-right pr-[10%] md:pr-0">03</p>
    </>
  );
};

export default Extra;
