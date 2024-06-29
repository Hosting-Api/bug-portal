// src/app/edit/page.js
import React from "react";
import BugCard from "@/app/components/BugCard";
// import dynamic from "next/dynamic";
// const BugCardU = dynamic(() => import('../components/BugCardU'), {
//   ssr: false,
// })

const getBugs = async () => {
  try {
    const res = await fetch(`https://bug-portal.vercel.app/api/bugs/`, {
      method: "GET",
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    // Ensure the data is an array
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log("Failed to get Bugs", error);
    return []; // Return an empty array in case of error
  }
};

export default async function Page() {
  const bugs = await getBugs();

  // Ensure bugs is always an array
  if (!Array.isArray(bugs)) {
    console.error("Expected bugs to be an array, but got", typeof bugs);
    return (
      <div className="text-center">
        <h3>Failed to load bugs. Please try again later.</h3>
      </div>
    );
  }

  const uniqueCategories = [...new Set(bugs.map(({ category }) => category))];

  return (
    <>
      <h3 className="text-center">List Of Bugs displayed Here</h3>
      <div className="p-5">
        <div>
          {bugs.length > 0 &&
            uniqueCategories.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-4">
                <h2>{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                  {bugs
                    .filter((bug) => bug.category === uniqueCategory)
                    .map((filteredBug, _index) => (
                      <BugCard id={_index} key={_index} bug={filteredBug} />
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
