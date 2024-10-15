import Form from "./Form";
import RightColumn from "./RightColumn";

import { useState } from "react";

export default function Main() {
  const [incomeSelected, setIncomeSelected] = useState(false);
  const [expenseSelected, setExpenseSelected] = useState(true);

  const handleIncomeClick = () => {
    setIncomeSelected(true);
    setExpenseSelected(false);
  };

  const handleExpenseClick = () => {
    setIncomeSelected(false);
    setExpenseSelected(true);
  };

  return (
    <>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Form
            incomeSelected={incomeSelected}
            expenseSelected={expenseSelected}
            onIncomeClick={handleIncomeClick}
            onExpenseClick={handleExpenseClick}
          />
          <RightColumn />
        </section>
      </main>
    </>
  );
}
