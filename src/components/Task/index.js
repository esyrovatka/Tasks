import React, { useState } from "react";
import { TaskStyles } from "./Task.styles";
import { Button, Col, Input, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import DeleteTask from "../Modal/DeleteTask";
import useToggleModal from "../../hooks/useToggleModal";

const Task = ({
  text,
  status,
  toggleTaskStatus,
  id,
  deleteTask,
  changeTextInTask,
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const { isModalOpen, onToggleModal } = useToggleModal();
  const saveNewText = () => {
    setIsEditMode((prev) => !prev);
    changeTextInTask(newTextTask, id);
  };

  const cancelNewText = () => {
    setIsEditMode((prev) => !prev);
    setNewTextTask(text);
  };

  const [newTextTask, setNewTextTask] = useState(text);
  const handleChange = (e) => {
    setNewTextTask(e.target.value);
  };
  return (
    <TaskStyles>
      <DeleteTask
        isOpen={isModalOpen}
        onCancel={onToggleModal}
        deleteTask={deleteTask}
        id={id}
      />

      <Col span={5}>
        Task:
        {isEditMode ? (
          <Input
            className="content"
            value={newTextTask}
            onChange={handleChange}
          />
        ) : (
          <Typography className="content">{text}</Typography>
        )}
      </Col>
      <Col span={5}>
        Status:
        <Typography
          className={`status ${status}`}
          onClick={() => toggleTaskStatus(id)}
        >
          {status}
        </Typography>
      </Col>
      <Col span={2}>
        <Typography onClick={() => onToggleModal()}>
          <DeleteOutlined />
        </Typography>
      </Col>
      <Col span={2}>
        {isEditMode ? (
          <>
            <Button onClick={() => saveNewText()}>Save</Button>
            <Button onClick={() => cancelNewText()}>Cancel</Button>
          </>
        ) : (
          <Typography onClick={() => setIsEditMode((prev) => !prev)}>
            <EditOutlined />
          </Typography>
        )}
      </Col>
    </TaskStyles>
  );
};

export default Task;
