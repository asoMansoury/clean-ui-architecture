import { ReactNode } from 'react';
import classes from './CheckBoxField.module.scss';

type CheckBoxFieldProps = {
    children?:ReactNode
}
export const CheckBoxField =({children}:CheckBoxFieldProps) =>{
    return <div className={classes.CheckBox}>
        <input  type="checkbox" ></input>
    </div>
}