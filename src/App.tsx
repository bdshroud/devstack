import { Suspense, useState } from "react";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Technology from "./components/Technology/Technology";
import type { TechnologyType } from "./type/type";
import Footer from "./components/Footer";

function App() {
  const technologyFetch = async (): Promise<TechnologyType[]> => {
    const res = await fetch("/data.json");

    if (!res.ok) {
      throw new Error("Failed to fetch technology data");
    }

    const data = await res.json();

    return data;
  };

  const [technologyPromise] = useState(() => technologyFetch());

  return (
    <>
      <Nav />

      <Banner />

      <Suspense
        fallback={
          <div className="flex min-h-[300px] items-center justify-center px-4">
            <p className="text-gray-500">Loading technologies...</p>
          </div>
        }
      >
        <Technology technologyPromise={technologyPromise} />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
