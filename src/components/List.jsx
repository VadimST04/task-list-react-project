import Item from "./Item";

function List({ tasks }) {
  console.log(tasks);

  return (
    <ul>
      {tasks.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </ul>
  );
}

export default List;
