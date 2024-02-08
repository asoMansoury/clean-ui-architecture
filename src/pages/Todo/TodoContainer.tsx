import { useContext, useEffect, useState } from "react";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";
import { Todo } from "../../models/containers/Todo";
import { TodoService } from "../../services/Todo.service";
import { ButtonSelect } from "../../components/ButtonSelect/ButtonSelect";
import { useAppState } from "../../customHooks/useAppSate";

type TodoContianerProps = {
    todoService:TodoService
}
export const TodoContainer = ({todoService}:TodoContianerProps) =>{
    const {appState,setAppState} = useAppState();
    const [todos,setTodos] = useState<Todo[]>([]);
    const [todoStateFilter,setTodoStateFilter] = useState<string>("all");

    const fetchTodos = () =>{
        return todoService.getAllTodo()
                        .then((todoes:Todo[])=>{
                            setTodos(todoes);
                        });
    }
    

    useEffect(()=>{
        if(appState.editTodId === -1){
            fetchTodos();
        }
    },[appState.editTodId])

    const onDoneClicked =(todoId:number,isDone:boolean) =>{
        todoService.updateTodo(todoId,{isDone:isDone}).then((()=>{
            fetchTodos()
        }));
    };

    const onAddClicked = (task:string)=>{
        todoService.addToddo(task).then((()=>{
            fetchTodos()
        }));
    };


    const onDeleteClicked =(id:number)=>{
        todoService.deleteTodo(id).then((()=>{
            fetchTodos()
        }));
    }

    const onEditClicked= (id:number)=>{
        setAppState({editTodId:id,isDrawerOpen:true})
    }

    const buttonSelectOptions = [
        {label:"All",value:"all"},
        {label:"Done",value:"true"},
        {label:"Not Done",value:"false"}
    ];

    const onSelectTodoStateFilter = (value:string) =>{
        setTodoStateFilter(value);
        todoService.getAllTodo({query:{isDone:value}}).then((todo:Todo[])=>{
            setTodos(todo);
        })
    }

    return (
        <>
        <AddTodoItem  onAddClicked={onAddClicked}></AddTodoItem>
         <div className="mt-2">
            <ButtonSelect value={todoStateFilter} onInput={(value)=>onSelectTodoStateFilter(value)} options={buttonSelectOptions}></ButtonSelect>
         </div>
        {todos.map((item:Todo,index)=>(
                <TodoItem 
                    key={index} 
                    todo={item} 
                    onDoneClicked ={onDoneClicked}
                    onDeleteClicked={onDeleteClicked} 
                    onEditClicked={onEditClicked}></TodoItem>
                )
            )}
        </>
    )
}