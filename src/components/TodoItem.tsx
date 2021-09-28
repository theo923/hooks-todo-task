import React from "react";
import { Itodo } from "../interface";
import { ImBin2 } from "react-icons/im";
import { TiTick } from "react-icons/ti";
import { AiOutlineOrderedList } from "react-icons/ai";
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import EditTodo from "./EditTodo";

type TodoItemProps = {
    item: Itodo;
    list: Itodo[];
    setList: React.Dispatch<React.SetStateAction<Itodo[]>>;
    editTodoName: string;
    setEditTodoName: React.Dispatch<React.SetStateAction<string>>;
    createPanel: boolean;
};

const TodoItem = (props: TodoItemProps): JSX.Element => {
    const { item, list, setList, editTodoName, setEditTodoName, createPanel } =
        props;

    const handleReorder = (type: number) => {
        // 0 for up, 1 for down
        switch (type) {
            case 0:
                if (item.id !== 0) {
                    const newList = list
                        .map((i: Itodo) =>
                            i.id === item.id
                                ? {
                                      ...i,
                                      id: i.id - 1,
                                  }
                                : i.id + 1 === item.id
                                ? {
                                      ...i,
                                      id: i.id + 1,
                                  }
                                : i
                        )
                        .sort((a: Itodo, b: Itodo) => a.id - b.id);
                    setList(newList);
                }
                break;
            case 1:
                if (item.id !== list.length - 1) {
                    const newList = list
                        .map((i: Itodo) =>
                            i.id === item.id
                                ? {
                                      ...i,
                                      id: i.id + 1,
                                  }
                                : i.id - 1 === item.id
                                ? {
                                      ...i,
                                      id: i.id - 1,
                                  }
                                : i
                        )
                        .sort((a: Itodo, b: Itodo) => a.id - b.id);
                    setList(newList);
                }
                break;
            default:
                return;
        }
    };

    const handleEdit = () => {
        setList(
            list?.map((i: Itodo) =>
                i.id == item.id
                    ? {
                          ...i,
                          edit: !i.edit,
                      }
                    : i
            )
        );
        setEditTodoName(item.name);
    };

    const handleDelete = () => {
        setList(list.filter((i: Itodo) => i.id !== item.id));
    };

    const handleStatus = () => {
        setList(
            list.map((i: Itodo) =>
                i.id == item.id
                    ? {
                          ...i,
                          status: !i.status,
                      }
                    : i
            )
        );
    };

    return (
        <div key={item.id}>
            <div
                className={`${
                    item.status === true ? "todoDone" : ""
                } todoLayout`}
                style={{ height: "40px" }}
            >
                {createPanel ? (
                    <button
                        className="btn btn-success"
                        onClick={() => handleStatus()}
                    >
                        <TiTick size="20" />
                    </button>
                ) : null}
                <p>{item.name}</p>
                {createPanel ? (
                    <div className="buttonBar">
                        <div className="orderButton mr-1">
                            <button
                                className="btn btn-outline btn-xs bg-white"
                                onClick={() => handleReorder(0)}
                            >
                                <BiUpArrowAlt size="20" />
                            </button>
                            <button
                                className="btn btn-outline btn-xs bg-white"
                                onClick={() => handleReorder(1)}
                            >
                                <BiDownArrowAlt size="20" />
                            </button>
                        </div>
                        <button
                            className="btn btn-warning mr-1"
                            onClick={() => handleEdit()}
                        >
                            <AiOutlineOrderedList size="20" />
                        </button>
                        <button
                            className="btn btn-error"
                            onClick={() => handleDelete()}
                        >
                            <ImBin2 size="20" />
                        </button>
                    </div>
                ) : null}
            </div>
            {item.edit ? (
                <EditTodo
                    item={item}
                    list={list}
                    setList={setList}
                    editTodoName={editTodoName}
                    setEditTodoName={setEditTodoName}
                />
            ) : null}
        </div>
    );
};

export default TodoItem;
