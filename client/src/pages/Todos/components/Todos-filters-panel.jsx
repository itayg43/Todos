import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Search, ButtonGroup } from "monday-ui-react-core";

import { TODOS_FILTERS } from "../../../helpers/constants";
import { changeSearchQuery, changeFilter } from "../../../redux/todos/actions";

const TodosFiltersPanel = () => {
  const dispatch = useDispatch();

  const { filter } = useSelector((state) => state.todosReducer);

  const onChangeSearchQuery = useCallback(
    (searchQuery) => {
      dispatch(changeSearchQuery(searchQuery));
    },
    [dispatch]
  );

  const onChangeFilter = useCallback(
    (filter) => {
      dispatch(changeFilter(filter));
    },
    [dispatch]
  );

  return (
    <Flex gap={Flex.gaps.SMALL}>
      <Search
        placeholder="Search..."
        size={Search.sizes.SMALL}
        onChange={onChangeSearchQuery}
      />
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
