import React from "react";
import Navbar from "../customcomponents/Navbar";
import Pic1 from "../assets/landingpage1.png";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import Logo from "../assets/logo.png"
import Footer from "../customcomponents/Footer"
const LandingPage = () => {
  const navigate = useNavigate();
  const categories = [
    { title: 'HTML', icon: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png' },
    { title: 'CSS', icon: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
    { title: 'JavaScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
    { title: 'FireBase', icon: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png' },
    { title: 'Flutter', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimwgIvNnhm9GHeniw4d_nhAkoXPCg4ls0-A&s' },
    { title: 'C++', icon: 'https://cdn-icons-png.flaticon.com/512/6132/6132222.png' },
    { title: 'Java', icon: 'https://cdn-icons-png.flaticon.com/512/226/226777.png' },
    { title: 'Python', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png' },
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

      <div className="h-[90vh] w-[100vw] bg-slate-950">
        <div className="w-[100%] p-[20px] flex flex-col items-center justify-center">
          <h1 className="text-white text-[40px] font-bold">Courses Categories</h1>
          <p className="text-[18px] text-white">ElevateU prepare students for various exams. Scroll down to find one you are preparing for</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-[50px] shadow-white md:grid-cols-4 gap-6 hover:shadow-2xl transition duration-300">
            {categories.map((category, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 border rounded-lg shadow transform transition-transform hover:scale-105 hover:shadow-lg"
              >
                <div className="text-5xl mb-4 flex justify-center item-center" ><img className="w-[20%]" src={category.icon}></img></div>
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

      <div>
        <Footer/>
      </div>
    </>
  );
};

export default LandingPage;
