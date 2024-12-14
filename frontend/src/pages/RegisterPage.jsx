import React from "react";
import Logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";
import Footer from "../customcomponents/Footer";
const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-c1 to-c2">
          <div className="h-[100vh] bg-white shadow-md rounded-lg flex max-w-4xl w-full overflow-hidden">
            <div className="bg-slate-950 text-white p-12 w-1/2 flex flex-col items-center justify-center">
              <img className="w-[40%] m-[20px]" src={Logo} alt="" />
              <h1 className="text-4xl font-bold mb-4">Welcome to</h1>
              <h2 className="text-5xl font-bold tracking-wider mb-6">ElevateU</h2>
              <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ad voluptatibus provident, enim est repellendus velit harum magni eos nulla esse, fuga quidem molestias, consequatur accusantium perspiciatis! Nesciunt, quia expedita!
              </p>
            </div>
    
            <div className="p-12 w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-slate-950 mb-6">
                Register to ElevateU
              </h2>
    
              <div className="flex space-x-4 mb-6">
                <button className="bg-gray-100 flex items-center justify-center px-4 py-2 rounded-md w-1/2 hover:bg-gray-200">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
                    alt="Facebook"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Facebook
                </button>
                <button className="bg-gray-100 flex items-center justify-center px-4 py-2 rounded-md w-1/2 hover:bg-gray-200">
                  <img
                    src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Continue with Google
                </button>
              </div>
    
              <div className="text-center mb-6">OR</div>
    
              <form>
              <input
                  type="username"
                  placeholder="Username"
                  className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-950"
                />
                <button
                  type="submit"
                  className="w-full bg-slate-950 text-white p-3 rounded-md hover:bg-slate-700"
                  onClick={() => navigate("/home")}
                >
                  CREATE ACCOUNT
                </button>
              </form>
    
              <p className="text-sm text-center mt-4">
                Already Have an Account?,{' '}
                <a href="/login" className="text-blue-500 font-semibold">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
          <Footer/>
          </>
  );
};

export default RegisterPage;
