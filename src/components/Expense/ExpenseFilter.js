import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  //const [selectYear, setSelectYear] = useState("2020");
  const filterHandler = (e) => {
    //setSelectYear(e.target.value);
    props.onSetFilterYear(e.target.value);
  };
  //props.onSetFilterYear(selectYear);
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select
          value={props.selected}
          onChange={filterHandler} /*value={selectYear}*/
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
