import { useState } from "react";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="relative flex min-h-[72px] items-center justify-between gap-4 px-4 py-4 sm:container sm:mx-auto sm:max-w-[1200px]">

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-xl sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          className="sm:static absolute left-1/2 -translate-x-1/2 sm:transform-none"
        >
          <img
            src={Logo}
            alt="Dev Stack"
            className="w-[140px]"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-5 sm:flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex gap-1 sm:gap-2">
          <button className="btn rounded-full bg-white text-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 sm:text-base">
            Sign In
          </button>

          <button  className="btn rounded-full bg-[#D91B7E] text-xs text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 sm:text-base">
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
                className="block rounded-lg px-4 py-3 hover:bg-gray-50"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#technologies"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 hover:bg-gray-50"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 hover:bg-gray-50"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 hover:bg-gray-50"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 hover:bg-gray-50"
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