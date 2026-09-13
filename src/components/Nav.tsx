import { useState } from "react";

import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      {/* Main Navbar */}
      <div className="flex min-h-[72px] items-center justify-between px-4 py-4 sm:container sm:mx-auto sm:max-w-[1200px]">

        {/* Left Side: Hamburger + Logo + Desktop Menu */}
        <div className="flex items-center">

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-xl transition-all duration-200 hover:bg-gray-50 hover:text-[#C1239B] sm:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="shrink-0"
          >
            <img
              src={Logo}
              alt="Dev Stack"
              className="w-[140px]"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="ml-8 hidden items-center gap-4 sm:flex">
            <li>
              <a
                href="#home"
                className="inline-block text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#C1239B]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                className="inline-block text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#C1239B]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-block text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#C1239B]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-block text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#C1239B]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="inline-block text-gray-500 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#C1239B]"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex gap-1 sm:gap-2">
          <button
            type="button"
            className="btn rounded-full bg-white text-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 sm:text-base"
          >
            Sign In
          </button>

          <button
            type="button"
            className="btn rounded-full bg-[#D91B7E] text-xs text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 sm:text-base"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 shadow-sm sm:hidden">
          <ul className="flex flex-col gap-1">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-[#C1239B]"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-[#C1239B]"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-[#C1239B]"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-[#C1239B]"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-[#C1239B]"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;