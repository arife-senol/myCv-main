import "./style.css";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { theme, languageTr } from "../../store/action";
import useLocalStorage from "../../hook/useLocalStorage";
import { FaMoon } from "react-icons/fa6";

export default function ModeSwitch({ data }) {
  const dispatch = useDispatch();
  const [isTheme, setIsTheme] = useLocalStorage("theme", "light");
  const [isLanguage, setIsLanguage] = useLocalStorage("language", "EN");

  const themeText = isTheme === "dark" ? "LIGHT MODE" : "DARK MODE";
  const languageText = isLanguage === "EN" ? "TÜRKÇE" : "İNGİLİZCE";

  const toggleTheme = () => {
    setIsTheme(isTheme === "light" ? "dark" : "light");
    dispatch(theme());
  };

  const handleChangeLanguage = () => {
    setIsLanguage(isLanguage === "EN" ? "TR" : "EN");
    dispatch(languageTr());
  };
 


  return (
    <div className="media_500 flex items-center justify-between xl:pt-[23px] lg:pt-[15px] md:pt-[10px] pt-[5px]">
      <div></div>
      <div className="flex items-center xl:gap-4 lg:gap-2 gap-1 xl:text-[15px] lg:text-[12px] text-[10px] letter-spacing: 0.1em font-semibold xl:mb-[24px] lg:mb-[16px]  mb-[10px]">
        <div className="text-[#777777] dark:text-[#D9D9D9] flex items-center">
          <Toggle
            defaultChecked={isTheme === "dark"}
            icons={{
              checked: <FaMoon className="w-full" />,
              unchecked: null,
            }}
            className="hidden sm:block"
            onChange={toggleTheme}
          />
          <button className="mx-3" onClick={toggleTheme}>
            {themeText}
          </button>
        </div>
        |
        <button onClick={handleChangeLanguage}>
          <span className="text-[#4731D3] cursor-pointer dark:text-[#BAB2E7s]">
            {languageText}
          </span>
          <span className="text-[#4731D3] cursor-pointer ">'YE GEÇ</span>
        </button>
      </div>
    </div>
  );
}
