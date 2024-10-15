import { useState } from "react";
import Filter from "./Filter";
import Sort from "./Sort";
import DeleteSvg from "./svg/DeleteSvg";
import EditSvg from "./svg/EditSvg";
import FilterSvg from "./svg/FilterSvg";
import IncomeSvg from "./svg/IncomeSvg";
import SortSvg from "./svg/SortSvg";

export default function Income() {
  const [sortClicked, setSortClicked] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);
  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
            <IncomeSvg />
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Expense
            </h3>
          </div>
        </div>

        <div>
          {/* Sort Component */}
          <div className="relative inline-block text-left mr-1">
            <div>
              <button
                onClick={() => setSortClicked(!sortClicked)}
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button2"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <SortSvg />
              </button>
            </div>
            {sortClicked && <Sort />}
          </div>

          {/* Filter Component */}
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={() => setFilterClicked(!filterClicked)}
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button-2"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <FilterSvg />
              </button>
            </div>

            {filterClicked && <Filter />}
          </div>
        </div>
      </div>

      <div className="p-4 divide-y">
        <div className="flex justify-between items-center py-2 relative group cursor-pointer">
          <div>
            <h3 className="text-base font-medium leading-7 text-gray-600">
              Education
            </h3>
            <p className="text-xs text-gray-600">15 January 2024</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
              BDT 10000
            </p>

            <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
              <button
                className="hover:text-teal-600"
                role="button"
                title="Edit"
              >
                <EditSvg />
              </button>

              <button
                className="hover:text-red-600"
                role="button"
                title="Delete"
              >
                <DeleteSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
