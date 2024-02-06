import { Button } from '../../../components/Button/Button';
import { Todo } from '../../../models/containers/Todo';
import classes from './TodoItem.module.scss';
type TodoItemProps = {
    todo:Todo;
    onDeleteClicked:(id:number)=>void;
}

export const TodoItem = ({todo,onDeleteClicked}:TodoItemProps) =>{
    return (<div className={classes.TodoItem + " flex"}>
        <div>
            <input type="checkbox"></input>
        </div>
        <div className="mr-auto">{todo.task}</div>
        <div >
            <Button primary={true} transparent={true}>
             <i className="fa fa-pencil"></i>
            </Button>
        </div>
        <div>
            <Button primary={true} onClick={()=>onDeleteClicked(todo.id)}>
                <i className="fa fa-trash"></i>
            </Button>
        </div>
    </div>
    )
}