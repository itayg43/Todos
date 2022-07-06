import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, ButtonGroup } from "monday-ui-react-core";

import { TODOS_FILTERS } from "../../../helpers/constants";
import { changeFilter } from "../../../redux/todos/actions";

const TodosFiltersPanel = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector((state) => state.todosReducer);

  const onChangeFilter = useCallback(
    (filter) => {
      dispatch(changeFilter(filter));
    },
    [dispatch]
  );

  return (
    <Flex justify={Flex.justify.CENTER}>
      <ButtonGroup
        onSelect={onChangeFilter}
        options={Object.values(TODOS_FILTERS).map((filter) => ({
          text: filter,
          value: filter,
        }))}
        value={filter}
      />
    </Flex>
  );
};

export default TodosFiltersPanel;
