import React from "react";
import error404 from "../assets/error404.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Error404Page = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-slate-950 flex items-center justify-center">
        <div className="h-[90%] w-[70%] flex flex-col items-center">
          <img className="h-[60%]" src={error404} alt="" />
          <h1 className="text-center text-white text-[25px]">
            Oops !! Page Not Found at Your Given Route
          </h1>
          <Button onClick={()=>navigate("/register")} className="mt-[5%] p-[3%]">Back To Home</Button>
        </div>
      </div>
    </>
  );
};

export default Error404Page;
