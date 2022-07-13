# SETUP

- Open docker
- Open terminal and run:

  ```
  docker run -p 3306:3306 --name todos_db -e MYSQL_ROOT_PASSWORD=password -e MYSQL_ROOT_HOST=% -e MYSQL_DATABASE=todos_db -d mysql/mysql-server
  ```

  ```
  cd server && npm i
  ```

  ```
  cd storage/database && npx sequelize-cli db:migrate
  ```

  ```
  cd ../../ && npm run build
  ```

  ```
  npm run start
  ```

- Open browser and go to "localhost:3001"

## Exercise 8:

- [x] Unit tests - test `itemsEntitiesReducer` - add 3 unit tests

- [ ] Snapshot tests - 2 components: ListItemComponent, AboutComponent

- [ ] Integration tests - send 2 items to the ListContainer

- [ ] Create a new test that mocks `fetchItems` and make sure it has been called (do it under the same test file as the ListContainer tests)
