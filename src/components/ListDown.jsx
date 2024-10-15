import Expense from "./Expense";
import Income from "./Income";

export default function ListDown({
  incomeList,
  expenseList,
  incomeSortClicked,
  setIncomeSortClicked,
  incomeFilterClicked,
  setIncomeFilterClicked,
  expenseSortClicked,
  setExpenseSortClicked,
  expenseFilterClicked,
  setExpenseFilterClicked,
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
        incomeSortClicked={incomeSortClicked}
        incomeFilterClicked={incomeFilterClicked}
        onIncomeSortButton={toggleIncomeSortButton}
        onIncomeFilterButton={toggleIncomeFilterButton}
      />
      <Expense
        expenseList={expenseList}
        expenseSortClicked={expenseSortClicked}
        expenseFilterClicked={expenseFilterClicked}
        onExpenseSortButton={toggleExpenseSortButton}
        onExpenseFilterButton={toggleExpenseFilterButton}
      />
    </div>
  );
}
