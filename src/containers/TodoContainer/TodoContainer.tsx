import { useState } from "react";
import { Button } from "../../components/Button/Button";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";
import { TextField } from "../../components/TextField/TextField";

export const TodoContainer = () =>{
    const [todos,setTodos] = useState<string[]>(['Do thing 1','Do thing 2','Do thing 3'])
    const [task,setTask] = useState<string>("");


    const onAddClicked = (event:any) =>{
        setTodos((prevTodos)=>{
            return [
                ...prevTodos,
                task
            ]
        });
    }

    const OnTextChange=(value:string)=>{
        setTask(value); 
    }
    return (
        <>
        <form>
            <div className="flex">
                <div className="flex-grow-1 mr-2">
                    <TextField value={task} onInput={OnTextChange}></TextField>
                </div>

                <div><Button onClick={onAddClicked} primary> Add</Button></div>
            </div>
        </form>
        {todos.map((item:string,index)=>(
                <TodoItem key={index} todo={item}></TodoItem>
                )
            )}
        </>
    )
}