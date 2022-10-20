import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

//props here is passed from the properties in the App.js inline with the ExpenseItem JSX tag
function ExpenseItem(props) {
  //updating a value from event listener
  // const [title, setTitle] = useState(props.title); //Always returns exactly two elements (value, function to update)

  //common practice, end event listener helper method with 'Handler'
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title); //original value doesn't change yet (scheduled for future)
  // };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
