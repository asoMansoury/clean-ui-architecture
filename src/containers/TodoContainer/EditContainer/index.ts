import { dependencies } from '../../../dependencies';
import {WithDependency} from '../../../hoc/withDependencies';
import { EditContainer } from './EditContainer';

export default WithDependency(EditContainer,{
    todoService:dependencies.TodoService
})