import { HttpClientAdapter } from "../../adapters/HttpClientAdapter";
import { TodoService } from "../../services/Todo.service";
import { TodoContainer } from "./TodoContainer";

export const WithDependencyOfTodoService = (Component:any) =>{
    const httpAdapter = new HttpClientAdapter({baseUrl:process.env.REACT_APP_API_URL!.toString()});
    const todoService = new TodoService(httpAdapter);
    
    return () => <Component todoService={todoService}></Component>
  }
  

  export default WithDependencyOfTodoService(TodoContainer);