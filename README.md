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

## Exercise 6:

- [x] Remove `app.use(express.static(path.join(__dirname, 'dist')))` from your `server.js` file

- [x] Delete `src/server/dist` **ONLY** when your new client is up and running

- [x] Initialize your React project in the `src` folder using [create-react-app](https://create-react-app.dev/docs/getting-started/) with the name `client`

- [x] Decompose your Todo App into components (controlled and uncontrolled)

- [x] Re-Implement the Todo App using hooks

- [x] Use [**propTypes** & **defaultProps**](https://reactjs.org/docs/typechecking-with-proptypes.html) to add type-checking to your components

- [x] Add error handling for communication issues with your backend (Empty state / Loader / Something else)

- [x] Use components from the [Vibe Design System](https://github.com/mondaycom/monday-ui-react-core) (monday.com's component library)

## Exercise 7:

- [x] Use redux actions for communicating with the server (fetching items, adding a new item, etc.)

- [x] Move the items from local component's state into the store

- [x] Handle failure of requests from the server

- [x] Handle loading

- [x] Add search

- [x] Add the ability to hide items that were marked as done or to show only them

- [x] \* Debounce search

- [x] \* Implement an option to restore the last item that was deleted

- [x] Add redux logger middleware to your application

## Exercise 8:

- [x] Unit tests - test `itemsEntitiesReducer` - add 3 unit tests

- [ ] Snapshot tests - 2 components: ListItemComponent, AboutComponent

- [ ] Integration tests - send 2 items to the ListContainer

- [ ] Create a new test that mocks `fetchItems` and make sure it has been called (do it under the same test file as the ListContainer tests)
