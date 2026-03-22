interface RadioOptionProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const RadioOption = ({ label, isActive, onClick }: RadioOptionProps) => {
  return (
    <label
      className={"flex items-center gap-2 cursor-pointer"}
      onClick={onClick}
    >
      <span
        className={`w-4 h-4 rounded-full border flex items-center justify-center cursor-pointer shrink-0 ${
          isActive ? "border-blue-700" : "border-gray-400"
        }`}
      >
        {isActive && <span className="w-2 h-2 rounded-full bg-blue-700" />}
      </span>
      <span className="text-sm tracking-[0.1em] text-gray-600 uppercase">
        {label}
      </span>
    </label>
  );
};

export default RadioOption;
