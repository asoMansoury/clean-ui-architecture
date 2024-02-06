import { HttpClientAdapter } from "../../adapters/HttpClientAdapter";
import { dependencies } from "../../dependencies";
import { WithDependency } from "../../hoc/withDependencies";
import { TodoService } from "../../services/Todo.service";
import { TodoContainer } from "./TodoContainer";


  export default WithDependency(TodoContainer,{
    todoService:dependencies.TodoService,
  });