import { Input, Modal } from "antd";
import React, { useState } from "react";

const AddTask = ({ isOpen, onCancel, addNewTask }) => {
  const [newText, setNewText] = useState("");
  const handleChange = (e) => {
    setNewText(e.target.value);
  };
  const handleOk = () => {
    if (!!newText.length) addNewTask(newText);
    setNewText("");
    onCancel();
  };
  return (
    <Modal
      title="Add new Task"
      open={isOpen}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Input
        placeholder="describe the task"
        value={newText}
        onChange={(e) => handleChange(e)}
      />
    </Modal>
  );
};

export default AddTask;
