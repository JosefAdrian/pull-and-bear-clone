export function ClotheCard({ children, img, alt, href }) {
  return (
    <a
      href={href}
      className="h-[457px] flex flex-col transition-all hover:shadow-md p-2
      rounded-lg hover:scale-105 hover:bg-white-400"
    >
      <img src={img} alt={alt} className="object-cover h-full rounded-lg" />
      <h4 className=" flex justify-center text-xl font-medium">{children}</h4>
    </a>
  );
}
