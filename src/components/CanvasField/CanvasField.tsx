import classes from './CanvasField.module.scss';

type CanvasFieldProp = {
    name?:string;
    label?:string;
    value?:string;
}
export const CanvasField = ({name,label,value}:CanvasFieldProp) =>{
    return <>
        {label? <label htmlFor={name}>{label}</label>:null}
        <canvas className={classes.CanvasField}></canvas>
    </>
}