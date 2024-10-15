import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [incomeSortClicked, setIncomeSortClicked] = useState(false);
  const [incomeFilterClicked, setIncomeFilterClicked] = useState(false);

  const [expenseSortClicked, setExpenseSortClicked] = useState(false);
  const [expenseFilterClicked, setExpenseFilterClicked] = useState(false);

  function handleOnClick() {
    if (
      incomeSortClicked ||
      incomeFilterClicked ||
      expenseSortClicked ||
      expenseFilterClicked
    ) {
      setIncomeSortClicked(false);
      setIncomeFilterClicked(false);
      setExpenseSortClicked(false);
      setExpenseFilterClicked(false);
    }
  }

  return (
    <div onClick={handleOnClick}>
      <Header />
      <Main
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
