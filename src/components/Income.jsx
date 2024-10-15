import { useState } from "react";
import getwrittenDate from "../helper/covertDate";

import Filter from "./Filter";
import Sort from "./Sort";
import DeleteSvg from "./svg/DeleteSvg";
import EditSvg from "./svg/EditSvg";
import FilterSvg from "./svg/FilterSvg";
import IncomeSvg from "./svg/IncomeSvg";
import SortSvg from "./svg/SortSvg";

export default function Income({ incomeList }) {
  const [sortClicked, setSortClicked] = useState(false);
  const [filterClicked, setFilterClicked] = useState(false);

  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
            <IncomeSvg />
          </div>

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              Income
            </h3>
          </div>
        </div>
        <div>
          <div className="relative inline-block text-left mr-1">
            <div>
              <button
                onClick={() => setSortClicked(!sortClicked)}
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <SortSvg />
              </button>
            </div>

            {sortClicked && <Sort />}
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={() => setFilterClicked(!filterClicked)}
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button"
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
        {incomeList.map((income) => (
          <div
            key={income.id}
            className="flex justify-between items-center py-2 relative group cursor-pointer"
          >
            <div>
              <h3 className="text-base font-medium leading-7 text-gray-600">
                {income.category}
              </h3>
              <p className="text-xs text-gray-600">
                {getwrittenDate(income.date)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                BDT {income.amount}
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
        ))}
      </div>
    </div>
  );
}
