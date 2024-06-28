// import BugCard from "@/BugCard";
import React from "react";
import BugCardU from "../components/BugCardU";

const getBugs = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/bugs/`, {
      method: "GET",
      cache: "no-cache",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get Bugs ", error);
  }
};

export default async function Page() {
  const { bugs } = await getBugs();

  const uniqueCategories = [...new Set(bugs?.map(({ category }) => category))];

  return (
    <>
      <h3 className="text-center"> List Of Bugs displayed Here </h3>
      <div className="p-5">
        <div>
          {bugs &&
            uniqueCategories?.map((uniqueCategory, categoryIndex) => (
              <div key={categoryIndex} className="mb-4">
                <h2>{uniqueCategory}</h2>
                <div className="lg:grid grid-cols-2 xl:grid-cols-4">
            {bugs
              .filter((bug) => bug.category === uniqueCategory)
              .map((filteredBug, _index) => (
                // <BugCard id={_index} key={_index} bug={filteredBug} />
                <BugCardU id={_index} key={_index} bug={filteredBug} />
              ))}
          </div>
        </div>
            ))}
          
          </div>
      </div>
    </>
  );
}
