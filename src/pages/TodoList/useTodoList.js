import { useEffect, useState } from "react";
export const STATUS_CONSTANTS = {
  incomplete: "incomplete",
  complete: "complete",
};
const useTodoList = () => {
  const initialValue = JSON.parse(localStorage.getItem("MyList")) || [];
  const [tasksList, setTasksList] = useState(initialValue);

  const addNewTask = (taskText) => {
    const newList = JSON.parse(JSON.stringify(tasksList));
    const id = Math.random();
    const newTask = {
      id: `${id}-${taskText}`,
      text: taskText,
      status: STATUS_CONSTANTS.incomplete,
    };
    newList.push(newTask);
    setTasksList(newList);
  };

  const toggleTaskStatus = (id) => {
    const newList = JSON.parse(JSON.stringify(tasksList));
    const findTask = newList.find((task) => task.id === id);
    if (findTask.status === STATUS_CONSTANTS.incomplete) {
      findTask.status = STATUS_CONSTANTS.complete;
    } else {
      findTask.status = STATUS_CONSTANTS.incomplete;
    }
    setTasksList(newList);
  };

  const deleteTask = (id) => {
    const newList = JSON.parse(JSON.stringify(tasksList));
    const res = newList.filter((task) => task.id !== id);
    setTasksList(res);
  };

  const changeTextInTask = (text, id) => {
    const newList = JSON.parse(JSON.stringify(tasksList));
    const findTask = newList.find((task) => task.id === id);
    findTask.text = text;
    setTasksList(newList);
  };
  const [filterVal, setFilterVal] = useState("All");

  const [filterList, setFilterList] = useState([]);

  const changeFilterTask = (value) => {
    switch (value) {
      case 2:
        setFilterVal(STATUS_CONSTANTS.complete);

        break;
      case 3:
        setFilterVal(STATUS_CONSTANTS.incomplete);

        break;
      default:
        setFilterVal("All");
    }
  };

  useEffect(() => {
    if (filterVal === "All") return setFilterList(tasksList);
    const res = tasksList.filter((item) => item.status === filterVal);
    setFilterList(res);
  }, [tasksList, filterVal]);

  const saveList = () => {
    localStorage.setItem("MyList", JSON.stringify(tasksList));
  };

  return {
    filterList,
    addNewTask,
    toggleTaskStatus,
    deleteTask,
    changeTextInTask,
    changeFilterTask,
    saveList,
  };
};

export default useTodoList;
