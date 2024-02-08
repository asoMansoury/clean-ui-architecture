import { ComponentProps, ElementType, useContext } from "react"
import classes from './withSlideDrawer.module.scss';
import { useAppState } from "../customHooks/useAppSate";


export const withSlideDrawer = (Component:ElementType)=>{

    return function (props:ComponentProps<typeof Component>){

        const {appState} = useAppState();
        console.log(appState.isDrawerOpen,Component)
        return appState.isDrawerOpen===true?<div className={classes.EditTodoContainer}>
            <Component {...props}></Component>
        </div>:null;
    }
}