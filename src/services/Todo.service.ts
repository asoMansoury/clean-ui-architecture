import { HttpClientAdapter } from "../adapters/HttpClientAdapter";
import { Todo } from "../models/containers/Todo";

export class TodoService {
    private readonly http:HttpClientAdapter;
    constructor(httpAdapter:HttpClientAdapter){
        this.http = httpAdapter;
    }
    getAllTodo(){
       return this.http.get<Todo[]>("/todos");
    }

    addToddo(task:string){
       return this.http.post<{todo:string}>("/todos",{todo:task});
    }

    deleteTodo(id:number){
        return this.http.delete<{id:number}>("/todos",{id:id});
    }
}