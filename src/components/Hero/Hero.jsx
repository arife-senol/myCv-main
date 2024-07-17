import React, { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { useSelector } from "react-redux";
import "./style.css";

export default function Hero({ data }) {
  const [heroData, setHeroData] = useState({});
  const lang = useSelector((state) => state.language);

  const englishHero = data[0]?.en?.hero[0];
  const turkishHero = data[1]?.tr?.hero[0];

  useEffect(() => {
    if (data) {
      setHeroData(lang === "EN" ? englishHero : turkishHero);
    }
  }, [data, lang]);

  const { name, presentation, introduction, image } = heroData || {};

  return (
    <div className="flex flex-col w-full xl:mt-14 lg:mt-8 md:mt-5 mt-2">
      <div className="flex flex-col-reverse lg:flex-row relative">
        <div className="flex flex-col xl:gap-[50px] lg:gap-[20px] md:gap-[10px] gap-[30px] relative z-10">
          <div className="flex items-center xl:gap-3 gap-1">
            <div className="xl:w-[100px] lg:w-[80px] md:w-[6px] w-[50px] h-[1px] bg-gradient-to-r from-[#4338CA] via-[#4338CA] to-[#4338CA] dark:bg-[#BAB2E7]"></div>
            {name && (
              <div className="xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-medium text-[#4338CA] dark:text-[#B7AAFF]">
                {name}
              </div>
            )}
          </div>

          {presentation && (
            <h1 className="xl:text-7xl lg:text-4xl md:text-2xl text-xl font-bold text-[#1F2937] dark:text-[#AEBCCF]">
              {presentation}
            </h1>
          )}
          {introduction && (
            <p className="hero_description xl:text-[18px] lg:text-[14px] text-[12px] text-[#6B7280] dark:text-white">
              {introduction}
            </p>
          )}

          <div className="flex items-center xl:gap-3 md:gap-2 gap-1 bottom-1 left-0 font-semibold">
            <a
              className="bg-indigo-800 text-white xl:px-8 xl:py-2 lg:px-5 lg:py-1 px-4 py-1 rounded dark:text-black dark:bg-[#E1E1FF] hover:scale-105 text-sm md:text-base whitespace-nowrap min-w-[100px]"
              href="mailto:avcisenolarife@gmail.com"
            >
              Hire me
            </a>
            <a
              href="https://github.com/arife-senol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 xl:px-5 xl:py-2 px-2 py-1 rounded border border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF] hover:scale-105 text-sm md:text-base"
            >
              
              <IoLogoGithub />Github

            </a>
            <a
              className="flex items-center gap-2 xl:px-5 xl:py-2 px-2 py-1 rounded border border-indigo-800 text-indigo-800 dark:bg-[#383838] dark:text-[#E1E1FF] hover:scale-105 text-sm md:text-base"
              href="https://www.linkedin.com/in/arife-senol-avci-59a279171/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="dark:text-[#BAB2E7]" /> Linkedin
            </a>
          </div>
        </div>
        <div className="hero_image_card w-full h-full relative mb-5 lg:mb-0 flex justify-center lg:justify-end">
          {image && (
            <img
              className="hero_image w-80 h-81 object-cover rounded-[18px] lg:absolute z-10"
              src={`${image}`}
              alt=""
            />
          )}
        </div>
      </div>
    </div>
  );
}
