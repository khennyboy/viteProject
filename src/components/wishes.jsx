import { useCallback, useContext, useRef, useState } from "react";
import { useWishes } from "../hooks/useWishes";
import { BiError } from "react-icons/bi";
import WishesSkeleton from "./skeleton";
import { SectionsRef } from "../App";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(new Date(date));

export default function Wishes() {
  const { commentRef } = useContext(SectionsRef);
  const viewMoreRef = useRef(null);
  const [count, setCount] = useState(1);
  const [openId, setOpenId] = useState(new Set());
  const { isLoading, data: wishes = [], error, isError } = useWishes();

  const wishesCount = Math.ceil(wishes.length / 10);
  const visibleWishes = wishes.slice(0, count * 10);

  const handleMoreWish = useCallback(() => {
    setCount((prev) => (prev < wishesCount ? prev + 1 : 1));
  }, [wishesCount]);

  const toggleWish = (index) => {
    setOpenId((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
  };

  if (isError) {
    return (
      <div className="mx-8 flex mb-8 items-center gap-1 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
        <BiError />
        <span>{error?.message} Birthday Wishes can&#39;t be loaded</span>
      </div>
    );
  }

  return (
    <div
      id="comment"
      ref={commentRef}
      className="px-4 mb-12 space-y-6 max-w-2xl lg:max-w-4xl md:px-8 lg:px-12"
    >
      <h2 className="text-xl md:text-2xl font-bold text-orange-600 text-center mb-6">
        Birthday Wishes 🎉
      </h2>
      {isLoading ? (
        <WishesSkeleton />
      ) : (
        <div className="space-y-4 divide-y divide-orange-300">
          {visibleWishes.map((each, index) => (
            <div key={index} className="flex gap-4 pt-4">
              <span className="rounded-full w-9 h-9 sm:w-12 sm:h-12 flex-shrink-0 bg-orange-500 text-white font-bold text-xl md:text-2xl flex justify-center items-center">
                {each.name[0].toUpperCase()}
              </span>

              <div>
                <p className="font-semibold md:text-lg text-gray-700">{each.name}</p>
                <p className="text-gray-600 leading-snug relative mb-4">
                  {openId.has(index) ? each.wishes : `${each.wishes.slice(0, 50)} 🎂`}
                  {each.wishes.length > 50 && (
                    <button
                      onClick={() => toggleWish(index)}
                      className="text-orange-500 text-sm lg:text-base absolute top-full right-0 font-medium hover:underline ml-8"
                    >
                      {openId.has(index) ? "Show Less..." : "Show More..."}
                    </button>
                  )}
                </p>
                <span className="text-gray-500 text-xs md:text-sm italic">
                  {formatDate(each.createdAt)}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      {wishesCount > 1 && (
        <div className="text-right">
          <button
            onClick={handleMoreWish}
            ref={viewMoreRef}
            className="cursor-pointer mt-6 px-6 py-3 hover:underline text-orange-500 font-medium hover:text-orange-600 duration-300 ease-linear transition-all"
          >
            {count < wishesCount ? "View More Wishes..." : "View Less"}
          </button>
        </div>
      )}
    </div>
  );
}
