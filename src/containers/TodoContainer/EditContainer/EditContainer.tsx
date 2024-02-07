import { Button } from '../../../components/Button/Button';
import { CanvasField } from '../../../components/CanvasField/CanvasField';
import { CheckBoxField } from '../../../components/CheckBoxField/CheckBoxFile';
import { TextAreaField } from '../../../components/TextAreaField/TextAreadField';
import { TextField } from '../../../components/TextField/TextField';
import classes from './EditContainer.module.scss';
export const EditContainer = () =>{
    return <div className={classes.EditTodoContainer}>
        <h2>Edit Todo</h2>
        <div>
            <TextField label='Task' name='Task' value='' onInput={()=>{}}></TextField>
            <CheckBoxField name='IsDone' label='Is Done'></CheckBoxField>
            <TextAreaField name='Description' label='Description' value='123'></TextAreaField>
            <CanvasField ></CanvasField>
            <div>
                <Button primary>Save</Button>
                <Button secondary>Cancel</Button>
            </div>
        </div>
    </div>
}