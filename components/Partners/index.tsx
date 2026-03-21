const partners = [
  { name: "Masterise", logo: "/images/masterise.png" },
  { name: "Tanlong", logo: "/images/tanlong.png" },
  { name: "UDIC", logo: "/images/udic.jpg" },
  { name: "ACD", logo: "/images/acd.jpg" },
];

export default function Partners() {
  return (
    <div className="w-full bg-white pt-12">
      <div className="flex flex-col items-center mb-10">
        <h2
          className="text-xl md:text-2xl font-light tracking-[0.35em] text-gray-800 uppercase pb-1"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Đối Tác
        </h2>
        <div className="h-px w-24 bg-gray-400 mt-1" />
      </div>

      <div className="bg-gray-100 px-8 md:px-16 lg:px-24 py-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-9 w-auto object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
