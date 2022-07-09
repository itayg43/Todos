import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex } from "monday-ui-react-core";
import Add from "monday-ui-react-core/dist/icons/Add";
import * as Yup from "yup";

import { Form, FormTextField, FormSubmitButton } from "../../../components/forms";
import { submitTodo } from "../../../redux/todos/actions/submit-todo";

const todoInitialValues = {
  value: "",
};

const todoSchema = Yup.object().shape({
  value: Yup.string().required("* Required"),
});

const TodoForm = () => {
  const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.todosState);

  const onSubmitTodo = useCallback(
    ({ value }) => {
      dispatch(submitTodo(value));
    },
    [dispatch]
  );

  return (
    <Form
      initialValues={todoInitialValues}
      validationSchema={todoSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmitTodo(values);
        resetForm();
      }}
    >
      <Flex gap={Flex.gaps.SMALL}>
        <FormTextField
          field="value"
          placeholder="Add new todo"
          loading={isLoading}
          autoFocus
        />
        <FormSubmitButton label="Add" icon={Add} />
      </Flex>
    </Form>
  );
};

export default TodoForm;
