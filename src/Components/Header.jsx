import React, { useEffect, useState } from "react";
import ThemeChanger from "./ThemeChanger";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30); // You can adjust the threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-10 w-full px-6 md:px-18 flex justify-between items-center transition-all duration-300 ease-in-out ${
        isScrolled
          ? "h-16 bg-black/80 backdrop-blur"
          : "h-28 bg-gradient-to-b from-black via-black/60 to-black/0"
      }`}
    >
      <div className='text-white text-xl font-bold'>Logo</div>
      <div>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default Header;
