import { use, useState } from "react";
import type { TechnologyType } from "../../type/type";
import TechnologyCard from "./TechnologyCard";
import YourStuck from "./YourStuck";

interface TechnologyProps {
  technologyPromise: Promise<TechnologyType[]>;
}

const Technology = ({ technologyPromise }: TechnologyProps) => {
  const technology = use(technologyPromise);

  const [addStuck, setAddStuck] = useState<TechnologyType[]>([]);

  return (
    <section
      id="technologies"
      className="px-4 py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1200px]">

        {/* Section Heading */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#111827]">
            Explore the{" "}
            <span className="bg-linear-30 from-[#FD5526] via-[#C1239B] to-[#8537E3] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {technology.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                addStuck={addStuck}
                setAddStuck={setAddStuck}
              />
            ))}
          </div>

          {/* Your Stack */}
          <aside className="w-full lg:col-span-1">
            <div className="card w-full bg-base-100 p-6 shadow-sm">
              <YourStuck
                addStuck={addStuck}
                setAddStuck={setAddStuck}
              />
            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default Technology;