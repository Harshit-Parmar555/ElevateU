import React from "react";
import Logo from "../assets/logo.png";
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
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
  );
};

export default Footer;
