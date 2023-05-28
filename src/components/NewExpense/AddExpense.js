import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./ExpenseForm.css";

function AddExpense(props) {
  const [addNewExpense, setAddNewExpense] = useState(false);

  const addNewExpenseHandler = (event) => {
    event.preventDefault();
    setAddNewExpense(true);
    
  };

  return (
    <div>
      {addNewExpense ? (
        <ExpenseForm onSaveExpenseItem={props.onSaveExpenseItem} setAddNewExpense={setAddNewExpense} addNewExpenseHandler={addNewExpenseHandler}/>
      ) : (
        <div className="new-expense__actions">
          <button type="submit" onClick={addNewExpenseHandler}>
            Add New Expense 
          </button>
        </div>
      )}
    </div>
  );
}

export default AddExpense;
