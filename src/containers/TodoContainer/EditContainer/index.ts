import { dependencies } from '../../../dependencies';
import {WithDependency} from '../../../hoc/withDependencies';
import { withSlideDrawer } from '../../../hoc/withSlideDrawer';
import { EditContainer } from './EditContainer';

export default withSlideDrawer(WithDependency(EditContainer,{
    todoService:dependencies.TodoService
}))