import { AxiosHttpClientAdapter } from "../adapters/AxiosHttpClientAdapter";
import { HttpClientAdapter } from "../adapters/HttpClientAdapter";
import { Todo } from "../models/containers/Todo";

export class TodoService {
     private readonly http:HttpClientAdapter;
    constructor(httpAdapter:HttpClientAdapter){
        this.http = httpAdapter;
    }

    // private readonly http:AxiosHttpClientAdapter;
    // constructor(httpAdapter:AxiosHttpClientAdapter){
    //     this.http = httpAdapter;
    // }

    getTodo(id:number){
        return this.http.get<Todo>(`/todos/${id}`);
    }
    getAllTodo(params?:{query:{isDone:string}}){
       return this.http.get<Todo[]>("/todos",params);
    }

    addToddo(task:string){
       return this.http.post<{todo:string}>("/todos",{todo:task});
    }

    deleteTodo(id:number){
        return this.http.delete<{id:number}>("/todos",{id:id});
    }

    updateTodo(id:number,task:Partial<Todo>){
        return this.http.patch<Partial<Todo>>("/todos/"+id,task);
    }
}