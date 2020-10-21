import React from "react";

const Task = ({task, onShowRenameModal, onShowRemoveModal}) => {
  const {id, value} = task;
  return (
    <div>
      <span className="mr-3">{value}</span>
      <button type="button"
              className="border-0 btn-link mr-3 p-0"
              data-testid="item-rename" onClick={onShowRenameModal(task)}>rename
      </button>
      <button type="button"
              className="border-0 btn-link p-0"
              data-testid="item-remove" onClick={onShowRemoveModal(task)}>remove
      </button>
    </div>
  );
};

export default Task;