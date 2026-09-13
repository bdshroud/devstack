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
  const isSelected = addStuck.some((item) => item.id === tech.id);

  const handleSelectedCard = () => {
    if (isSelected) {
      toast.warning("This technology is already in your stack.", {
        position: "bottom-right",
        autoClose: 1000,
        theme: "light",
        transition: Bounce,
      });

      return;
    }

    toast.success("Stack selected successfully.", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

    setAddStuck([...addStuck, tech]);
  };

  return (
    <div
      className={`flex h-full w-full flex-col rounded-xl bg-base-100 p-5 shadow-sm transition-all duration-200 hover:shadow-md ${
        isSelected ? "border-2 border-[#C1239B]" : "border border-transparent"
      }`}
    >
      {/* Top */}
      <div className="flex items-start justify-between gap-3">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="h-10 w-10 object-contain"
        />

        <span className="rounded-full bg-[#FFF7ED] px-3 py-1.5 text-xs font-semibold text-[#EF8044]">
          {tech.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-5 flex-1">
        <h2 className="text-lg font-bold text-[#111827]">
          {tech.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#64748B]">
          {tech.description}
        </p>
      </div>

      {/* Metadata */}
      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-gray-200 pt-4">
        <span className="rounded-full bg-[#F1F5F9] px-2.5 py-1 text-xs text-[#475569]">
          {tech.category}
        </span>

        <span className="text-xs text-[#64748B]">
          {tech.difficulty}
        </span>

        <span className="ml-auto flex items-center gap-1 text-xs font-medium text-[#475569]">
          {tech.rating}
          <img
            src={star}
            alt="Rating"
            className="h-4 w-4"
          />
        </span>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={handleSelectedCard}
        disabled={isSelected}
        className={`mt-5 flex h-10 w-full items-center justify-center rounded-xl text-sm font-semibold text-white transition-all ${
          isSelected
            ? "cursor-not-allowed bg-[#C9CCD5]"
            : "bg-[#0A0F1D] hover:bg-[#171d2c]"
        }`}
      >
        {isSelected ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;