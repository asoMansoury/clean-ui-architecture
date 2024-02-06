import { useEffect, useState } from "react";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";
import { AddTodoItem } from "../AddTodoItem/AddTodoItem";
import { Todo } from "../../models/containers/Todo";

export const TodoContainer = () =>{
    const [todos,setTodos] = useState<Todo[]>([]);

    

    useEffect(()=>{
        fetch("http://localhost:3001/todos").then((response)=>response.json())
        .then((todoes:Todo[])=>{
            setTodos(todoes);
        });
    },[])

    const onAddClicked = (task:string)=>{
        // setTodos((prevTodos)=>{
        //     return [
        //         ...prevTodos,
        //         task
        //     ]
        // });
    }

    return (
        <>
        <AddTodoItem  onAddClicked={onAddClicked}></AddTodoItem>
        {todos.map((item:Todo,index)=>(
                <TodoItem key={index} todo={item}></TodoItem>
                )
            )}
        </>
    )
}