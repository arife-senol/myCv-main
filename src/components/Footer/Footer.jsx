import React, { useEffect, useState } from "react";
import { BiSolidHandRight } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Footer({ data }) {
  const isDarkMode = useSelector((state) => state.theme);
  const lang = useSelector((state) => state.language);

  const [footerData, setFooterData] = useState({});

  const englishFooter = data[0]?.en?.footer;
  const turkishFooter = data[1]?.tr?.footer;

  useEffect(() => {
    if (data) {
      setFooterData(lang === "EN" ? englishFooter : turkishFooter);
    }
  }, [data, lang]);

  const { text, email, links } = footerData || {};

  return (
    <div className="bg-gray-100 dark:bg-[#141414] ">
      <div className="mx-auto xl:h-[251px] lg:h-[211px] md:h-[181px] h-[150px]">
        <div className="flex flex-col gap-2 justify-center xl:p-[60px] lg:p-[40px] md:p-[30px] p-[20px]">
          {text && (
            <span className="xl:text-[42px] lg:text-2xl md:text-xl text-base font-semibold dark:text-[#AEBCCF]">
              {text.first} <br />
              {text.second}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between  xl:px-[60px] lg:px-[30px] md:px-[20px] px-[10px]">
          <span className="flex items-center gap-2 text-[#AF0C48] dark:text-[#BAB2E7] xl:text-[20px] md:text-[12px] text-[10px]">
            <BiSolidHandRight className=" text-yellow-600" /> {email}
          </span>
          <ul className="flex items-center gap-4">
            {links &&
              links.map((link) => (
                <li
                  key={link.id}
                  className={`xl:text-[18px] md:text-[12px] text-[10px] font-semibold cursor-pointer ${
                    isDarkMode === "dark" ? link.dark : link.light
                  }`}
                >
                  {link.content}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
