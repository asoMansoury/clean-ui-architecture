import { useCallback, useEffect, useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { CanvasField } from '../../../components/CanvasField/CanvasField';
import { CheckBoxField } from '../../../components/CheckBoxField/CheckBoxFile';
import { TextAreaField } from '../../../components/TextAreaField/TextAreadField';
import { TextField } from '../../../components/TextField/TextField';
import classes from './EditContainer.module.scss';
import { TodoService } from '../../../services/Todo.service';

type EditContainerProps ={
    todoId:number,
    onSaveClicked:()=>void,
    onCancelClicked:()=>void;
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
        todoId,
        onCancelClicked,
        onSaveClicked,
        todoService
    }:EditContainerProps) =>{
    const [todo,setTodo] = useState<TodoState>({
        description:"",
        handNotes:"",
        isDone:false,
        task:""
    });

    useEffect(()=>{
        todoService.getTodo(todoId).then((todo)=>{
            setTodo(todo)
        });
    },[todoId]);

        const onClickedSaveButton =()=>{
            todoService.updateTodo(todoId,todo).then(()=>{
                onSaveClicked(); 
            });
        }

        const onCancelButton =()=>{

            onCancelClicked();   
        }

       const onFormChanged = (updatedState:Partial<TodoState>)=>{
            setTodo((currentState)=>({
                ...currentState,
                ...updatedState
            }))
        }

         

    return <>
        <h2>Edit Todo</h2>
        <div>
            <TextField label='Task' name='Task' value={todo.task} onInput={useCallback((value)=>onFormChanged({task:value}),[])}></TextField>
            <CheckBoxField name='IsDone' label='Is Done' value={todo.isDone} onInput={useCallback((value:boolean)=>onFormChanged({isDone:value}),[])}></CheckBoxField>
            <TextAreaField  name='Description' label='Description' value={todo.description} onInput={useCallback((value)=>onFormChanged({description:value}),[])}></TextAreaField>
            <CanvasField label='Hand Notes' value={todo.handNotes} onInput={useCallback((value)=>onFormChanged({handNotes:value}),[])}></CanvasField>
            <div className='flex mt-2'>
                <Button className="flex-frow-1 mr-2" primary onClick={onClickedSaveButton}>Save</Button>
                <Button className="flex-frow-1 mr-2" secondary onClick={onCancelButton}>Cancel</Button>
            </div>
        </div>
    </>
}