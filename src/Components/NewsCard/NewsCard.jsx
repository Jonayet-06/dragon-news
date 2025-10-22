import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { useState } from "react";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  const [isExpanded, setIsExpanded] = useState(false);

  const shortText =
    details.length > 200 ? details.slice(0, 200) + "..." : details;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300">
      {/* Author + Date + Share */}
      <div className="flex justify-between items-center px-5 pt-4 bg-base-200">
        <div className="flex items-center gap-3">
          <img
            src={author?.img}
            alt={author?.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author?.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author?.published_date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </p>
          </div>
        </div>
        <div className="flex gap-3 items-center text-gray-500 cursor-pointer hover:text-primary transition">
          <CiBookmark size={20} />
          <FaShareAlt className="" />
        </div>
      </div>

      {/* Title */}
      <div className="px-5 pt-3">
        <h2 className="text-lg font-bold leading-snug">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure className="px-5 pt-4">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-5 pt-4">
        <p className="text-sm text-gray-700">
          {isExpanded ? details : shortText}
        </p>
        {details.length > 200 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 text-blue-600 font-semibold hover:underline"
          >
            {isExpanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-5 py-4 border-t mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          {Array.from({ length: rating?.number || 0 }).map((_, index) => (
            <FaStar key={index} className="text-orange-400" />
          ))}
          <span>{rating?.number}</span>
          <span className="badge badge-sm badge-warning uppercase ml-2">
            {rating?.badge}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
