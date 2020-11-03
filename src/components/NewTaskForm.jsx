// @ts-check

import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, SubmissionError } from "redux-form";
import * as actions from "../actions/index.js";

const actionCreators = {
  addTask: actions.addTask,
};

class NewTaskForm extends React.Component {
  // BEGIN (write your solution here)
  addNewTask = (newTask) => {
    const { addTask, reset } = this.props;
    addTask(newTask.text);
    reset();
  };
  // END

  render() {
    const { handleSubmit, submitting, pristine, error } = this.props;
    // BEGIN (write your solution here)
    return (
      <form className="form-inline" onSubmit={handleSubmit(this.addNewTask)}>
        <div className="form-group mx-3">
          <Field name="text" required type="text" component="input" />
        </div>
        <input
          type="submit"
          disabled={submitting || pristine ? "disabled" : ""}
          className="btn btn-primary btn-sm"
          value="Add"
        />
      </form>
    );
    // END
  }
}

const ConnectedNewTaskForm = connect(null, actionCreators)(NewTaskForm);
export default reduxForm({
  form: "newTask",
})(ConnectedNewTaskForm);
