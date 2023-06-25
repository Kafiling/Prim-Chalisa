import React from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import styles from "../style";
const HeroSection = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col pt-4 `}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div className="flex flex-row items-center py-[6px] px-4 mb-2">
          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-violet ss:leading-[100px] leading-[75px] z-[99]">
              Hi,There <br className="block" />
              <span className="text-violet"> I'm Chalisa</span>
            </h1>
          </div>
        </div>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 text-black pb-4 z-[99]`}
        >
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </p>
        <div className="ss:flex hidden">
          <button className="bg-accent hover:bg-accentHover text-white font-bold py-4 px-16 rounded-full inline-flex z-[99]">
            Resume{" "}
            <ImArrowUpRight2 className="px-1  w-[100%]  relative top-1 " />
          </button>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/prim-chalisa.appspot.com/o/Prim-nobg.png?alt=media&token=ec840046-8b8e-4830-9ff1-66733dbaad4f"
          alt="Prim"
          className="w-[65%]  relative z-[5]"
        />

        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full  bottom-40 white__gradient " />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 Hero__gradient " />
      </div>
      <div className={`ss:hidden ${styles.flexCenter}  relative`}>
        <button className="bg-accent hover:bg-accentHover text-white font-bold py-4 px-16 mt-[-64px] mb-[8px] rounded-full inline-flex z-[99]">
          Resume <ImArrowUpRight2 className="px-1  w-[100%] relative top-1 " />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
