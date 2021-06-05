import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import { useState } from "react";

function Expenses(props) {
  const [selectYear, setSelectYear] = useState("2020");
  function getFilterYear(data) {
    setSelectYear(data);
  }
  return (
    <Card className="expenses">
      <ExpenseFilter onSetFilterYear={getFilterYear} selected={selectYear} />
      {props.items.map(function expenses(item) {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
