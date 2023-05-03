import { useEffect, useState } from "react";
export const STATUS_CONSTANTS = {
  incomplete: "incomplete",
  complete: "complete",
};
const useTodoList = () => {
  const [tasksList, setTasksList] = useState([]);

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

  const changeFilterTask = (value) => {
    const newList = JSON.parse(JSON.stringify(tasksList));
    let res = [];
    if (value === 1) {
      res = newList;
    } else if (value === 2) {
      res = newList.filter((item) => item.status === STATUS_CONSTANTS.complete);
    } else if (value === 3) {
      res = newList.filter(
        (item) => item.status === STATUS_CONSTANTS.incomplete
      );
    }
  };

  return {
    tasksList,
    addNewTask,
    toggleTaskStatus,
    deleteTask,
    changeTextInTask,
    changeFilterTask,
  };
};

export default useTodoList;
