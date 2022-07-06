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
