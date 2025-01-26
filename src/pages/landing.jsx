import { Button } from "@/Components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="py-10">
      <p className="font-mono text-lg flex justify-center">Need a fast loan:</p>
      <h1 className="font-mono text-2xl font-extrabold flex justify-center">
        Get approved within 24 hours!
      </h1>
      <p className="font-mono flex justify-center">
        No collateral, no tedious processing. just fast cash by SMIT.
      </p>
      <div className="flex justify-center py-5">
        <Link to={"/applyForLoan"}>
          <Button className="bg-black text-white">Get fast loan</Button>
        </Link>
      </div>
      <div className="w-11/12 mx-auto py-5 ">
        <img
          src="/src/assets/hero2.jpeg"
          alt=""
          className="w-full h-120 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Landing;
