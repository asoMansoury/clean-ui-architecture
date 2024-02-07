
import { dependencies } from "../../dependencies";
import { WithDependency } from "../../hoc/withDependencies";
import { TodoContainer } from "./TodoContainer";


export default WithDependency(TodoContainer,{
    todoService:dependencies.TodoService,
  });