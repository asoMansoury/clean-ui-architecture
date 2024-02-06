export class TodoService {
    getAllTodo(){
       return fetch("http://localhost:3001/todos")
       .then((response)=>response.json())
    }

    addToddo(task:string){
       return fetch("http://localhost:3001/todos",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({todo:task})
        })
        .then((response)=>response.json())
    }

    deleteTodo(id:number){
        return fetch("http://localhost:3001/todos",{
            method:"DELETE",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({id:id})
        })
        .then((response)=>response.json());
    }
}