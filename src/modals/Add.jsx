import React, {useEffect, useRef} from 'react';
import _ from 'lodash';
import {useFormik} from 'formik';
import {Modal, FormGroup, FormControl} from 'react-bootstrap';

// BEGIN (write your solution here)
const Add = ({onGetNewTaskValue, onCloseModal}) => {
  const inputRef = useRef(null);
  useEffect(() => inputRef.current.focus());
  const formik = useFormik({
    initialValues: {
      body: '',
    },
    onSubmit: values => {
      onGetNewTaskValue({id: +_.uniqueId(), value: values.body});
    },
  });
  return (
    <Modal.Dialog>
      <Modal.Header closeButton onClick={onCloseModal}>
        <Modal.Title>Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={formik.handleSubmit}>
          <FormGroup>
            <FormControl data-testid="input-body"
                         name="body"
                         required
                         ref={inputRef}
                         value={formik.values.body}
                         onChange={formik.handleChange}/>
          </FormGroup>
          <input className="btn btn-primary" type="submit" value="submit"/>
        </form>
      </Modal.Body>
    </Modal.Dialog>
  );
};

export default Add;
// END
