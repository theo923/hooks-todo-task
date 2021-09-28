import React from "react";
import { Itodo } from "../interface";

type CreateTodo = {
    list: Itodo[];
    setList: React.Dispatch<React.SetStateAction<Itodo[]>>;
};

const CreateTodo = (props: CreateTodo): JSX.Element => {
    const { setList, list } = props;
    const [todoName, setTodoName] = React.useState<string>("");
    const [todoStatus, setTodoStatus] = React.useState<boolean>(false);

    const handleCreateTodo = () => {
        setList((prev: Itodo[]) => [
            ...prev,
            {
                id: list[list.length - 1]?.id + 1 || list.length,
                name: todoName,
                status: todoStatus,
                edit: false,
            },
        ]);
        setTodoName("");
    };

    return (
        <div className="form-control">
            <label className="label">
                <span className="label-text">TodoName</span>
            </label>
            <input
                type="text"
                value={todoName}
                placeholder="Name"
                className="input input-bordered"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTodoName(e.target.value)
                }
            />
            <label className="cursor-pointer label">
                <span className="label-text">Done?</span>
                <input
                    type="checkbox"
                    checked={todoStatus}
                    className="checkbox checkbox-primary"
                    onChange={() => setTodoStatus((prev: boolean) => !prev)}
                />
            </label>
            <div className="justify-end card-actions">
                <button
                    className="btn btn-secondary"
                    disabled={Boolean(todoName === "")}
                    onClick={() => handleCreateTodo()}
                >
                    Create
                </button>
            </div>
        </div>
    );
};

export default CreateTodo;
