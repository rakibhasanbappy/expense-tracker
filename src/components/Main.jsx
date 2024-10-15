import Form from "./Form";
import RightColumn from "./RightColumn";

import { useState } from "react";

export default function Main({
  incomeSortClicked,
  setIncomeSortClicked,
  incomeFilterClicked,
  setIncomeFilterClicked,
  expenseSortClicked,
  setExpenseSortClicked,
  expenseFilterClicked,
  setExpenseFilterClicked,
}) {
  const [incomeSelected, setIncomeSelected] = useState(false);
  const [expenseSelected, setExpenseSelected] = useState(true);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  const handleIncomeClick = () => {
    setIncomeSelected(true);
    setExpenseSelected(false);
    setTransactionData({
      ...transactionData,
      type: "Income",
      category: "Salary",
    });
  };

  const handleExpenseClick = () => {
    setIncomeSelected(false);
    setExpenseSelected(true);
    setTransactionData({
      ...transactionData,
      type: "Expense",
      category: "Education",
    });
  };

  const transaction = {
    type: incomeSelected ? "Income" : "Expense",
    category: incomeSelected ? "Salary" : "Education",
    amount: "",
    date: "",
  };

  const [transactionData, setTransactionData] = useState(transaction);

  function handleSave() {
    if (transactionData.amount === "" || transactionData.date === "") {
      alert("Please fill all the fields");
      return;
    }

    if (transactionData.type === "Income") {
      setIncome(income + parseInt(transactionData.amount));
      setIncomeList([
        ...incomeList,
        {
          id: crypto.randomUUID(),
          ...transactionData,
        },
      ]);
    } else {
      setExpense(expense + parseInt(transactionData.amount));
      setExpenseList([
        ...expenseList,
        {
          id: crypto.randomUUID(),
          ...transactionData,
        },
      ]);
    }
  }

  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Form
            incomeSelected={incomeSelected}
            expenseSelected={expenseSelected}
            onIncomeClick={handleIncomeClick}
            onExpenseClick={handleExpenseClick}
            transactionData={transactionData}
            setTransactionData={setTransactionData}
            onSave={handleSave}
          />
          <RightColumn
            income={income}
            expense={expense}
            incomeList={incomeList}
            expenseList={expenseList}
            incomeSortClicked={incomeSortClicked}
            setIncomeSortClicked={setIncomeSortClicked}
            incomeFilterClicked={incomeFilterClicked}
            setIncomeFilterClicked={setIncomeFilterClicked}
            expenseSortClicked={expenseSortClicked}
            setExpenseSortClicked={setExpenseSortClicked}
            expenseFilterClicked={expenseFilterClicked}
            setExpenseFilterClicked={setExpenseFilterClicked}
          />
        </section>
      </main>
    </>
  );
}
