import Link from "next/link";
import React from "react";

const HomeP = () => {
  return (
    <div>
      <div className="text-center py-2 pt-8">
        <h2>Access Denied !!! </h2>
        <h4 className="py-4">
          This is An Internal Portal, Only R&D Members can Access it{" "}
        </h4>
        <h5>
          If you are member of any of R&D Teams and still cannot access,
          <br /> contact Admin on admin@example.com{" "}
        </h5>
      </div>
      <div className=" text-center py-4 border">
        <h5 className=" py-2">
          If you want to access the portal as a Visitor, use the following
          Credentials :
        </h5>
        <ul className="  py-2 ">
          <li className="">
            <label>Username :</label>
            <input
              className="w-[200px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/10"
              type="text"
              defaultValue="test@gmail.com"
              readOnly
            />
          </li>

          <li className="">
            <label>Password :</label>
            <input
              className="w-[200px] border rounded border-gray-200 py-2 px-6 bg-zinc-100/10"
              type="text"
              defaultValue="test"
              readOnly
            />
          </li>
        </ul>
        <Link className="text-blue-600 hover:text-default-text" href="/login">Click Here to Login</Link>
      </div>
    </div>
  );
};

export default HomeP;
