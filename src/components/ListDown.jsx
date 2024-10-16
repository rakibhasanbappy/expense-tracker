import Expense from "./Expense";
import Income from "./Income";

export default function ListDown({
  incomeList,
  expenseList,
  setIncomeList,
  setExpenseList,
  incomeOptions,
  expenseOptions,
  onEditClick,
  onDeleteClick,
  incomeSortClicked,
  setIncomeSortClicked,
  incomeFilterClicked,
  setIncomeFilterClicked,
  expenseSortClicked,
  setExpenseSortClicked,
  expenseFilterClicked,
  setExpenseFilterClicked,
  incomeSelectedFilters,
  setIncomeSelectedFilters,
  expenseSelectedFilters,
  setExpenseSelectedFilters,
}) {
  function toggleIncomeSortButton() {
    setIncomeSortClicked(!incomeSortClicked);

    if (incomeFilterClicked || expenseSortClicked || expenseFilterClicked) {
      setIncomeFilterClicked(false);
      setExpenseSortClicked(false);
      setExpenseFilterClicked(false);
    }
  }

  function toggleIncomeFilterButton() {
    setIncomeFilterClicked(!incomeFilterClicked);

    if (incomeSortClicked || expenseSortClicked || expenseFilterClicked) {
      setIncomeSortClicked(false);
      setExpenseSortClicked(false);
      setExpenseFilterClicked(false);
    }
  }

  function toggleExpenseSortButton() {
    setExpenseSortClicked(!expenseSortClicked);

    if (incomeSortClicked || incomeFilterClicked || expenseFilterClicked) {
      setIncomeSortClicked(false);
      setIncomeFilterClicked(false);
      setExpenseFilterClicked(false);
    }
  }

  function toggleExpenseFilterButton() {
    setExpenseFilterClicked(!expenseFilterClicked);

    if (incomeSortClicked || incomeFilterClicked || expenseSortClicked) {
      setIncomeSortClicked(false);
      setIncomeFilterClicked(false);
      setExpenseSortClicked(false);
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
      <Income
        incomeList={incomeList}
        setIncomeList={setIncomeList}
        incomeOptions={incomeOptions}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
        incomeSortClicked={incomeSortClicked}
        incomeFilterClicked={incomeFilterClicked}
        onIncomeSortButton={toggleIncomeSortButton}
        onIncomeFilterButton={toggleIncomeFilterButton}
        incomeSelectedFilters={incomeSelectedFilters}
        setIncomeSelectedFilters={setIncomeSelectedFilters}
      />
      <Expense
        expenseList={expenseList}
        setExpenseList={setExpenseList}
        expenseOptions={expenseOptions}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
        expenseSortClicked={expenseSortClicked}
        expenseFilterClicked={expenseFilterClicked}
        onExpenseSortButton={toggleExpenseSortButton}
        onExpenseFilterButton={toggleExpenseFilterButton}
        expenseSelectedFilters={expenseSelectedFilters}
        setExpenseSelectedFilters={setExpenseSelectedFilters}
      />
    </div>
  );
}
