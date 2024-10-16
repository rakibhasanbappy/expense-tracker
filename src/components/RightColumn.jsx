import ListDown from "./ListDown";
import TotalBalance from "./TotalBalance";

export default function RightColumn({
  income,
  expense,
  incomeList,
  expenseList,
  setIncomeList,
  setExpenseList,
  onEditClick,
  incomeSortClicked,
  setIncomeSortClicked,
  incomeFilterClicked,
  setIncomeFilterClicked,
  expenseSortClicked,
  setExpenseSortClicked,
  expenseFilterClicked,
  setExpenseFilterClicked,
}) {
  return (
    <div className="lg:col-span-2">
      <TotalBalance income={income} expense={expense} />
      <ListDown
        incomeList={incomeList}
        expenseList={expenseList}
        setIncomeList={setIncomeList}
        setExpenseList={setExpenseList}
        onEditClick={onEditClick}
        incomeSortClicked={incomeSortClicked}
        setIncomeSortClicked={setIncomeSortClicked}
        incomeFilterClicked={incomeFilterClicked}
        setIncomeFilterClicked={setIncomeFilterClicked}
        expenseSortClicked={expenseSortClicked}
        setExpenseSortClicked={setExpenseSortClicked}
        expenseFilterClicked={expenseFilterClicked}
        setExpenseFilterClicked={setExpenseFilterClicked}
      />
    </div>
  );
}
