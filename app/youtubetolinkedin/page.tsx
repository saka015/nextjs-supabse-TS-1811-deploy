import { AiFillLike } from "react-icons/ai";
import { PiHandsClapping } from "react-icons/pi";
import { FcLike } from "react-icons/fc";
import { GiThink } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { FaGlobeAmericas } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import panda from "./panda.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="p-6">
      <nav className="flex justify-between px-24 pt-8">
        <h1 className="font-bold text-black">Creatortools.ai</h1>
      </nav>
      <main className="flex  mt-8 mx-6">
        <div className="flex-1 m-6">
          <h1 className="text-3xl font-semibold">
            YouTube video to LinkedIn Post Generator
          </h1>
          <p className="text-gray-400 mt-4">
            Generate 2 Unique SEO blog for your next viral video
          </p>

          <div className="mt-8 flex flex-col">
            <label className="font-semibold" htmlFor="first">
              Enter the youtube video link
            </label>

            <input
              className="focus:outline-blue-400 p-2 border border-gray-200 rounded-lg"
              type="text"
              placeholder="https://youtu.be/"
            />
            <br />

            <label className="font-semibold" htmlFor="first">
              Blog Tone
            </label>
            <input
              className="focus:outline-blue-400 p-2 border border-gray-200 rounded-lg"
              type="text"
              placeholder="Funny,Educational,Inspirational.."
            />
            <Link href="/generated_post">
              <button className="flex text-white bg-blue-700 border-2 border-blue-900 text-center p-3 rounded-lg w-full justify-center mt-4 hover:bg-blue-600">
                Generate <IoIosArrowForward className="mt-1 " />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 hidden sm:flex px-16 gap-y-4 bg-gray-100 p-6 ">
          {/* Card */}
          <div className="border rounded-md p-4 bg-white ">
            <div className="flex justify-between">
              <div className="flex ">
                <img
                  width="50"
                  height="20"
                  src="https://images.unsplash.com/photo-1617500744121-2ea787f11164?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="_panda"
                />
                <div className="ml-2">
                  <h3 className="font-bold">Panda Media</h3>
                  <p className="text-gray-400 text-sm">326 abonnes</p>
                  <p className="flex text-sm text-gray-400">
                    20 h <FaGlobeAmericas className="mt-1" />{" "}
                  </p>
                </div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <p className="font-medium mt-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              modi iste veniam impedit. Dolorum ex recusandae debitis
              repellendus nulla excepturi minima officia exercitationem
              laudantium veniam! Ab fuga placeat quod obcaecati?
            </p>
            <h2 className="text-blue-500 font-bold mt-6">See translation</h2>
            <div className="flex gap-x-2 mt-1">
              <AiFillLike className="text-blue-500 text-xl" />
              <PiHandsClapping className="text-green-500 text-xl" />
              <FcLike className=" text-xl" />
              <GiThink className="text-yellow-900 text-xl" />
              <FaHandHoldingHeart className="text-violet-500 text-xl" />
            </div>
          </div>{" "}
          <div className="border rounded-md p-4 bg-white mt-6">
            <div className="flex justify-between">
              <div className="flex ">
                <img
                  width="50"
                  height="20"
                  src="https://images.unsplash.com/photo-1617500744121-2ea787f11164?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="_panda"
                />
                <div className="ml-2">
                  <h3 className="font-bold">Panda Media</h3>
                  <p className="text-gray-400 text-sm">326 abonnes</p>
                  <p className="flex text-sm text-gray-400">
                    20 h <FaGlobeAmericas className="mt-1 ml-2" />{" "}
                  </p>
                </div>
              </div>
              <div>
                <BsThreeDots />
              </div>
            </div>
            <p className="font-medium mt-8 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              modi iste veniam impedit. Dolorum ex recusandae debitis
              repellendus nulla excepturi minima officia exercitationem
              laudantium veniam! Ab fuga placeat quod obcaecati?
            </p>
            <h2 className="text-blue-500 font-bold mt-6">See translation</h2>
            <div className="flex gap-x-2 mt-1">
              <AiFillLike className="text-blue-500 text-xl" />
              <PiHandsClapping className="text-green-500 text-xl" />
              <FcLike className=" text-xl" />
              <GiThink className="text-yellow-900 text-xl" />
              <FaHandHoldingHeart className="text-violet-500 text-xl" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
