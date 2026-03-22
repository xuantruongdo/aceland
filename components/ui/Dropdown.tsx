import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface DropdownProps {
  placeholder: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  disabled?: boolean;
}

const Dropdown = ({
  placeholder,
  options,
  value,
  onChange,
  disabled,
}: DropdownProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = options.find((o) => o.value === value);

  return (
    <div ref={ref} className="relative flex-1 min-w-[180px]">
      <button
        onClick={() => !disabled && setOpen((p) => !p)}
        disabled={disabled}
        className={`w-full flex items-center justify-between px-4 py-3 border border-gray-600 text-sm tracking-wide transition-colors
          ${disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer hover:border-gray-400"}
          ${open ? "border-gray-300" : ""} bg-[#3a3a3a] text-gray-200`}
      >
        <span className={selected ? "text-white" : "text-gray-400"}>
          {selected ? selected.label : placeholder}
        </span>
        {open ? (
          <ChevronUp size={15} className="text-gray-400" />
        ) : (
          <ChevronDown size={15} className="text-gray-400" />
        )}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 z-50 bg-[#2a2a2a] border border-gray-600 shadow-2xl">
          {value && (
            <div
              onClick={() => {
                onChange("");
                setOpen(false);
              }}
              className="px-4 py-3 text-xs text-gray-500 hover:text-gray-300 cursor-pointer border-b border-gray-700 hover:bg-[#333]"
            >
              Tất cả
            </div>
          )}
          {options.map((opt) => (
            <div
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`px-4 py-3 text-sm cursor-pointer hover:bg-[#444] transition-colors
                ${value === opt.value ? "text-white bg-[#444]" : "text-gray-300"}`}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
