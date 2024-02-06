import classes from "./TextField.module.scss";
import { forwardRef, memo } from "react";

type TextFieldProps = {
  value: string;
  onInput?: any;
  label?: string;
  name?: string;
  className?: string;
};

export const TextField = ({onInput,value}:TextFieldProps) => {
  return <input 
          value={value}
          onChange={event=>onInput(event.target.value)} 
          className={classes.TextField}></input>
}