import classes from './TextAreadField.module.scss';
type  TextAreaFieldProps = {
    value:string;
    label?:string;
    name?:string;
}
export const TextAreaField = ({value,label,name}:TextAreaFieldProps) =>{

    return <>
        {label? <label htmlFor={name}>{label}</label>:null}
        <textarea className={classes.TextAreaField} value={value}></textarea>
    </>
}