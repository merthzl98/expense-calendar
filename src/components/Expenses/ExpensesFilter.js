import React from "react";
import "./ExpensesFilter.css";

function ExpensesFilter(props) {
  const filterHandler = (event) => {
    props.onFilterYear(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label> Filter by year</label>
        <select value={props.selected} onChange={filterHandler}>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;
