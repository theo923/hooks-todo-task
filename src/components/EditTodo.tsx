import React from "react";
import { Itodo } from "../interface";

type EditTodoProps = {
    item: Itodo;
    list: Itodo[];
    setList: React.Dispatch<React.SetStateAction<Itodo[]>>;
    editTodoName: string;
    setEditTodoName: React.Dispatch<React.SetStateAction<string>>;
};

const EditTodo = (props: EditTodoProps): JSX.Element => {
    const { item, list, setList, editTodoName, setEditTodoName } = props;

    const handleEditTodo = () => {
        setList(
            list.map((i: Itodo) =>
                i.id == item.id
                    ? {
                          ...i,
                          name: editTodoName,
                          edit: false,
                      }
                    : i
            )
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTodoName(e.target.value);
    };

    return (
        <div className="border-2 mt-3">
            <div className="form-control m-4">
                <label className="label">
                    <span className="label-text">EditTodoName</span>
                </label>
                <input
                    type="text"
                    value={editTodoName}
                    placeholder="Name"
                    className="input input-bordered"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(e)
                    }
                />
                <div className="justify-end card-actions">
                    <button
                        className="btn btn-secondary"
                        onClick={() => handleEditTodo()}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;
