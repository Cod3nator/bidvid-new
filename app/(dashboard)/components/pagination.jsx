import { ChevronRight } from "lucide-react";

const Pagination = () => (
  <div className="ml-4 lg:w-3/5 w-full flex items-center justify-between  border-gray-200">
    <div className="hidden sm:flex">
      {[...Array(7)].map((_, index) => (
        <p
          key={index}
          className={`text-sm font-medium leading-none cursor-pointer text-gray-600 hover:text-indigo-700 border-t border-transparent hover:border-indigo-400 pt mr-4 px-2 ${
            index === 3 ? "text-indigo-700 border-indigo-400" : ""
          }`}
        >
          {index + 1}
        </p>
      ))}
    </div>
    <div className="flex items-center pt text-gray-600 hover:text-indigo-700 cursor-pointer">
      <p className="text-sm font-medium leading-none mr-3 text-sm">Next</p>
      <ChevronRight size={18} />
    </div>
  </div>
);

export default Pagination;