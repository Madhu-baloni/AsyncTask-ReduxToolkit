import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./slice/todo";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log(state);

  if (state.isLoading) {
    return <h1>Loading.....</h1>;
  }

  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch todos</button>
      {state.todo.data &&
        state.todo.data.map((e) => <li>{e.title}</li>)}
    </div>
  );
}

export default App;
