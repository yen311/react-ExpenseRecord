import "./ExpenseDate.css";
function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-AU", { month: "long" });
  const day = props.date.toLocaleString("en-AU", { day: "numeric" });
  const year = props.date.toLocaleString("en-AU", { year: "numeric" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
