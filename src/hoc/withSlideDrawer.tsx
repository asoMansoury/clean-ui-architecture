import { ComponentProps, ElementType, useContext } from "react"
import classes from './withSlideDrawer.module.scss';
import { useAppState } from "../customHooks/useAppSate";
import { useSelector } from "react-redux";
import { RootState } from "../redux";


export const withSlideDrawer = (Component:ElementType)=>{

    return function (props:ComponentProps<typeof Component>){
        const todoDrawer = useSelector((state: RootState) => state.todo);
        return todoDrawer.isDrawerOpen===true?<div className={classes.EditTodoContainer}>
            <Component {...props}></Component>
        </div>:null;
    }
}