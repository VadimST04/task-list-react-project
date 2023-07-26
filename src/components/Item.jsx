import { useState } from "react";

function Item({ title, id, status }) {
  const [checked, setChecked] = useState(status);
  const classes = ["todo"];

  if (checked) {
    classes.push("status");
  }

  const updateStatus = () => {
    setChecked(!checked);
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    storedTasks.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return true;
    });
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  };

  const [visable, setVisable] = useState(true);

  const removeItem = () => {
    setVisable((prev) => !prev);
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    let removeTasks = storedTasks.filter((item) => {
      return item.id !== id;
    });
    localStorage.setItem("tasks", JSON.stringify(removeTasks));
  };

  return (
    <>
      {visable && (
        <li className={classes.join(" ")}>
          <label>
            <input type="checkbox" checked={checked} onChange={updateStatus} />
            <span>{title}</span>
            <i className="material-icons red-text" onClick={removeItem}>
              X
            </i>
          </label>
        </li>
      )}
    </>
  );
}

export default Item;
