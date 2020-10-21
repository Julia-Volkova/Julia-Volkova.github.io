import React from 'react';
import {Modal, FormGroup} from 'react-bootstrap';

// BEGIN (write your solution here)
const Remove = ({onCloseModal, onRemoveTask, task}) => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={onCloseModal}>
        <Modal.Title>Remove</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={onRemoveTask(task)}>
          <FormGroup>
            <input className="btn btn-danger" type="submit" value="remove"/>
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  )
};

export default Remove;
// END
