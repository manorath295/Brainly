import { BookHeart, Menu, Moon, Plus, Search, Table } from "lucide-react";
import React, { useState } from "react";

const Header = () => {
  const [activecolor, setActiveColor] = useState("table");
  return (
    <div className="display flex border-b-2 border-gray-200 p-4 justify-between items-center">
      <div className="display flex ">
        <BookHeart size={36} />
        <h1 className="text-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          LinkStrong
        </h1>
      </div>
      <div className="flex gap-4 ">
      <div className="display flex  gap-2 border-2 border-gray-200 p-2 rounded-lg">
        <Search />
        <input
          type="text"
          placeholder="search-text"
          className="border-none focus:outline-none  w-full text-center "
        />
      </div>
      <div>
        <select
          name="Recent"
          id="recent"
          className="border-1 border-gray-200 p-2 rounded-lg"
        >
          <option value="Recent">Recent</option>
          <option value="popular">popular</option>
          <option value="A-Z">A-Z</option>
        </select>
      </div>
      </div>
      <div className="flex border-2 border-gray-200 p-2 rounded-sm bg-gray-500">
        <div
          className={`bg-black border-2 cursor-pointer  ${
            activecolor == "table" ? "bg-gray-400" : "bg-pink-400"
          }`}
          onClick={() => setActiveColor("menu")}
        >
          <Table color="white" />
        </div>
        <div
          className={`bg-white border-2 cursor-zoom-in ${
            activecolor == "menu" ? "bg-gray-400" : "bg-pink-400"
          }`}
          onClick={() => setActiveColor("table")}
        >
          <Menu color="black" />
        </div>
      </div>
      <div className="p-2 bg-gray-100 hover:bg-gray-300">
        <Moon />
      </div>
      <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  px-2 py-1  rounded-lg">
        <Plus/>
        <h1 className="text-2xl">ADD LINK</h1>
      </div>
    </div>
  );
};

export default Header;
