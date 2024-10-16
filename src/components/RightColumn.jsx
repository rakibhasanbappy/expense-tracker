import ListDown from "./ListDown";
import TotalBalance from "./TotalBalance";

export default function RightColumn({
  income,
  expense,
  incomeList,
  expenseList,
  incomeOptions,
  expenseOptions,
  setIncomeList,
  setExpenseList,
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
}) {
  return (
    <div className="lg:col-span-2">
      <TotalBalance income={income} expense={expense} />
      <ListDown
        incomeList={incomeList}
        expenseList={expenseList}
        incomeOptions={incomeOptions}
        expenseOptions={expenseOptions}
        setIncomeList={setIncomeList}
        setExpenseList={setExpenseList}
        onEditClick={onEditClick}
        onDeleteClick={onDeleteClick}
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
