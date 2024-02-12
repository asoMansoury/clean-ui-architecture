//This is our container for registering our services here.
//As a sample We registered two services into our container.
//

import { HttpClientAdapter } from './adapters/HttpClientAdapter';
import { TodoService } from './services/Todo.service';

class DependenyContianer {
    private _dependencies ={};

    add<T>(key:symbol,dependency:T){
        Object.defineProperty(this._dependencies,key,{
            value:dependency
        });
    }

    get<T>(key:symbol): T{
        return Object.getOwnPropertyDescriptor(this._dependencies,key)?.value;
    }
}
const httpAdapter = new HttpClientAdapter({baseUrl:process.env.REACT_APP_API_URL!.toString()});
const todoService = new TodoService(httpAdapter);

const dependencies = {
    TodoService:Symbol('TodoService')
}

const container = new DependenyContianer();
container.add(dependencies.TodoService,todoService);

export {container,dependencies};



 