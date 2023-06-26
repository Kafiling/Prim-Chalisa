import React, { useRef } from "react";
import { InView } from "react-intersection-observer";
import styles from "../style";

const AboutMe = () => {
  return (
    <InView>
      {({ inView, ref }) => (
        <section
          id="about-me"
          className={
            `flex md:flex-row flex-col py-4 md:py-[7.5%]` +
            (inView
              ? " animate-fade-up animate-ease-in-out animate-delay-300 "
              : "")
          }
          ref={ref}
        >
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
          >
            <div className="flex flex-row items-center pt-[16px] px-4 mb-2"></div>
            <div className="flex flex-row items-center py-[6px] px-4 mb-2">
              <div className="flex justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[52px] text-violet ss:leading-[100px] leading-[75px] z-[99]">
                  Lorem ipsum is placeholder text
                </h1>
              </div>
            </div>
          </div>
          <div className=" flex items-center  justify-center">
            <p
              className={`${styles.paragraph} max-w-[470px] mt-5 text-black pb-4 z-[99]`}
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups. Lorem ipsum is placeholder text commonly used in the
              graphic, print, and publishing industries for previewing layouts
              and visual mockups.
            </p>
          </div>
        </section>
      )}
    </InView>
  );
};

export default AboutMe;
