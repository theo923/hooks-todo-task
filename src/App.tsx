import "./App.css";
import TodoList from "./components/TodoList";

const App = (): JSX.Element => {
    return (
        <div className="App mt-40 flex lg:grid lg:grid-cols-3 justify-center items-center">
            <div />
            <TodoList />
            <div />
        </div>
    );
};

export default App;
