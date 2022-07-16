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

- [x] Unit test - `todosReducer`

- [x] Snapshot test - `TodoListItem`

- [x] Integration test - `TodoList` with: 1 pending, 1 completed, and 1 deleted todos

- [x] Coverage - get to 50% coverage for `todosReducer` file

- [ ] Add an E2E test to the project using cypress
