import React, { useRef } from "react";
import { InView } from "react-intersection-observer";
import styles from "../style";

const Skills = () => {
  return (
    <InView>
      {({ inView, ref }) => (
        <section
          id="skills"
          className={
            `flex flex-col pb-4 md:pb-[7.5%] xl:px-0 sm:px-16 px-6` +
            (inView
              ? " animate-fade-up animate-ease-in-out animate-delay-500 "
              : "")
          }
          ref={ref}
        >
          <div className="flex justify-between items-center w-full">
            <h4 className="flex-1 font-poppins font-semibold ss:text-[42px] text-[36px] text-violet ss:leading-[63px] leading-[54px] z-[99]">
              Highlighted Skills
            </h4>
          </div>

          <div>
            <ul className="flex flex-wrap items-center ">
              <li className="px-2 mr-8 mt-2 ss:text-[20px] text-[18px] ss:leading-[35px] leading-[30px] bg-primary rounded-lg">
                Lorem ipsum
              </li>
              <li className="px-2 mr-8 mt-2 ss:text-[20px] text-[18px] ss:leading-[35px] leading-[30px] bg-primary rounded-lg">
                Lorem
              </li>
              <li className="px-2 mr-8 mt-2 ss:text-[20px] text-[18px] ss:leading-[35px] leading-[30px] bg-primary rounded-lg">
                Ipsum
              </li>
              <div className="px-2 mr-8 mt-2 ss:text-[20px] text-[18px] ss:leading-[35px] leading-[30px] bg-primary rounded-lg">
                Placeholder Text
              </div>
            </ul>
          </div>
        </section>
      )}
    </InView>
  );
};

export default Skills;
