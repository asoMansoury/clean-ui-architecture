import { useEffect, useState } from "react";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";
import { Todo } from "../../models/containers/Todo";
import { TodoService } from "../../services/Todo.service";

type TodoContianerProps = {
    todoService:TodoService
}
export const TodoContainer = ({todoService}:TodoContianerProps) =>{
    const [todos,setTodos] = useState<Todo[]>([]);
    const fetchTodos = () =>{
        return todoService.getAllTodo()
                        .then((todoes:Todo[])=>{
                            setTodos(todoes);
                        });
    }
    

    useEffect(()=>{
        fetchTodos();
    },[])

    const onAddClicked = (task:string)=>{
        todoService.addToddo(task).then((()=>{
            fetchTodos()
        }));
    };


    const onDeleteClicked =(id:number)=>{
        todoService.deleteTodo(id).then((()=>{
            fetchTodos()
        }));
    }

    return (
        <>
        <AddTodoItem  onAddClicked={onAddClicked}></AddTodoItem>
        {todos.map((item:Todo,index)=>(
                <TodoItem key={index} todo={item} onDeleteClicked={onDeleteClicked}></TodoItem>
                )
            )}
        </>
    )
}