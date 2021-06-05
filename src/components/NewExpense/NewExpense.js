import "./NewExpense.css";
import React from "react";
import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  console.log(props.items);
  const getExpenseData = (data) => {
    const newExpense = { ...data, id: props.items.length };
    props.onSaveExpenseData1(newExpense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={getExpenseData}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
