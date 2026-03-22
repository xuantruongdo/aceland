import Image from "next/image";

type BannerProps = {
  image: string;
  title: string;
  position?: "center" | "left" | "right";
};

export default function Banner({
  image,
  title,
  position = "left",
}: BannerProps) {
  const positionClasses = {
    center: `
      bottom-5 left-1/2 -translate-x-1/2 text-center
      md:bottom-16 md:left-1/2 md:-translate-x-1/2 md:text-center
    `,
    left: `
      bottom-5 left-1/2 -translate-x-1/2 text-center
      md:bottom-16 md:left-16 md:translate-x-0 md:text-left
    `,
    right: `
      bottom-5 left-1/2 -translate-x-1/2 text-center
      md:bottom-16 md:right-16 md:left-auto md:translate-x-0 md:text-right
    `,
  };

  return (
    <div className="relative w-full h-screen">
      <Image src={image} alt={title} fill className="object-cover" priority />

      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div
        className={`
          absolute z-10
          w-[calc(100%-40px)] px-6 py-4
          bg-black/40 backdrop-blur-md rounded-lg
          md:w-auto md:px-0 md:py-0 md:bg-transparent md:backdrop-blur-none
          ${positionClasses[position]}
        `}
      >
        <h1 className="text-white text-xl md:text-3xl lg:text-[72px] font-light tracking-[0.05em] font-crimson uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
}
