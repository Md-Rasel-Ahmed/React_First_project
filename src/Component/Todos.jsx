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
      <button onClick={props.addTodo}>Add Student</button>
      <ul className="ul">
        <h3>All Students</h3>
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
                <button
                  key={todo.id}
                  onClick={() => {
                    props.presentBtn(todo);
                  }}
                >
                  Pre
                </button>
                <button
                  key={todo}
                  onClick={() => {
                    props.absentBtn(todo);
                  }}
                >
                  Abs
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
