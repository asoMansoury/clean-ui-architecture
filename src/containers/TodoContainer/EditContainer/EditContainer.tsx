import { useCallback, useContext, useEffect, useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { CanvasField } from '../../../components/CanvasField/CanvasField';
import { CheckBoxField } from '../../../components/CheckBoxField/CheckBoxFile';
import { TextAreaField } from '../../../components/TextAreaField/TextAreadField';
import { TextField } from '../../../components/TextField/TextField';
import { TodoService } from '../../../services/Todo.service';
import { useAppState } from '../../../customHooks/useAppSate';

type EditContainerProps ={
    todoService:TodoService
}
type TodoState = {
    description:string;
    handNotes:string;
    task:string;
    isDone:boolean
}
export const EditContainer = (
    {
        todoService
    }:EditContainerProps) =>{
    const [todo,setTodo] = useState<TodoState>({
        description:"",
        handNotes:"",
        isDone:false,
        task:""
    });

    const {appState,setAppState} =  useAppState();

    useEffect(()=>{
        if(appState.editTodId!==-1){
            todoService.getTodo(appState.editTodId).then((todo)=>{
                setTodo(todo)
            });
        }
    },[appState.editTodId]);

        const onClickedSaveButton =()=>{
            todoService.updateTodo(appState.editTodId,todo).then(()=>{
                setAppState({editTodId:-1,isDrawerOpen:false});
            });
            
        }

        const onCancelButton =()=>{
            setAppState({editTodId:-1,isDrawerOpen:false});
        }

       const onFormChanged = (updatedState:Partial<TodoState>)=>{
            setTodo((currentState)=>({
                ...currentState,
                ...updatedState
            }))
        }

    const onTaskChanged = useCallback((value:string)=>onFormChanged({task:value}),[]);
    const onDoneChanged = useCallback((value:boolean)=>onFormChanged({isDone:value}),[]);
    const onDescriptionChanged = useCallback((value:string)=>onFormChanged({description:value}),[]);
    const onHandnotesChanged = useCallback((value:string)=>onFormChanged({handNotes:value}),[]);

    return <>
        <h2>Edit Todo</h2>
        <div>
            <TextField label='Task' name='Task' value={todo.task} onInput={onTaskChanged}></TextField>
            <CheckBoxField name='IsDone' label='Is Done' value={todo.isDone} onInput={onDoneChanged}></CheckBoxField>
            <TextAreaField  name='Description' label='Description' value={todo.description} onInput={onDescriptionChanged}></TextAreaField>
            <CanvasField label='Hand Notes' value={todo.handNotes} onInput={onHandnotesChanged}></CanvasField>
            <div className='flex mt-2'>
                <Button className="flex-frow-1 mr-2" primary onClick={onClickedSaveButton}>Save</Button>
                <Button className="flex-frow-1 mr-2" secondary onClick={onCancelButton}>Cancel</Button>
            </div>
        </div>
    </>
}