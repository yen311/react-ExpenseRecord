import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [open, setOpen] = useState(false);
  const titleInputHandler = (e) => {
    setInputTitle(e.target.value);
  };
  const amountInputHandler = (e) => {
    setInputAmount(e.target.value);
  };
  const dateInputHandler = (e) => {
    setInputDate(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userInput = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
    props.onSaveExpenseData(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleInputHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={inputAmount}
            min="0.01"
            step="0.01"
            onChange={amountInputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="Date"
            value={inputDate}
            min="2020-01-01"
            max="2029-12-31"
            onChange={dateInputHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.close}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
