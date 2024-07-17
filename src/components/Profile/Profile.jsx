import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Profile({ data }) {
  const [profileData, setProfileData] = useState([]);
  const lang = useSelector((state) => state.language);

  const englishProfile = data[0]?.en?.profile;
  const turkishProfile = data[1]?.tr?.profile;

  useEffect(() => {
    if (data) {
      setProfileData(lang === "EN" ? englishProfile : turkishProfile);
    }
  }, [data, lang]);

  const { aboutMe, content } = profileData || [];

  return (
    <div className="xl:mt-10 xl:mb-20 lg:mt-5 lg:mb-10 mt-2 mb-5">
      {aboutMe && (
        <h2 className="xl:text-[48px] lg:text-[40px] md:text-[32px] text-[24px] font-bold xl:mb-10 lg:mb-6 md:mb-4 mb-2 dark:text-[#AEBCCF]">
          {aboutMe.oneTitle}
        </h2>
      )}
      <div className="flex flex-col w-full md:flex-row justify-between xl:gap-4 md:gap-2 gap-4 xl:mb-5 lg:mb-3 mb-2">
        <div className="flex-none gap-2 ">
          {aboutMe && (
            <h3 className="flex xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] text-[#4338CA] dark:text-[#B7AAFF] xl:mb-5  md:mb-3  mb-3">
              {aboutMe.oneTitle}
            </h3>
          )}
          <div className="flex flex-row">
            <div className="flex flex-col xl:gap-5 md:gap-2 gap-1 items-start  xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] font-semibold dark:text-white ">
              {content &&
                content.map((item, index) => (
                  <span key={index}>{item.first}</span>
                ))}
            </div>
            <div className="flex flex-col xl:gap-5 md:gap-2 gap-1   xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] items-start font-normal xl:ml-10 lg:ml-5 md:ml-3 ml-1 text-[#000000] dark:text-white ">
              {content &&
                content.map((item, index) => (
                  <span key={index}>{item.second}</span>
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-auto flex-col xl:gap-4 md:gap-2 gap-1 xl:ml-[56px] lg:ml-[20px] md:ml-[10px] ml-[4px] xl:w-[48vw] lg:w-[30vw] md:w-[20vw] w-[80vw] xl:mr-[130px] lg:mr-[16px] md:mr-[10px] mr-[4px]">
          {aboutMe && (
            <h3 className="xl:text-[30px] lg:text-[26px] md:text-[20px] text-[16px] text-[#4338CA] dark:text-[#B7AAFF] mb-3">
              {aboutMe.title}
            </h3>
          )}
          {aboutMe && (
            <>
              <p className="text-[#6B7280] xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] dark:text-white">
                {aboutMe.first}
              </p>
              <p className="text-[#6B7280]  xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] dark:text-white">
                {aboutMe.second}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
