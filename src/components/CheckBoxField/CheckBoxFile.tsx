import { ReactNode } from 'react';
import classes from './CheckBoxField.module.scss';

type CheckBoxFieldProps = {
    value?:boolean,
    label?:string,
    name?:string;
}
export const CheckBoxField =({value,label,name}:CheckBoxFieldProps) =>{
    return <div className={classes.CheckBox}>
        <input name={name} type="checkbox" ></input>
        {label? <label htmlFor={name} className='ml-1'>{label}</label>:null}
    </div>
}