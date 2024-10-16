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
  const [editedAmount, setEditedAmount] = useState(0);

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

    // this is for editing the transaction
    if (transactionData.id) {
      // search in the income list first
      const index = incomeList.findIndex(
        (income) => income.id === transactionData.id
      );

      if (index !== -1) {
        // if the transaction type is changed from income to expense
        if (transactionData.type === "Expense") {
          const newIncomeList = incomeList.filter(
            (income) => income.id !== transactionData.id
          );
          setIncomeList(newIncomeList);
          setIncome(income - editedAmount);
          setExpense(expense + parseInt(transactionData.amount));
          setExpenseList([...expenseList, transactionData]);
          setTransactionData(transaction);
          return;
        }
        const newIncomeList = [...incomeList];
        newIncomeList[index] = transactionData;
        setIncomeList(newIncomeList);
        setIncome(income + parseInt(transactionData.amount) - editedAmount);
      } else {
        // search in the expense list
        const index = expenseList.findIndex(
          (expense) => expense.id === transactionData.id
        );

        if (index !== -1) {
          // if the transaction type is changed from expense to income
          if (transactionData.type === "Income") {
            const newExpenseList = expenseList.filter(
              (expense) => expense.id !== transactionData.id
            );
            setExpenseList(newExpenseList);
            setExpense(expense - editedAmount);
            setIncome(income + parseInt(transactionData.amount));
            setIncomeList([...incomeList, transactionData]);
            setTransactionData(transaction);
            return;
          }
          const newExpenseList = [...expenseList];
          newExpenseList[index] = transactionData;
          setExpenseList(newExpenseList);
          setExpense(expense + parseInt(transactionData.amount) - editedAmount);
        }
      }
      setTransactionData(transaction);
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
    setTransactionData(transaction);
  }

  function handleEditClick(transaction) {
    if (transaction.type === "Income") {
      setIncomeSelected(true);
      setExpenseSelected(false);
    } else {
      setIncomeSelected(false);
      setExpenseSelected(true);
    }

    setTransactionData(transaction);

    setEditedAmount(parseInt(transaction.amount));
  }

  function handleDeleteClick(transaction) {
    if (!window.confirm("Are you sure you want to delete this transaction?")) {
      return;
    }

    if (transaction.type === "Income") {
      const newIncomeList = incomeList.filter(
        (income) => income.id !== transaction.id
      );
      setIncomeList(newIncomeList);
      setIncome(income - parseInt(transaction.amount));
    } else {
      const newExpenseList = expenseList.filter(
        (expense) => expense.id !== transaction.id
      );
      setExpenseList(newExpenseList);
      setExpense(expense - parseInt(transaction.amount));
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
            setIncomeList={setIncomeList}
            setExpenseList={setExpenseList}
            onEditClick={handleEditClick}
            onDeleteClick={handleDeleteClick}
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
