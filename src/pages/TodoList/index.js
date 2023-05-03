import React from "react";
import { TodoListStyles } from "./TodoList.styles";
import useTodoList, { STATUS_CONSTANTS } from "./useTodoList";
import EmptyList from "../../components/EmptyList";
import AddTask from "../../components/Modal/AddTask";
import useToggleModal from "../../hooks/useToggleModal";
import { Button, Select } from "antd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Task from "../../components/Task";

const TodoList = () => {
  const {
    addNewTask,
    toggleTaskStatus,
    deleteTask,
    changeTextInTask,
    changeFilterTask,
    filterList,
    saveList,
    moveTask,
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
      {!!filterList.length ? (
        <DndProvider backend={HTML5Backend}>
          {filterList.map((task, i) => (
            <Task
              key={task.id}
              index={i}
              id={task.id}
              text={task.text}
              moveTask={moveTask}
              status={task.status}
              toggleTaskStatus={toggleTaskStatus}
              deleteTask={deleteTask}
              changeTextInTask={changeTextInTask}
            />
          ))}
        </DndProvider>
      ) : (
        <EmptyList />
      )}
      {!!filterList.length && (
        <Button onClick={saveList}>Save Todo List</Button>
      )}
    </TodoListStyles>
  );
};

export default TodoList;
