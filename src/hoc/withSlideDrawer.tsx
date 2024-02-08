import { ComponentProps, ElementType } from "react"
import classes from './withSlideDrawer.module.scss';

export const withSlideDrawer = (Component:ElementType)=>{

    return function (props:ComponentProps<typeof Component>){
        return <div className={classes.EditTodoContainer}>
            <Component {...props}></Component>
        </div>
    }
}