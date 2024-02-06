import { Button } from "../../components/Button/Button";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";

export const TodoContainer = () =>{
    const todos = ['Do thing 1','Do thing 2','Do thing 3'];
    return (
        <>
        <form>
            <div className="flex">
                <div className="flex-grow-1 mr-2">
                    <input type="text"></input>
                </div>

                <div><Button primary> Add</Button></div>
            </div>
        </form>
        {todos.map((item:string,index)=>(
                <TodoItem key={index} todo={item}></TodoItem>
                )
            )}
        </>
    )
}