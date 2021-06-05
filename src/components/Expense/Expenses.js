import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [selectYear, setSelectYear] = useState("2020");
  function getFilterYear(data) {
    setSelectYear(data);
  }
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() == selectYear;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter onSetFilterYear={getFilterYear} selected={selectYear} />
      <ExpenseList item={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
