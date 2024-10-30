import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [incomeSortClicked, setIncomeSortClicked] = useState(false);
  const [incomeFilterClicked, setIncomeFilterClicked] = useState(false);

  const [expenseSortClicked, setExpenseSortClicked] = useState(false);
  const [expenseFilterClicked, setExpenseFilterClicked] = useState(false);

  // state to store the selected filter options
  const [incomeSelectedFilters, setIncomeSelectedFilters] = useState([]);
  const [expenseSelectedFilters, setExpenseSelectedFilters] = useState([]);

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
        incomeSelectedFilters={incomeSelectedFilters}
        setIncomeSelectedFilters={setIncomeSelectedFilters}
        expenseSelectedFilters={expenseSelectedFilters}
        setExpenseSelectedFilters={setExpenseSelectedFilters}
      />
      <Footer />
    </div>
  );
}
