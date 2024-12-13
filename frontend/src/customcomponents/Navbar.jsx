import React from "react";
import { Button } from "../components/ui/button";
import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-[15%] w-[100%] bg-transparent flex items-center justify-between">
      <div className="h-[100%] w-[12%] flex flex-col items-center justify-center">
        <img className="w-[40%] " src={Logo} alt="" />
        <h1 className="text-white font-">ElevateU</h1>
      </div>
      <div className="h-[100%] w-[35%] flex items-center justify-evenly">
        <Button className="p-[2%] hover:bg-white hover:text-black transition-all duration-500">
          About Us
        </Button>
        <Button className="p-[2%] hover:bg-white hover:text-black transition-all duration-500">
          Contact US
        </Button>
        <Button onClick={()=>navigate("/register")} className="bg-white hover:bg-black hover:text-white transition-all duration-500 hover:border-[2px] hover:border-white text-black p-[4%]">
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
