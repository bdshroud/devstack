import footerImg from "../assets/logo-text.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-gray-100 px-4 py-12 sm:py-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">

        {/* Brand */}
        <div className="md:col-span-2 lg:col-span-1">
          <img
            className="mb-5 w-[150px]"
            src={footerImg}
            alt="Dev Stack"
          />

          <p className="mb-5 max-w-[400px] text-sm leading-6 text-gray-500">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>

          <div className="mb-8 flex gap-4 text-sm">
            <a
              href="#"
              className="text-gray-500 transition hover:text-[#C1239B]"
            >
              Github
            </a>

            <a
              href="#"
              className="text-gray-500 transition hover:text-[#C1239B]"
            >
              X
            </a>

            <a
              href="#"
              className="text-gray-500 transition hover:text-[#C1239B]"
            >
              Linkedin
            </a>
          </div>

          <p className="text-sm text-gray-500">
            &copy; {year} Dev Stack. All rights reserved.
          </p>
        </div>

        {/* Product */}
        <div>
          <h2 className="mb-4 text-base font-semibold text-[#111827]">
            Product
          </h2>

          <div className="flex flex-col gap-3 text-sm text-gray-500">
            <a href="#home" className="transition hover:text-[#C1239B]">
              Home
            </a>
            <a
              href="#technologies"
              className="transition hover:text-[#C1239B]"
            >
              Technologies
            </a>
            <a href="#" className="transition hover:text-[#C1239B]">
              Projects
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="mb-4 text-base font-semibold text-[#111827]">
            Company
          </h2>

          <div className="flex flex-col gap-3 text-sm text-gray-500">
            <a href="#" className="transition hover:text-[#C1239B]">
              About
            </a>
            <a href="#" className="transition hover:text-[#C1239B]">
              Contact
            </a>
            <a href="#" className="transition hover:text-[#C1239B]">
              Careers
            </a>
          </div>
        </div>

        {/* Legal */}
        <div>
          <h2 className="mb-4 text-base font-semibold text-[#111827]">
            Legal
          </h2>

          <div className="flex flex-col gap-3 text-sm text-gray-500">
            <a href="#" className="transition hover:text-[#C1239B]">
              Privacy Policy
            </a>
            <a href="#" className="transition hover:text-[#C1239B]">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;