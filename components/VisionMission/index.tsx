import Image from "next/image";

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

interface VisionMissionProps {
  title: string;
  content: ContentBlock[];
  image: string;
  imageAlt?: string;
  overlayPosition?: "top-left" | "top-right";
}

export default function VisionMission({
  title,
  content,
  image,
  imageAlt = "",
  overlayPosition = "top-left",
}: VisionMissionProps) {
  const isRight = overlayPosition === "top-right";

  return (
    <div className="relative w-full aspect-[16/7] min-h-[420px] overflow-hidden">
      <Image
        src={image}
        alt={imageAlt || title}
        fill
        className="object-cover object-center"
        priority
      />

      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm md:top-8 md:bottom-auto md:translate-x-0
          ${
            isRight
              ? "md:right-16 lg:md:right-20 md:left-auto"
              : "md:left-16 lg:md:left-20 md:right-auto"
          }
          backdrop-blur-sm bg-white/20 border border-white/30 px-6 py-6 space-y-3
        `}
      >
        <h2 className="text-lg md:text-3xl font-light tracking-[0.15em] text-center text-white font-crimson uppercase">
          {title}
        </h2>

        {content.map((block, i) =>
          block.type === "paragraph" ? (
            <p
              key={i}
              className="text-xs md:text-sm leading-[1.85] text-white/90"
            >
              {block.text}
            </p>
          ) : (
            <ul key={i} className="space-y-2">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="text-xs md:text-sm leading-[1.85] text-white/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          ),
        )}
      </div>
    </div>
  );
}
