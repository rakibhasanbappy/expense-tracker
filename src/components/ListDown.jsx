import Expense from "./Expense";
import Income from "./Income";

export default function ListDown({ incomeList, expenseList }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
      <Income incomeList={incomeList} />
      <Expense expenseList={expenseList} />
    </div>
  );
}
