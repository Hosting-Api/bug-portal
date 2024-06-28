import React from "react";
import HomeP from "./components/HomeP";
// import NewUserDash from "./components/NewUserDash";

export default async function Home() {
  return (
    <div>
      <div className="px-16 py">
        <HomeP />
      </div>
      <div>
      <h5 className="text-center py-6 font-bold">Developed by, Vinit Patel </h5>

      </div>
    </div>
  );
}
