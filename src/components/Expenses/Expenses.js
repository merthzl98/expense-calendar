import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");
  const filterYearHandler = (chosenYear) => {
    setEnteredYear(chosenYear);
  };

  const filteredYear = props.items.filter((item) => {
    return enteredYear === item.date.getFullYear().toString();
  });
  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onFilterYear={filterYearHandler} />
      <ExpensesChart expenses = {filteredYear}/>
      <ExpenseList filteredYear={filteredYear} />
    </Card>
  );
}

export default Expenses;
