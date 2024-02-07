import { useEffect, useState } from "react";
import classes from "./TodoContainer.module.scss";
import { TodoItem } from "./TodoItem/TodoItem";
import { AddTodoItem } from "./AddTodoItem/AddTodoItem";
import { Todo } from "../../models/containers/Todo";
import { TodoService } from "../../services/Todo.service";
import EditContainer  from "./EditContainer";

type TodoContianerProps = {
    todoService:TodoService
}
export const TodoContainer = ({todoService}:TodoContianerProps) =>{
    const [todos,setTodos] = useState<Todo[]>([]);
    const [selectedTask,setSelectedTask] = useState<number>(-1);

    const fetchTodos = () =>{
        return todoService.getAllTodo()
                        .then((todoes:Todo[])=>{
                            setTodos(todoes);
                        });
    }
    

    useEffect(()=>{
        fetchTodos();
    },[])

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
        setSelectedTask(id);
    }

    const closeDrawer =() =>{
        setSelectedTask(-1);
        fetchTodos()
    }

    return (
        <>
        <AddTodoItem  onAddClicked={onAddClicked}></AddTodoItem>
        {todos.map((item:Todo,index)=>(
                <TodoItem 
                    key={index} 
                    todo={item} 
                    onDoneClicked ={onDoneClicked}
                    onDeleteClicked={onDeleteClicked} 
                    onEditClicked={onEditClicked}></TodoItem>
                )
            )}
        {selectedTask!==-1?<EditContainer                                                 
                                        todoId = {selectedTask}
                                        onSaveClicked={closeDrawer} 
                                        onCancelClicked={closeDrawer} ></EditContainer>:null}
        </>
    )
}