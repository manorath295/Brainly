import {
  EllipsisVertical,
  Heart,
  SquareArrowOutUpRight,
} from "lucide-react";
import React, { useState } from "react";

const ItemCard = ({ item }) => {
  if (!item) return <div>Empty</div>;

  const { title, link, type, tags = [] } = item;
  const [showDrop, setShowDrop] = useState(false);

  const clicked = () => {
    setShowDrop((p) => !p);
  };

  // Check if the link is an iframe
  const isIframe = link.trim().startsWith("<iframe");

  return (
    <div className="my-2 mx-2 border relative group transition-all delay-150 duration-300 ease-in-out max-h-[600px] p-2 rounded-lg shadow-md shadow-purple-500 hover:scale-[1.02] hover:shadow-gray-700 overflow-auto">
      <div className="p-2 bg-gradient-to-r from-blue-600 to-pink-500 rounded-lg w-fit mb-3 flex items-center gap-2">
        <SquareArrowOutUpRight />
        <span className="text-white font-bold">Link</span>

        <div className="absolute top-3 right-9 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Heart size={24} className="text-red-500" />
        </div>

        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <EllipsisVertical size={24} onClick={clicked} />
          {showDrop && (
            <select
              id="recent"
              name="recent"
              className="border border-gray-400 px-2 py-1 rounded-lg hover:border mt-2"
            >
              <option value="copy">Copy</option>
              <option value="delete">Delete</option>
              <option value="read">Read</option>
            </select>
          )}
        </div>
      </div>

      <h1 className="font-semibold">{title}</h1>
      <h4 className="text-gray-500 text-md mt-1">{type}</h4>

      <div className="flex items-center justify-between mt-1">
        <h4 className="text-gray-400 text-sm break-all max-w-[250px]">
          {isIframe ? "Embedded content" : link}
        </h4>
        <h4 className="text-gray-400 text-sm">{tags.length} tags</h4>
      </div>

      <div className="flex items-center gap-1 mt-3 flex-wrap">
        {tags.length > 0 ? (
          tags.map((t, i) => (
            <div className="bg-gray-300 px-2 rounded-lg text-sm" key={i}>
              #{typeof t === "string" ? t : t.title}
            </div>
          ))
        ) : (
          <span className="text-gray-400 text-sm">No tags</span>
        )}
      </div>

      {/* Conditional iframe or link */}
      {isIframe ? (
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: link }}
        />
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <div className="cursor-pointer flex items-center gap-4 border justify-center mt-5 py-1 rounded-md hover:bg-gray-300 transition-transform">
            <SquareArrowOutUpRight size={16} />
            <span className="w-fit">Open Link</span>
          </div>
        </a>
      )}
    </div>
  );
};

export default ItemCard;
