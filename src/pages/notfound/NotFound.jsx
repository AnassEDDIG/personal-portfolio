import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="grid grid-cols-2 items-center p-6">
      <div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-(--accent-primary) via-(--accent-secondary) to-white">
          404: Coordinate Not Found
        </h1>
        <p className="mt-3 text-(--text-secondary) leading-relaxed max-w-xl">
          Navigation systems show no trace of this coordinate. The page you're
          trying to reach appears to be outside our known universe.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-center md:justify-start">
          <Link to="/" className="inline-block">
            <button className="relative cursor-pointer px-5 py-2 flex items-center gap-2 rounded-md bg-(--bg-secondary) font-medium shadow-lg group duration-300">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-(--accent-tertiary) rounded-xs group-hover:w-8 group-hover:h-8 duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-(--accent-tertiary) rounded-xs group-hover:w-8 group-hover:h-8 duration-300" />
              <IoArrowBack /> Back to base
            </button>
          </Link>

          <a
            href="#"
            className="inline-block text-sm text-(--text-tertiary) hover:text-(--text-primary)"
          >
            View sitemap
          </a>
        </div>

        <p className="mt-4 text-xs text-(--text-tertiary)">
          Tip: try searching from the homepage — sometimes routes get renamed.
        </p>
      </div>

      <div className="flex justify-center">
        <DotLottieReact
          src="https://lottie.host/f6904ff0-5c2f-4eff-babb-23cb27939a07/C6Qx2q5Uc5.lottie"
          loop
          autoplay
          className="max-w-md"
        />
      </div>
    </section>
  );
};
