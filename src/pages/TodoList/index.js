import React from "react";
import { TodoListStyles } from "./TodoList.styles";
import useTodoList, { STATUS_CONSTANTS } from "./useTodoList";
import EmptyList from "../../components/EmptyList";
import AddTask from "../../components/Modal/AddTask";
import Task from "../../components/Task";
import useToggleModal from "../../hooks/useToggleModal";
import { Select } from "antd";

const TodoList = () => {
  const {
    tasksList,
    addNewTask,
    toggleTaskStatus,
    deleteTask,
    changeTextInTask,
    changeFilterTask,
    filterList,
  } = useTodoList();
  const {
    isModalOpen: isAddTaskModalOpen,
    onToggleModal: onAddTaskModalToggle,
  } = useToggleModal();
  return (
    <TodoListStyles>
      <h1>TodoList:</h1>
      <button className="btn_add-task" onClick={() => onAddTaskModalToggle()}>
        + Add new task
      </button>
      <AddTask
        isOpen={isAddTaskModalOpen}
        onCancel={onAddTaskModalToggle}
        addNewTask={addNewTask}
      />
      <Select
        style={{ width: 200 }}
        placeholder="Search to Select"
        optionFilterProp="children"
        onChange={changeFilterTask}
        options={[
          {
            value: 1,
            label: "All",
          },
          {
            value: 2,
            label: STATUS_CONSTANTS.complete,
          },
          {
            value: 3,
            label: STATUS_CONSTANTS.incomplete,
          },
        ]}
      />
      {!!tasksList.length ? (
        tasksList.map((item) => (
          <Task
            key={item.id}
            id={item.id}
            text={item.text}
            status={item.status}
            toggleTaskStatus={toggleTaskStatus}
            deleteTask={deleteTask}
            changeTextInTask={changeTextInTask}
          />
        ))
      ) : (
        <EmptyList />
      )}
    </TodoListStyles>
  );
};

export default TodoList;