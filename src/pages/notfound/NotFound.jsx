import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="max-w-2/3 mx-auto">
      <div className="text-center p-6">
        <h1 className="text-5xl text-balance md:text-6xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-(--accent-primary) via-(--accent-secondary) to-white">
          404: Coordinate Not Found
        </h1>
        <p className="mt-3 text-(--text-secondary) leading-relaxed text-balance">
          Navigation systems show no trace of this coordinate. The page you're
          trying to reach appears to be outside our known universe.
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
          <Link to="/" className="inline-block">
            <button className="relative cursor-pointer px-5 py-2 flex items-center gap-2 rounded-md bg-(--bg-tertiary) font-medium shadow-lg group duration-300">
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
    </section>
  );
};
