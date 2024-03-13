import { FaRegLightbulb } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import { MdOutlineNoteAlt } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { MdFilterFrames } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import Image from "next/image";

import main from "../assets/main.jpg.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between px-24 pt-8">
        <h1 className="font-bold text-black">Creatortools.ai</h1>
        <Link href="/auth-server-action">
          <button className="text-sm font-semibold border rounded-sm p-1 flex">
            <FaRegUser className="mt-1" />
            Log in
          </button>
        </Link>
      </nav>
      <main className="flex  flex-col items-center justify-between pt-16">
        <h1 className="px-2 border rounded-full flex font-light">
          <PiStarFourFill className="mt-1 mx-1" />
          All the top creators tools in one place
          <PiStarFourFill className="mt-1 mx-1" />
        </h1>
        <h1 className="text-5xl mx-72 text-center mt-6">
          <span className="text-pink-400 font-bold">Top Creator tools </span>for
          making those <strong>videos go viral </strong>🚀
          <h2 className="text-sm text-gray-400 font-medium mt-12 mx-24">
            We are ready to be your creator co-pilot. Generate ideas,SEO
            friendly blogs & Linkedin posts from videos,Audiograms
          </h2>
        </h1>
        <button className="rounded-sm text-white bg-pink-500 border border-pink-700 p-1 px-3 mt-10">
          Login and explore
        </button>
        <p className="text-pink-500 text-sm mt-1">scroll down to explore</p>
        <p className="text-pink-500 text-sm mt-8">All of our tools</p>
        <h1 className="text-xl mt-2">Click on any tool below and explore</h1>
        {/*  */}
        <div className="grid grid-cols-2 mt-8 gap-4 px-12">
          <div className="p-4 border border-gray-100 rounded-sm">
            <div className="w-8 p-1 border  rounded-sm">
              <FaRegLightbulb className="text-yellow-300 " />
            </div>
            <h3 className="font-bold mt-2">Video Idea Generator</h3>
            <p className="text-gray-400 text-sm font-thin">
              Generate 10 unique ideas for your next viral video.Forget the
              creative block
            </p>
          </div>
          <div className="p-4 border border-gray-100 rounded-sm">
            <div className="w-8 p-1 border  rounded-sm">
              <MdFilterFrames className="text-green-400" />
            </div>
            <h3 className="font-bold mt-2">Free Audiogram Generator</h3>
            <p className="text-gray-400 text-sm font-thin">
              Generate 10 unique ideas for your next viral video.Forget the
              creative block
            </p>
          </div>
          <div className="p-4 border border-gray-100 rounded-sm">
            <div className="w-8 p-1 border  rounded-sm">
              <MdOutlineNoteAlt className="text-gray-700" />
            </div>
            <h3 className="font-bold  mt-2 ">
              YouTube video to SEO Blog Post Generator.
            </h3>
            <p className="text-gray-400 text-sm font-thin">
              Generate 10 unique ideas for your next viral video.Forget the
              creative block
            </p>
          </div>
          <div className="p-4 border border-gray-100 rounded-sm">
            <div className="w-8 p-1 border  rounded-sm">
              <CiLinkedin className="text-blue-700 text-lg" />
            </div>
            <h3 className="font-bold mt-2">
              YouTube video to LinkedIn Post Generator
            </h3>
            <p className="text-gray-400 text-sm font-thin">
              Generate 10 unique ideas for your next viral video.Forget the
              creative block
            </p>
          </div>
        </div>

        <div className="bg-pink-100 rounded-sm flex justify-between  sm:w-[1020px] border-2 border-gray-200 px-12 p-16 mt-12">
          <div>
            <h1 className="text-3xl sm:w-[420px]">
              Want to know more about the tools?
            </h1>
            <p className="text-gray-400 text-sm ">
              Join the club and explore all the free tools...
            </p>
          </div>
          <div>
            <button className="rounded-sm text-white bg-pink-500 border border-pink-700 px-6 py-2 mt-10 hover:bg-pink-700">
              Subscribe
            </button>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 my-12 sm:px-12 flex sm:mx-40 justify-between scale-[0.8] sm:scale-[1]">
        <div className="text-gray-500">
          <p className="text-gray-500 mt-6 px-2">
            1811 Labs.All Right reserved
          </p>
        </div>
        <div className="bg-gray-100 my-6 flex gap-x-4 justify-between">
          <p className="text-gray-500">Privacy Policy</p>
          <p className="text-gray-500">Terms and conditions</p>
        </div>
      </footer>
    </>
  );
}
