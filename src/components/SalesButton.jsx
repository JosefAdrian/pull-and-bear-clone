export const SalesButton = ({ children, href }) => {
  return (
    <>
      <a
        href={href}
        className="bg-black/30 rounded-lg hover:scale-125
        transition-all hover:bg-black/80 px-4 py-1 text-xl
        hover:shadow-lg focus:ring-2 ring-zinc-100
      "
      >
        {children}
      </a>
    </>
  );
};
