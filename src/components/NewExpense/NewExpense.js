import "./NewExpense.css";
import React, { useState } from "react";
import "./ExpenseForm.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [open, setOpen] = useState(false);
  const getExpenseData = (data) => {
    const newExpense = { ...data, id: props.items.length };
    props.onSaveExpenseData1(newExpense);
    setOpen(false);
  };

  const openFormHandler = (e) => {
    setOpen(true);
  };
  const closeFormHandler = (e) => {
    setOpen(false);
  };

  return (
    <div className="new-expense">
      {open == false && (
        <button onClick={openFormHandler}>Add New Expense</button>
      )}
      {open == true && (
        <ExpenseForm
          close={closeFormHandler}
          onSaveExpenseData={getExpenseData}
        ></ExpenseForm>
      )}
    </div>
  );
}
export default NewExpense;
