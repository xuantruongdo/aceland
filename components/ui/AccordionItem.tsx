"use client";

import { useIsMobile } from "@/hooks/useMobile";
import { AccordionItem } from "@/types";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}

const Accordion = ({ item, isOpen, onToggle }: AccordionProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="mb-3">
      <div
        className={`transition-all duration-300 w-full ${
          isOpen ? "md:w-4/5" : "md:w-3/5"
        }`}
      >
        <button
          onClick={onToggle}
          className="
            w-full flex items-center gap-3
            pl-5 pr-6 py-4
            bg-gradient-to-r from-[#0175CD] to-[#001238]
            transition-all duration-200
            "
          style={{
            clipPath: isMobile
              ? "none"
              : "polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)",
          }}
        >
          <div className="ml-auto flex items-center gap-2">
            <span className="font-crimson text-[20px] md:text-[24px] font-light tracking-wide text-[#F2BC27] text-right">
              {item.title}
            </span>

            {isOpen ? (
              <ChevronUp size={18} className="shrink-0 text-[#F2BC27]" />
            ) : (
              <ChevronDown size={18} className="shrink-0 text-[#F2BC27]" />
            )}
          </div>
        </button>
      </div>

      <div
        className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}
        `}
            >
                <div
                className={`
            py-6 bg-white border-b border-gray-100 flex justify-center
            transition-all duration-300
            ${isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"}
            `}
        >
          <div className="w-full max-w-3xl px-6">{item.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
