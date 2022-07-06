import axios from "axios";

const todosClient = axios.create({
  baseURL: "/todos",
});

export { todosClient };
