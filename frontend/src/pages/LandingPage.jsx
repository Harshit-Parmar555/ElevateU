import React from "react";
import Navbar from "../customcomponents/Navbar";
import Pic1 from "../assets/landingpage1.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-slate-950">
        <Navbar />
        <div className="h-[85%] w-[100%]  flex">
          <div className="w-[55%] h-[100%]  flex flex-col items-center justify-center">
            <h1 className="text-[60px]  w-[80%] ml-10  mt-[4%] text-white">
              Empowering Learning, Anytime, Anywhere
            </h1>
            <p className="text-[18px] w-[80%] ml-10  mt-[4%] text-white">
              ElevateU is designed to help learners discover their true
              capabilities by providing high-quality, accessible, and
              personalized educational resources. With a focus on skill
              enhancement and career growth, ElevateU empowers individuals to
              achieve their dreams and build a brighter future.
            </p>
            <Button
              onClick={() => navigate("/register")}
              className="text-[17px] p-7 mt-[4%]"
            >
              Elevate Now !
            </Button>
          </div>
          <div className="w-[45%] h-[100%] flex items-center justify-center">
            <img src={Pic1} alt="" className="w-[60%] " />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
