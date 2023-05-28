import React from "react";
import AddExpense from "./AddExpense";
//import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const saveExpenseItemHandler = (enteredExpenseItem) => {
    const expenseItem = {
      ...enteredExpenseItem,
      id: Math.random(),
    };
    props.onSaveExpenses(expenseItem);
  };
  return (
    <div className="new-expense">
      <AddExpense onSaveExpenseItem={saveExpenseItemHandler} />
    </div>
  );
}

export default NewExpense;
