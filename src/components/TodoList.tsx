import React from "react";
import { Itodo } from "../interface";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";

const TodoList = (): JSX.Element => {
    const [createPanel, setCreatePanel] = React.useState<boolean>(false);
    const [list, setList] = React.useState<Itodo[]>([]);
    const [editTodoName, setEditTodoName] = React.useState<string>("");

    return (
        <div className="App" style={{ width: "500px" }}>
            <div className="card bordered">
                <div className="card-body">
                    <div className="topBar">
                        <h2 className="card-title">TodoList</h2>
                        <button
                            className="btn btn-success"
                            onClick={() =>
                                setCreatePanel((prev: boolean) => !prev)
                            }
                        >
                            Panel
                        </button>
                    </div>

                    {list?.map((item: Itodo) => (
                        <TodoItem
                            key={item.id}
                            item={item}
                            list={list}
                            setList={setList}
                            editTodoName={editTodoName}
                            setEditTodoName={setEditTodoName}
                            createPanel={createPanel}
                        />
                    ))}
                    {createPanel ? <CreateTodo list={list} setList={setList} /> : null}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
