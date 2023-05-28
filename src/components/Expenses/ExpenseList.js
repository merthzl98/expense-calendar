import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem.js";

function ExpenseList(props) {
  const expenseContent = (
    <h2 className="expenses-list__fallback">Not found Expenses</h2>
  );

  if (props.filteredYear.length === 0) {
    return expenseContent;
  }
  return (
    <div >
      <ul className="expenses-list">
        {props.filteredYear.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
