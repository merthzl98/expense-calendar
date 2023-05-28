import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDate, setExpenseDate] = useState("");

  const titleHandler = (event) => {
    setExpenseTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setExpenseAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setExpenseDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseItem = {
      title: expenseTitle,
      amount: +expenseAmount,
      date: new Date(expenseDate),
    };
    props.setAddNewExpense(false);

    setExpenseTitle("");
    setExpenseAmount("");
    setExpenseDate("");
    props.onSaveExpenseItem(expenseItem);
  };

  const isEditingHandler = (event) => {
    event.preventDefault();
    props.setAddNewExpense(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={expenseTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={expenseAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={isEditingHandler}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
