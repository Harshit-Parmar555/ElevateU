import React from "react";
import Navbar from "../customcomponents/Navbar";
import Pic1 from "../assets/landingpage1.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import Logo from "../assets/logo.png"
const LandingPage = () => {
  const navigate = useNavigate();
  const categories = [
    { title: 'UPSC CSE - GS', icon: '🏛️' },
    { title: 'IIT JEE', icon: '⚗️' },
    { title: 'NEET UG', icon: '⚕️' },
    { title: 'Bank exams', icon: '💰' },
    { title: 'SSC JE & state AE exams', icon: '📋' },
    { title: 'CAT & other MBA entrance tests', icon: '📝' },
    { title: 'CBSE class 12', icon: '📖' },
    { title: 'CA Intermediate', icon: '🧮' },
  ];
  const testimonials = [
    {
      name: 'Anmol Rathore',
      exam: 'UPSC CSE 2023 AIR 7',
      category: 'UPSC',
      feedback:
        'I used to regularly follow the YouTube videos, prelims booster videos, and specially editorial discussions from where I made important pointers. I also watched some history videos like Buddhism, Jainism as the topics were explained very clearly... all these were very helpful.',
    },
    {
      name: 'Raja Majhi',
      exam: 'GATE 2024 AIR 1',
      category: 'GATE',
      feedback:
        'I am Raja Majhi, and I am thrilled to share that I have secured All India Rank 1 (AIR 1) in the GATE 2024 examination in ECE. From the very beginning, Physics Wallah stood out for its structured and comprehensive curriculum.',
    },
    {
      name: 'Amit Kumar Mandal',
      exam: 'IBPS Topper',
      category: 'Banking',
      feedback:
        'ElevateU helped me in establishing the basics of every subject through which I was able to progress quickly and was also able to increase my speed and also maintaining accuracy.',
    },
  ];
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

      <div className="h-[85vh] w-[100vw] bg-slate-950">
        <div className="w-[100%] p-[20px] flex flex-col items-center justify-center">
          <h1 className="text-white text-[40px] font-bold">Exam Categories</h1>
          <p className="text-[18px] text-white">ElevateU prepare students for various exams. Scroll down to find one you are preparing for</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-[50px] shadow-white md:grid-cols-4 gap-6 hover:shadow-2xl transition duration-300">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 border rounded-lg shadow transform transition-transform hover:scale-105 hover:shadow-lg"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-lg text-white font-semibold">{category.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="h-[100vh] w-[100vw] bg-slate-950">
        <div className="w-[100%] p-[20px] flex flex-col items-center justify-center">
          <h1 className="text-white text-[40px] font-bold">Stories that inspire</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[50px] ">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, x: 30 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 hover:shadow-lg hover:border-t-8 hover:border-indigo-500 duration-300"
              >
                <p className="text-gray-700 mb-6">{testimonial.feedback}</p>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/9187/9187604.png'
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">
                  {testimonial.exam} | <span className="text-indigo-600">{testimonial.category}</span>
                </p>
              </motion.div>

            ))}
          </div>
        </div>
      </div>

      <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img className="w-[30%] " src={Logo} alt="" />
          <h2 className="text-white text-2xl mb-4">ElevateU</h2>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos repudiandae accusamus assumenda iusto libero vel quas excepturi dolor dicta dolorum.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-white">
              <FaFacebookF size={24} />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-2xl mb-4">Opening Hours</h2>
          <ul>
            {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
              <li key={day} className="mb-2">
                {day}: <span className="font-bold text-white">08:00 AM – 23:00 PM</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-white text-2xl mb-4">Contact Information</h2>
          <p className="mb-2">Lorem ipsum dolor sit amet.</p>
          <p className="mb-2">+91 XXXXXXXXXX</p>
          <p className="mb-2">
            <a href="#" className="hover:text-white">
              example@gmail.com
            </a>
          </p>
          <p>
            <a href="#" className="hover:text-white">
              abcd.com
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-white text-2xl mb-4">Newsletter</h2>
          <p className="mb-4">Beyond the distant hills, where the winds whisper in sorrow, lies a forgotten land</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Subscribe"
              className="flex-1 p-2 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 p-2 rounded-r-lg text-white flex items-center"
            >
              <span className="sr-only">Subscribe</span>✈️
            </button>
          </form>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>
          Copyright ©2024 All rights reserved | made with ❤️ by{' '}
          <span className="text-white font-semibold"> Team WebWeavers</span>
        </p>
      </div>
    </footer>
    </>
  );
};

export default LandingPage;
