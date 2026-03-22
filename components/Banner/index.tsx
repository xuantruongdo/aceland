import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src={"/images/banner-2.jpg"}
        alt={"Banner"}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div
        className="
          absolute z-10

          /* MOBILE */
          bottom-5 left-1/2 -translate-x-1/2
          w-[calc(100%-40px)]
          text-center px-6 py-4
          bg-black/40 backdrop-blur-md rounded-lg

          /* DESKTOP */
          md:bottom-16 md:left-16 md:translate-x-0
          md:w-auto md:text-left md:px-0 md:py-0
          md:bg-transparent md:backdrop-blur-none
        "
      >
        <h1 className="text-white text-xl md:text-3xl lg:text-[72px] font-light tracking-[0.05em] font-crimson uppercase">
          GIỚI THIỆU CÔNG TY
        </h1>
      </div>
    </div>
  );
}
