export const SectionTitle = ({ text }) => {
  return (
    <h1 className="lg:hidden exo-font text-2xl font-semibold mb-10">
      {text}
      <span className="text-(--accent-primary) text-3xl leading-1">.</span>{" "}
    </h1>
  );
};
