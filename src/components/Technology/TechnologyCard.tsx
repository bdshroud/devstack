import { type Dispatch, type SetStateAction } from "react";
import star from "/star.svg";
import type { TechnologyType } from "../../type/type";
import { Bounce, toast } from "react-toastify";

interface TechnologyCardProps {
  tech: TechnologyType;
  addStuck: TechnologyType[];
  setAddStuck: Dispatch<SetStateAction<TechnologyType[]>>;
}

const TechnologyCard = ({
  tech,
  addStuck,
  setAddStuck,
}: TechnologyCardProps) => {
  const isSelected = addStuck.some(
    (item) => item.id === tech.id
  );

  const handleSelectedCard = () => {
    // Prevent duplicate technology
    if (isSelected) {
      toast.warning("This technology is already in your stack.", {
        position: "bottom-right",
        autoClose: 1500,
        theme: "light",
        transition: Bounce,
      });

      return;
    }

    // Add technology to stack
    setAddStuck((previous) => [...previous, tech]);

    toast.success(`${tech.name} added to your stack.`, {
      position: "bottom-right",
      autoClose: 1500,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div
      className={`flex h-full w-full flex-col rounded-xl bg-base-100 p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${
        isSelected
          ? "border-2 border-[#C1239B]"
          : "border border-transparent"
      }`}
    >
      {/* Icon + Badge */}
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-50">
          <img
            src={tech.icon}
            alt={`${tech.name} logo`}
            className="h-8 w-8 object-contain"
          />
        </div>

        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
          {tech.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mt-5 text-lg font-bold text-[#111827]">
        {tech.name}
      </h2>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
        {tech.description}
      </p>

      {/* Category */}
      <p className="mt-4 text-xs font-medium text-gray-400">
        Category:{" "}
        <span className="text-gray-600">
          {tech.category}
        </span>
      </p>

      {/* Difficulty + Rating */}
      <div className="mt-3 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          Difficulty:{" "}
          <span className="font-medium text-gray-700">
            {tech.difficulty}
          </span>
        </span>

        <div className="flex items-center gap-1">
          <img
            src={star}
            alt="Rating"
            className="h-4 w-4"
          />

          <span className="text-sm font-medium text-gray-700">
            {tech.rating}
          </span>
        </div>
      </div>

      {/* Add to Stack Button */}
      <button
        type="button"
        onClick={handleSelectedCard}
        disabled={isSelected}
        className={`mt-5 flex h-10 w-full items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 ${
          isSelected
            ? "cursor-not-allowed bg-[#C9CCD5] text-white"
            : "bg-[#0A0F1D] text-white hover:-translate-y-0.5 hover:bg-[#171d2c] hover:shadow-md"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
