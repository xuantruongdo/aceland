import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

interface PaginationProps {
  current: number;
  total: number;
  onChange: (page: number) => void;
}

const Pagination = ({ current, total, onChange }: PaginationProps) => {
  if (total <= 1) return null;

  const pages: (number | "...")[] = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 3) pages.push("...");
    for (
      let i = Math.max(2, current - 1);
      i <= Math.min(total - 1, current + 1);
      i++
    )
      pages.push(i);
    if (current < total - 2) pages.push("...");
    pages.push(total);
  }

  const NavBtn = ({
    children,
    onClick,
    disabled,
  }: {
    children: React.ReactNode;
    onClick: () => void;
    disabled: boolean;
  }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors
        ${disabled ? "text-gray-300 cursor-not-allowed" : "text-gray-500 hover:bg-gray-200 cursor-pointer"}`}
    >
      {children}
    </button>
  );

  return (
    <div className="flex items-center justify-center gap-1 py-8">
      <NavBtn onClick={() => onChange(1)} disabled={current === 1}>
        <ChevronsLeft size={15} />
      </NavBtn>
      <NavBtn onClick={() => onChange(current - 1)} disabled={current === 1}>
        <ChevronLeft size={15} />
      </NavBtn>

      {pages.map((p, i) =>
        p === "..." ? (
          <span
            key={`e${i}`}
            className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm select-none"
          >
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onChange(p as number)}
            className={`w-9 h-9 flex items-center justify-center rounded-full text-sm transition-colors cursor-pointer
              ${
                p === current
                  ? "bg-[#1a6fcc] text-white font-medium"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
          >
            {p}
          </button>
        ),
      )}

      <NavBtn
        onClick={() => onChange(current + 1)}
        disabled={current === total}
      >
        <ChevronRight size={15} />
      </NavBtn>
      <NavBtn onClick={() => onChange(total)} disabled={current === total}>
        <ChevronsRight size={15} />
      </NavBtn>
    </div>
  );
};

export default Pagination;
