import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";
const initial = [
  {
    title: "Toilet paper",
    amount: 95,
    date: new Date(2019, 5, 1),
    id: 3,
  },
  {
    title: "Grocery",
    amount: 295,
    date: new Date(2021, 6, 2),
    id: 2,
  },
  {
    title: "Sushi",
    amount: 45,
    date: new Date(2021, 10, 5),
    id: 1,
  },
  {
    title: "Gas",
    amount: 48,
    date: new Date(2022, 11, 6),
    id: 0,
  },
];

function App() {
  const [expenses, setExpenses] = useState(initial);

  const addExpense = (data) => {
    setExpenses((previousExpenses) => {
      return [data, ...previousExpenses];
    });
  };
  return (
    <div>
      <NewExpense onSaveExpenseData1={addExpense} items={expenses}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
