import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../type/type";
import { Bounce, toast } from "react-toastify";
import { ImCross } from "react-icons/im";

interface YourStuckProps {
  addStuck: TechnologyType[];
  setAddStuck: Dispatch<SetStateAction<TechnologyType[]>>;
}

const YourStuck = ({
  addStuck,
  setAddStuck,
}: YourStuckProps) => {

  // Remove one technology
  const handleRemoveStuck = (stuck: TechnologyType) => {
    const restStuck = addStuck.filter(
      (selectedStuck) => selectedStuck.id !== stuck.id
    );

    setAddStuck(restStuck);

    toast.success(`${stuck.name} removed from your stack.`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setAddStuck([]);

    toast.info("All technologies removed from your stack.", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });
  };

  const selectedCount = addStuck.length;

  return (
    <div className="w-full">

      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-[#111827] sm:text-2xl">
          Your Stack
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          {selectedCount === 0
            ? "No technologies selected yet."
            : `${selectedCount} ${
                selectedCount === 1 ? "Technology" : "Technologies"
              } Selected`}
        </p>
      </div>

      {/* Divider */}
      <div className="my-5 h-px w-full bg-gray-200" />

      {/* Empty State */}
      {selectedCount === 0 && (
        <div className="rounded-xl border border-gray-200 p-5 text-center">
          <p className="text-sm text-gray-400">
            Your stack is empty.
          </p>
        </div>
      )}

      {/* Selected Technologies */}
      {selectedCount > 0 && (
        <div className="flex flex-col gap-3">

          {addStuck.map((stuck) => (
            <div
              key={stuck.id}
              className="flex w-full items-center gap-3 rounded-xl border border-gray-200 p-2.5"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-50">
                <img
                  className="h-7 w-7 object-contain"
                  src={stuck.icon}
                  alt={`${stuck.name} logo`}
                />
              </div>

              {/* Information */}
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-sm font-semibold text-[#111827]">
                  {stuck.name}
                </h3>

                <p className="mt-0.5 text-xs text-gray-400">
                  {stuck.category}
                </p>
              </div>

              {/* Remove */}
              <button
                type="button"
                aria-label={`Remove ${stuck.name}`}
                onClick={() => handleRemoveStuck(stuck)}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-600"
              >
                <ImCross size={10} />
              </button>
            </div>
          ))}

        </div>
      )}

      {/* Remove All */}
      {selectedCount > 0 && (
        <button
          type="button"
          onClick={handleRemoveAll}
          className="mt-5 h-10 w-full rounded-xl border border-red-200 bg-white text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}

    </div>
  );
};

export default YourStuck;