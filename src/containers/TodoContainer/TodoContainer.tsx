import { useState } from "react";
import { Button } from "../../components/Button/Button";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";
import { TextField } from "../../components/TextField/TextField";
import { AddTodoItem } from "../AddTodoItem/AddTodoItem";

export const TodoContainer = () =>{
    const [todos,setTodos] = useState<string[]>(['Do thing 1','Do thing 2','Do thing 3'])

    const onAddClicked = (task:string)=>{
        setTodos((prevTodos)=>{
            return [
                ...prevTodos,
                task
            ]
        });
    }

    return (
        <>
        <AddTodoItem  onAddClicked={onAddClicked}></AddTodoItem>
        {todos.map((item:string,index)=>(
                <TodoItem key={index} todo={item}></TodoItem>
                )
            )}
        </>
    )
}