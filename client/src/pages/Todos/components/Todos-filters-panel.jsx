import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Search, ButtonGroup } from "monday-ui-react-core";

import { FILTERS } from "../../../helpers/constants";
import { changeSearchQuery } from "../../../redux/todos/actions/change-search-query";
import { changeSelectedFilter } from "../../../redux/todos/actions/change-selected-filter";

const TodosFiltersPanel = () => {
  const dispatch = useDispatch();

  const { selectedFilter } = useSelector((state) => state.todosState);

  const onChangeSearchQuery = useCallback(
    (searchQuery) => {
      dispatch(changeSearchQuery(searchQuery));
    },
    [dispatch]
  );

  const onChangeFilter = useCallback(
    (filter) => {
      dispatch(changeSelectedFilter(filter));
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
        options={Object.values(FILTERS.TODOS).map((filter) => ({
          text: filter,
          value: filter,
        }))}
        value={selectedFilter}
      />
    </Flex>
  );
};

export default TodosFiltersPanel;
