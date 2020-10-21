// @ts-check

import React, {useState} from 'react';
import {useImmer} from 'use-immer';
import getModal from './modals/index.js';
import Task from "./Task.jsx";

// NOTE use web hooks with https://github.com/immerjs/use-immer

// BEGIN (write your solution here)
const App = () => {
  const AddModal = getModal('adding');
  const RenameModal = getModal('renaming');
  const RemoveModal = getModal('removing');

  const [state, changeState] = useImmer({
    taskList: [
      {id: 345, value: 'Pop'}
    ],
    currentModal: '',
    currentTask: {}
  });

  const clearModalState = () => {
    changeState(state => {
      state.currentModal = '';
      state.currentTask = {};
    });
  };

  const showAddModal = () => {
    changeState(state => {
      state.currentModal = 'adding';
    });
  };

  const showRenameModal = (currentTask) => () => {
    if (state.currentModal !== '') {
      clearModalState();
    }
    changeState(state => {
      state.currentTask = currentTask;
      state.currentModal = 'renaming';
    });
  };

  const showRemoveModal = (currentTask) => () => {
    changeState(state => {
      state.currentTask = currentTask;
      state.currentModal = 'removing';
    });
  };

  const createNewTask = (newTask) => {
    changeState(state => {
      state.taskList.unshift(newTask);
    });
    clearModalState();
  };

  const renameTask = (changedTask) => {
    const {id, value} = changedTask;
    const changedTaskIndex = state.taskList.findIndex(item => item.id === id);
    if (changedTaskIndex !== -1) {
      changeState(state => {
        state.taskList[changedTaskIndex].value = value;
      });
    }
    clearModalState();
  };

  const removeTask = (task) => () => {
    changeState(state => {
      state.taskList = state.taskList.filter(item => item.id !== +task.id);
    });
    clearModalState();
  };

  const renderTaskList = () => {
    if (!state.taskList.length) {
      return false;
    }
    let taskList = state.taskList.map(task =>
      <Task key={task.id} task={task}
            onShowRenameModal={showRenameModal}
            onShowRemoveModal={showRemoveModal}/>);
    return taskList;
  };

  const renderModal = () => {
    switch (state.currentModal) {
      case 'adding':
        return <AddModal onGetNewTaskValue={createNewTask}
                         onCloseModal={clearModalState}/>;
      case 'renaming':
        return <RenameModal task={state.currentTask}
                            onChangeTask={renameTask}
                            onCloseModal={clearModalState}/>;
      case 'removing':
        return <RemoveModal onCloseModal={clearModalState}
                            onRemoveTask={removeTask}
                            task={state.currentTask}/>;
      default:
        return false;
    }
  };

  return (
    <>
      <div className="mb-3">
        <button type="button" data-testid="item-add" className="btn btn-secondary"
                onClick={showAddModal}>add
        </button>
      </div>
      {renderTaskList()}
      {renderModal()}
    </>
  );
};

export default App;
// END


