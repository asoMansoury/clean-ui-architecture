import { useState } from "react"
import { TextField } from "../../components/TextField/TextField"
import { Button } from "../../components/Button/Button"
type AddTodoItemProps = {
    onAddClicked:(task:string)=>void;
}
export const AddTodoItem = ({onAddClicked}:AddTodoItemProps) =>{
    const [task,setTask] = useState<string>("");


    const onClickAdd =() =>{
        onAddClicked(task);
        setTask("");
    }

    const OnTextChange=(value:string)=>{
        setTask(value); 
    }
    return (
        <form>
        <div className="flex">
            <div className="flex-grow-1 mr-2">
                <TextField value={task} onInput={OnTextChange}></TextField>
            </div>

            <div><Button onClick={onClickAdd} primary> Add</Button></div>
        </div>
    </form>
    )
}