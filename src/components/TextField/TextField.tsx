import classes from "./TextField.module.scss";
import { forwardRef} from "react";

type TextFieldProps = {
  value: string;
  onInput: (value:string)=> void;
  label?: string;
  name?: string;
  className?: string;
};

export const TextField = forwardRef<HTMLInputElement,TextFieldProps>(
  ({onInput,value,label,name}:TextFieldProps,ref) => {



  return <>
    {label? <label htmlFor={name}>{label}</label>:null}
    <input 
          name={name}
          ref={ref}
          value={value}
          onChange={event=>onInput(event.target.value)} 
          className={classes.TextField}
          type="text"
          ></input>
  </>
});