import bannerImg from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="px-4">
      <div className="mx-auto grid min-h-[560px] max-w-[1200px] grid-cols-1 items-center gap-10 py-16 md:grid-cols-2 md:gap-8 lg:py-20">

        {/* Hero Content */}
        <div className="text-center md:text-left">

          <h1 className="text-[36px] font-bold leading-[1.15] tracking-tight text-[#111827] sm:text-[42px] lg:text-[40px]">
            Build Your Ideal
            <br />

            <span className="bg-linear-30 from-[#FD5526] via-[#C1239B] to-[#8537E3] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[500px] text-[14px] leading-6 text-[#64748B] md:mx-0">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">

            <button
              type="button"
              className="rounded-xl bg-linear-100 from-[#F87020] to-[#ED4B91] px-5 py-3 text-[12px] font-semibold text-white transition hover:-translate-y-0.5"
            >
              Explore Technologies
            </button>

            <button
              type="button"
              className="rounded-xl border border-[#E2E8F0] bg-white px-7 py-3 text-[12px] font-semibold text-[#475569] transition hover:-translate-y-0.5 hover:border-[#C1239B]"
            >
              Learn More
            </button>

          </div>
        </div>

        {/* Banner Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Dev Stack illustration"
            className="w-full max-w-[420px] object-contain sm:max-w-[460px] md:max-w-[400px] lg:max-w-[460px]"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;