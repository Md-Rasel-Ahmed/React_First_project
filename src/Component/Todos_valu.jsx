const Todos = (props) => {
  return (
    <div>
      <input
        onChange={(e) => {
          props.handleChange(e.target.value);
        }}
        type="text"
        value={props.inputVal}
      />
      <button onClick={props.addTodo}>Add Todo</button>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.title} </span>
              <div className="btn-group">
                <button
                  onClick={() => {
                    props.editBtn(todo);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    props.deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Todos;
