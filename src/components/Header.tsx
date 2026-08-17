import Logo from "@/assets/taskflow-logo.png";
import MoonIcon from "./ui/icons/moon";
import { useState } from "react";
import SunIcon from "./ui/icons/sun";

function Header() {
  const [toggleTheme, setToggleTheme] = useState(true);

  function handleToggleTheme() {
    setToggleTheme((dark) => !dark);
  }

  return (
    <header className="flex items-center gap-[1.2rem]">
      <div className="shrink-0">
        <img src={Logo} alt="Task flow logo" className="w-16 sm:w-20" />
      </div>

      <div className="flex min-w-0 flex-1 items-center justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-[2.2rem] font-bold sm:text-[3rem]">TaskFlow</h1>

          <p className="text-[1.2rem] font-normal leading-[1.4] text-text-secondary sm:text-[1.6rem]">
            Stay organized. Get things done
          </p>
        </div>

        <button
          onClick={handleToggleTheme}
          className="flex size-[4.4rem] shrink-0 cursor-pointer items-center justify-center rounded-2xl border-2 border-border"
        >
          {toggleTheme ? (
            <MoonIcon className="size-[2.2rem]" />
          ) : (
            <SunIcon className="size-[2.2rem]" />
          )}
        </button>
      </div>
    </header>
  );
}

export default Header;
