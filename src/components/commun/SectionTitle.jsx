export const SectionTitle = ({ text }) => {
  return (
    <h1 className="w-fit lg:hidden exo-font text-2xl my-10 font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-(--accent-primary) via-(--accent-secondary) to-white">
      {text}
      <span className="text-(--accent-primary) text-3xl leading-1">.</span>{" "}
    </h1>
  );
};
