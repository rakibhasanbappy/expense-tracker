import ListDown from "./ListDown";
import TotalBalance from "./TotalBalance";

export default function RightColumn({
  income,
  expense,
  incomeList,
  expenseList,
}) {
  return (
    <div className="lg:col-span-2">
      <TotalBalance income={income} expense={expense} />
      <ListDown incomeList={incomeList} expenseList={expenseList} />
    </div>
  );
}
