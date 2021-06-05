import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

function ExpenseList(props) {
  let expenseShowingBox = <p>No expenses founded!!</p>;
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses founded!!</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.item.map(function expenses(item) {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
}
export default ExpenseList;
