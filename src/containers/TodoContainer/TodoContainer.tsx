import { useEffect, useState } from "react";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";
import { AddTodoItem } from "../AddTodoItem/AddTodoItem";
import { Todo } from "../../models/containers/Todo";

export const TodoContainer = () =>{
    const [todos,setTodos] = useState<Todo[]>([]);
    const fetchTodos = () =>{
        fetch("http://localhost:3001/todos").then((response)=>response.json())
        .then((todoes:Todo[])=>{
            setTodos(todoes);
        });
    }
    

    useEffect(()=>{
        fetchTodos();
    },[])

    const onAddClicked = (task:string)=>{
        fetch("http://localhost:3001/todos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({todo:task})
        }).then((()=>{
            fetchTodos()
        }));
    };


    const onDeleteClicked =(id:number)=>{
        fetch("http://localhost:3001/todos",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({id:id})
        }).then((()=>{
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