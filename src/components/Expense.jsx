import getwrittenDate from "../helper/covertDate";
import Filter from "./Filter";
import Sort from "./Sort";
import DeleteSvg from "./svg/DeleteSvg";
import EditSvg from "./svg/EditSvg";
import ExpenseSvg from "./svg/ExpenseSvg";
import FilterSvg from "./svg/FilterSvg";
import SortSvg from "./svg/SortSvg";

export default function Expense({
  expenseList,
  setExpenseList,
  expenseOptions,
  onEditClick,
  onDeleteClick,
  expenseSortClicked,
  expenseFilterClicked,
  onExpenseSortButton,
  onExpenseFilterButton,
  expenseSelectedFilters,
  setExpenseSelectedFilters,
}) {
  // function to handle the checkbox change event
  const handleCheckboxChange = (e) => {
    e.stopPropagation();

    if (e.target.checked) {
      setExpenseSelectedFilters([...expenseSelectedFilters, e.target.id]);
    } else {
      setExpenseSelectedFilters(
        expenseSelectedFilters.filter((filter) => filter !== e.target.id)
      );
    }
  };

  // filter the income list based on the selected filters
  if (expenseSelectedFilters.length > 0) {
    const filteredExpenseList = expenseList.filter((expense) =>
      expenseSelectedFilters.includes(expense.category)
    );

    expenseList = filteredExpenseList;
  }

  return (
    <div className="border rounded-md">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
            <ExpenseSvg />
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
                onClick={(e) => {
                  e.stopPropagation();
                  onExpenseSortButton();
                }}
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button2"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <SortSvg />
              </button>
            </div>
            {expenseSortClicked && (
              <Sort
                sort={"Expense"}
                expenseList={expenseList}
                setExpenseList={setExpenseList}
              />
            )}
          </div>

          {/* Filter Component */}
          <div className="relative inline-block text-left">
            <div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onExpenseFilterButton();
                }}
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button-2"
                aria-expanded="true"
                aria-haspopup="true"
              >
                <FilterSvg />
              </button>
            </div>

            {expenseFilterClicked && (
              <Filter
                filterOptions={expenseOptions}
                handleCheckboxChange={handleCheckboxChange}
                filterSelected={expenseSelectedFilters}
              />
            )}
          </div>
        </div>
      </div>
      <div className="p-4 divide-y">
        {expenseList.length === 0 && (
          <p className="text-center text-gray-600">No expenses yet!</p>
        )}
        {expenseList.map((expense) => (
          <div
            key={expense.id}
            className="flex justify-between items-center py-2 relative group cursor-pointer"
          >
            <div>
              <h3 className="text-base font-medium leading-7 text-gray-600">
                {expense.category}
              </h3>
              <p className="text-xs text-gray-600">
                {getwrittenDate(expense.date)}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                BDT {expense.amount}
              </p>

              <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                <button
                  className="hover:text-teal-600"
                  role="button"
                  title="Edit"
                  onClick={() => onEditClick(expense)}
                >
                  <EditSvg />
                </button>

                <button
                  className="hover:text-red-600"
                  role="button"
                  title="Delete"
                  onClick={() => onDeleteClick(expense)}
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
