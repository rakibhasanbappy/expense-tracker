export default function Form({
  incomeSelected,
  expenseSelected,
  incomeOptions,
  expenseOptions,
  onIncomeClick,
  onExpenseClick,
  transactionData,
  setTransactionData,
  onSave,
}) {
  let options;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTransactionData({ ...transactionData, [name]: value });
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    onSave();
  };

  return (
    <>
      <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
        <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
          Expense Tracker
        </h2>

        <form>
          <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
            <div
              onClick={onExpenseClick}
              className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
                expenseSelected ? "active" : ""
              }`}
            >
              Expense
            </div>
            <div
              onClick={onIncomeClick}
              className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${
                incomeSelected ? "active" : ""
              }`}
            >
              Income
            </div>
          </div>

          <div className="mt-3">
            <label
              htmlFor="category"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Category
            </label>
            <div className="mt-2">
              <select
                id="category"
                name="category"
                value={transactionData.category}
                onChange={handleChange}
                autoComplete="category-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              >
                {(options = incomeSelected ? incomeOptions : expenseOptions)}

                {options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-3">
            <label
              htmlFor="amount"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Amount
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="amount"
                id="amount"
                value={transactionData.amount}
                onChange={handleChange}
                autoComplete="off"
                placeholder="12931"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="mt-3">
            <label
              htmlFor="date"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="date"
                id="date"
                value={transactionData.date}
                onChange={handleChange}
                autoComplete="off"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            onClick={onSaveHandler}
            type="submit"
            className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
}
