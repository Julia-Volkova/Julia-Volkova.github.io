import React, {useEffect, useRef} from 'react';
import {useFormik} from 'formik';
import {Modal, FormGroup, FormControl} from 'react-bootstrap';

// BEGIN (write your solution here)
const Rename = ({onChangeTask, onCloseModal, task}) => {
  const renameTaskInput = useRef(null);
  useEffect(() => {
    renameTaskInput.current.value = task.value;
    renameTaskInput.current.focus();
    renameTaskInput.current.select();
  });
  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: values => {
      onChangeTask({id: task.id, value: values.body});
    },
  });
  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={onCloseModal}>
        <Modal.Title>Rename</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl data-testid="input-body"
                         name="body"
                         required
                         ref={renameTaskInput}
                         value={formik.values.body}
                         onChange={formik.handleChange}/>
          </FormGroup>
          <input className="btn btn-primary" type="submit" value="submit"/>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  )
};

export default Rename;
// END
