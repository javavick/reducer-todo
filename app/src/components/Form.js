import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const TodoForm = () => {
  return (
    <Form>
      <Field type="text" name="item" placeholder="e.g. Commit Murder" />
      <button>Submit</button>
    </Form>
  );
};

const FormikTodoForm = withFormik({
  mapPropsToValues({ item }) {
    return {
      item: item || ""
    };
  },

  validationSchema: Yup.object().shape({
    item: Yup.string().required("Required")
  }),

  handleSubmit(values, { props, resetForm }) {
    console.log(props.state);
    props.dispatch({
      type: "SUBMIT",
      payload: { ...values, completed: false, id: Date.now() }
    });
    resetForm();
  }
})(TodoForm);

export default FormikTodoForm;
