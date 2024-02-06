import { Button } from '../../../components/Button/Button';
import classes from './TodoItem.module.scss';

export const TodoItem = () =>{
    return (<div className={classes.TodoItem + " flex"}>
        <div>
            <input type="checkbox"></input>
        </div>
        <div className="mr-auto">Task to do</div>
        <div >
            <Button primary={true} transparent={true}>
             <i className="fa fa-pencil"></i>
            </Button>
        </div>
        <div>
            <Button primary={true}>
                <i className="fa fa-trash"></i>
            </Button>
        </div>
    </div>
    )
}