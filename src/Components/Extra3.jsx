import React, { useRef } from "react";
import { InView } from "react-intersection-observer";
import styles from "../style";

const Extra3 = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <section
          ref={ref}
          id="extra1-3"
          className={
            `flex md:flex-row flex-col py-4 md:py-[7.5%] justify-between items-center ` +
            (inView
              ? "animate-fade-up animate-ease-in-out animate-delay-300 "
              : "")
          }
        >
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
          >
            <div className="flex flex-row items-center pt-[16px] px-4 mb-2"></div>
            <div className="flex flex-row items-center py-[6px] px-4 mb-2">
              <div className="flex justify-between items-center w-full">
                <h1 className="flex-1 font-poppins font-semibold ss:text-[64px] text-[52px] text-violet ss:leading-[100px] leading-[75px] z-[99]">
                  Build a dam
                </h1>
              </div>
            </div>

            <p
              className={`${styles.paragraph} max-w-[470px] mt-5 text-black pb-4 z-[99]`}
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>

            <div className="ss:flex hidden"></div>
          </div>
          <div className="flex items-center  justify-center w-[100%] md:w-[45%]">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="grid gap-4">
                <img
                  className={
                    "h-auto max-w-full rounded-lg " +
                    (inView
                      ? "animate-fade-up animate-delay-300 animate-ease-in-out"
                      : "")
                  }
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                />

                <img
                  className={
                    "h-auto max-w-full rounded-lg " +
                    (inView
                      ? "animate-fade-up animate-delay-500 animate-ease-in-out"
                      : "")
                  }
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                />

                <img
                  className={
                    "h-auto max-w-full rounded-lg " +
                    (inView
                      ? "animate-fade-up animate-delay-700 animate-ease-in-out"
                      : "")
                  }
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                  alt=""
                />
              </div>
              <div className="grid gap-4">
                <img
                  className={
                    "h-auto max-w-full rounded-lg " +
                    (inView
                      ? "animate-fade-up animate-delay-[400ms] animate-ease-in-out"
                      : "")
                  }
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                  alt=""
                />

                <img
                  className={
                    "h-auto max-w-full rounded-lg " +
                    (inView
                      ? "animate-fade-up animate-delay-[600ms] animate-ease-in-out"
                      : "")
                  }
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                  alt=""
                />

                <img
                  className={
                    "h-auto max-w-full rounded-lg " +
                    (inView
                      ? "animate-fade-up animate-delay-[800ms] animate-ease-in-out"
                      : "")
                  }
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default Extra3;
