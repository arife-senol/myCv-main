export default function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center w-[50px] h-[50px] rounded-[50%] bg-[#EEEBFF] dark:bg-[#4731D3] hover:scale-105">
        <span className="text-[25px]  rotate-45 text-[#775dfa] font-semibold dark:text-[#8F88FF] hover:scale-105">
          A
        </span>
      </div>
      <nav>
        <ul className="flex items-center xl:gap-16 lg:gap-4 md:gap-2 gap-1 xl:text-lg lg:text-base md:text-sm text-[10px] leading-7 font-medium text-gray-600">
          <li className="cursor-pointer xl:px-4 xl:py-2 px-2 py-1  text-[#6B7280] hover:scale-125 hover:text-[#3730A3]">
            <a href="#skills">Skills</a>
          </li>
          <li className="cursor-pointer xl:px-4 xl:py-2 px-2 py-1 text-[#6B7280] hover:scale-125 hover:text-[#3730A3]">
            <a href="#projects">Projects</a>
          </li>
          <li className="cursor-pointer border border-[#3730A3] text-[#3730A3] bg-white px-1 py-0.3 sm:px-2 sm:py-1 md:px-4 md:py-2 lg:px-4 lg:py-2 xl:px-4 xl:py-2 rounded outline-none hover:scale-125">
            <a href="mailto:avcisenolarife@gmail.com">Hire me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
