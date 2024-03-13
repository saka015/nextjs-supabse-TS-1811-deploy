"use client";
import { AiFillLike } from "react-icons/ai";
import { PiHandsClapping } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";
import { GiThink } from "react-icons/gi";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import { MdOutlineNoteAlt } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { MdFilterFrames } from "react-icons/md";

import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { FaGlobeAmericas } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import panda from "./panda.png";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { signOut } from "../auth-server-action/actions";

export default function Page() {
  useEffect(() => {
    document.title = `Generated Post - Creatorstool`;
  }, []);

  // const userLogout = () => {
  //   console.log("clicked logout");
  //   signOut();
  //   redirect("/");
  //   location.reload();
  // };

  const userLogout = () => {
  console.log("clicked logout");
   signOut(); // Wait for signOut to complete

  // Redirect using the recommended approach (avoid location.reload)
  window.location.replace("/"); // Replaces current history entry
};

  return (
    <div className="flex flex-col sm:flex-row p- h-screen w-full">
      <div className="sm:w-1/5 left ">
        <nav className="flex justify-between px-24 pt-4">
          <h1 className="font-bold text-black">Creatortools.ai</h1>
          <button
            onClick={userLogout}
            className="ml-12 sm:hidden p-2 rounded-sm hover:border-red-500 border font-light float-right text-red-500"
          >
            Logout
          </button>
        </nav>
        <h3 className="text-gray-500 text-sm font-semibold ml-6 mt-8">
          ALL CREATOR TOOLS
        </h3>
        <ul className="w-full flex flex-col bg text-sm px-4 gap-y-6 mt-3">
          <li className="text-gray-500 flex my-2  mr-2 p-2 rounded-md">
            <FaRegLightbulb className="mt-1 text-yellow-300 mx-1" />
            <p>Video Idea Generator</p>
          </li>
          <li className="text-gray-500 flex my-2  mr-2 p-2 rounded-md">
            <MdFilterFrames className="mt-1 text-green-500 mx-1" />
            <p>Free Audiogram Generator</p>
          </li>
          <li className="text-gray-500 flex my-2  mr- p-2 rounded-md">
            <MdOutlineNoteAlt className="mt-1 text-gray-400 mx-1" />
            <p>YT video to SEO Blog</p>
          </li>
          <li className="flex my-2 bg-gray-100 text-black font-semibold mr-2 p-2 rounded-md">
            <CiLinkedin className="mt-1 text-blue-600 mx-1" />
            <p>YT video to Linkedin Post</p>
          </li>
        </ul>
      </div>
      <div className="w-3/4 ">
        <nav className="mt-4">
          <button
            onClick={userLogout}
            className="hidden sm:flex p-2 rounded-sm hover:border-red-500 border font-light float-right text-red-500"
          >
            Logout
          </button>
        </nav>
        <main className="p-6 pt-20">
          <h3 className="ml-6">Results</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 p-6 gap-4">
            <div className="border p-3 rounded-md">
              <div className="bg-green-100 w-8 rounded-full p-1">
                <MdFilterFrames className="mt-1 text-green-500 mx-1" />
              </div>
              <h1 className="text-black text-xl sm:text-3xl my-3">
                UX review presentations
              </h1>
              <p className="text-gray-400 text-sm sm:text-normal ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                ipsum provident quidem rem. Exercitationem, culpa sit autem
                consequatur pariatur magnam! Dolore ipsum provident quidem rem.
                Exercitationem, culpa sit autem consequatur pariatur magnam!
              </p>
              <div className="flex flex-col sm:flex-row gap-x-3 mt-2">
                <p className="bg-gray-100   text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100    text-center  my-1 text-violet-500 rounded-full px-1">
                  #Research
                </p>
                <p className="bg-gray-100 1  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
              </div>
            </div>
            <div className="border p-3 rounded-md">
              <div className="bg-blue-100 w-8 rounded-full p-1">
                <FcGlobe className="mt-1 text-green-500 mx-1" />
              </div>
              <h1 className="text-black text-xl sm:text-3xl my-3">
                UX review presentations
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                ipsum provident quidem rem. Exercitationem, culpa sit autem
                consequatur pariatur magnam! Dolore ipsum provident quidem rem.
                Exercitationem, culpa sit autem consequatur pariatur magnam!
              </p>
              <div className="flex flex-col sm:flex-row  gap-x-3 mt-2">
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
              </div>
            </div>
            <div className="border p-3 rounded-md">
              <div className="bg-green-100 w-8 rounded-full p-1">
                <MdFilterFrames className="mt-1 text-green-500 mx-1" />
              </div>
              <h1 className="text-black text-xl sm:text-3xl my-3">
                UX review presentations
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                ipsum provident quidem rem. Exercitationem, culpa sit autem
                consequatur pariatur magnam! Dolore ipsum provident quidem rem.
                Exercitationem, culpa sit autem consequatur pariatur magnam!
              </p>
              <div className="flex flex-col sm:flex-row  gap-x-3 mt-2">
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
              </div>
            </div>
            <div className="border p-3 rounded-md">
              <div className="bg-green-100 w-8 rounded-full p-1">
                <MdFilterFrames className="mt-1 text-green-500 mx-1" />
              </div>
              <h1 className="text-black text-xl sm:text-3xl my-3">
                UX review presentations
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                ipsum provident quidem rem. Exercitationem, culpa sit autem
                consequatur pariatur magnam! Dolore ipsum provident quidem rem.
                Exercitationem, culpa sit autem consequatur pariatur magnam!
              </p>
              <div className="flex flex-col sm:flex-row  gap-x-3 mt-2">
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
              </div>
            </div>
            <div className="border p-3 rounded-md">
              <div className="bg-green-100 w-8 rounded-full p-1">
                <MdFilterFrames className="mt-1 text-green-500 mx-1" />
              </div>
              <h1 className="text-black text-3xl my-3">
                UX review presentations
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                ipsum provident quidem rem. Exercitationem, culpa sit autem
                consequatur pariatur magnam! Dolore ipsum provident quidem rem.
                Exercitationem, culpa sit autem consequatur pariatur magnam!
              </p>
              <div className="flex flex-col sm:flex-row  gap-x-3 mt-2">
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
              </div>
            </div>
            <div className="border p-3 rounded-md">
              <div className="bg-green-100 w-8 rounded-full p-1">
                <MdFilterFrames className="mt-1 text-green-500 mx-1" />
              </div>
              <h1 className="text-black text-xl sm:text-3xl my-3">
                UX review presentations
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
                ipsum provident quidem rem. Exercitationem, culpa sit autem
                consequatur pariatur magnam! Dolore ipsum provident quidem rem.
                Exercitationem, culpa sit autem consequatur pariatur magnam!
              </p>
              <div className="flex flex-col sm:flex-row  gap-x-3 mt-2">
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
                <p className="bg-gray-100  text-center  my-1 text-violet-500 rounded-full px-1">
                  #Design
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
