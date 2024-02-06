import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";

export const TodoContainer = () =>{
    return (
        <>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        </>
    )
}