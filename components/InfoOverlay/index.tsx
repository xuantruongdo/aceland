import Image from "next/image";
import { Phone, MapPin, LucideIcon } from "lucide-react";

export enum BlockType {
  Paragraph = "paragraph",
  List = "list",
  Contact = "contact",
}

export enum ContactIcon {
  Phone = "phone",
  Map = "map",
}

export enum OverlayPosition {
  TopLeft = "top-left",
  TopRight = "top-right",
  Center = "center",
}

type ParagraphBlock = {
  type: BlockType.Paragraph;
  text: string;
};

type ListBlock = {
  type: BlockType.List;
  items: string[];
};

type ContactItem = {
  icon: ContactIcon;
  text: string;
};

type ContactRow = {
  label: string;
  items: ContactItem[];
};

type ContactBlock = {
  type: BlockType.Contact;
  rows: ContactRow[];
};

export type ContentBlock = ParagraphBlock | ListBlock | ContactBlock;

interface InfoOverlayProps {
  title: string;
  content: ContentBlock[];
  image: string;
  imageAlt?: string;
  overlayPosition?: OverlayPosition;
}

const ICON_MAP: Record<ContactIcon, LucideIcon> = {
  [ContactIcon.Phone]: Phone,
  [ContactIcon.Map]: MapPin,
};

const OVERLAY_POSITION_CLASSES: Record<OverlayPosition, string> = {
  [OverlayPosition.Center]:
    "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[58%] max-w-2xl",
  [OverlayPosition.TopLeft]:
    "bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm " +
    "md:bottom-auto md:top-8 md:left-16 lg:left-20 md:right-auto md:translate-x-0 md:w-auto md:max-w-sm",
  [OverlayPosition.TopRight]:
    "bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-sm " +
    "md:bottom-auto md:top-8 md:right-16 lg:right-20 md:left-auto md:translate-x-0 md:w-auto md:max-w-sm",
};

function ContactIconNode({ icon }: { icon: ContactIcon }) {
  const Icon = ICON_MAP[icon];
  return <Icon size={14} className="shrink-0 mt-0.5 text-white/80" />;
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case BlockType.Paragraph:
      return (
        <p
          key={index}
          className="text-xs md:text-sm leading-[1.85] text-white/90"
        >
          {block.text}
        </p>
      );

    case BlockType.List:
      return (
        <ul key={index} className="space-y-2">
          {block.items.map((item, j) => (
            <li
              key={j}
              className="text-xs md:text-sm leading-[1.85] text-white/90"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case BlockType.Contact:
      return (
        <div key={index} className="space-y-5">
          {block.rows.map((row, j) => (
            <div key={j} className="flex items-start gap-8 md:gap-12">
              <div className="shrink-0 w-24 md:w-36 pt-0.5">
                <span className="text-[9px] md:text-[11px] tracking-[0.15em] font-bold text-white uppercase leading-tight">
                  {row.label}
                </span>
              </div>
              <div className="flex-1 space-y-2">
                {row.items.map((item, k) => (
                  <div key={k} className="flex items-start gap-2">
                    <ContactIconNode icon={item.icon} />
                    <span className="text-xs md:text-sm leading-[1.7] text-white/90">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
  }
}

export default function InfoOverlay({
  title,
  content,
  image,
  imageAlt = "",
  overlayPosition = OverlayPosition.TopLeft,
}: InfoOverlayProps) {
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
        className={`absolute backdrop-blur-sm bg-white/20 border border-white/30 px-8 py-7 space-y-5 ${OVERLAY_POSITION_CLASSES[overlayPosition]}`}
      >
        <h2 className="font-crimson text-base md:text-[36px] font-light tracking-[0.05em] text-center text-white uppercase">
          {title}
        </h2>

        {content.map(renderBlock)}
      </div>
    </div>
  );
}
