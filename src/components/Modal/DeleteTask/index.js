import { Modal, Typography } from "antd";
import React from "react";

const DeleteTask = ({ isOpen, onCancel, deleteTask, id }) => {
  const handleOk = () => {
    deleteTask(id);
    onCancel();
  };
  return (
    <Modal
      title="Delete Task"
      open={isOpen}
      onOk={handleOk}
      onCancel={onCancel}
    >
      <Typography>Are you sure?</Typography>
    </Modal>
  );
};

export default DeleteTask;
