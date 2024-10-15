export default function Sort({
  sort,
  incomeList,
  setIncomeList,
  expenseList,
  setExpenseList,
}) {
  function low_to_high() {
    if (sort === "Income") {
      const sortedList = incomeList.sort((a, b) => a.amount - b.amount);
      setIncomeList([...sortedList]);
    } else {
      const sortedList = expenseList.sort((a, b) => a.amount - b.amount);
      setExpenseList([...sortedList]);
    }
  }

  function high_to_low() {
    if (sort === "Income") {
      const sortedList = incomeList.sort((a, b) => b.amount - a.amount);
      setIncomeList([...sortedList]);
    } else {
      const sortedList = expenseList.sort((a, b) => b.amount - a.amount);
      setExpenseList([...sortedList]);
    }
  }

  return (
    <>
      <div
        className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu2"
        aria-orientation="vertical"
        aria-labelledby="menu-button2"
        tabIndex="-1"
      >
        <div className="py-1" role="none">
          <a
            onClick={low_to_high}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            Low to High
          </a>
          <a
            onClick={high_to_low}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
          >
            High to Low
          </a>
        </div>
      </div>
    </>
  );
}
