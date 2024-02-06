import { FormEventHandler, useState } from "react"
import { TextField } from "../../components/TextField/TextField"
import { Button } from "../../components/Button/Button"
type AddTodoItemProps = {
    onAddClicked:(task:string)=>void;
}
export const AddTodoItem = ({onAddClicked}:AddTodoItemProps) =>{
    const [task,setTask] = useState<string>("");


    const onFormSubmitted:FormEventHandler<HTMLFormElement> =(event) =>{
        event.preventDefault();
        onAddClicked(task);
        setTask("");
    }

    const OnTextChange=(value:string)=>{
        setTask(value); 
    }
    return (
        <form onSubmit={onFormSubmitted}>
        <div className="flex">
            <div className="flex-grow-1 mr-2">
                <TextField value={task} onInput={OnTextChange}></TextField>
            </div>

            <div><Button type="submit" primary> Add</Button></div>
        </div>
    </form>
    )
}