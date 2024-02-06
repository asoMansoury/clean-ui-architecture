import classes from "./TextField.module.scss";
import { forwardRef, memo, useEffect, useRef } from "react";

type TextFieldProps = {
  value: string;
  onInput: (value:string)=> void;
  label?: string;
  name?: string;
  className?: string;
};

export const TextField = ({onInput,value}:TextFieldProps) => {

  const inputFieldRef = useRef<HTMLInputElement>(null);
  useEffect(()=>{
    inputFieldRef.current?.focus();
  },[])

  return <input 
          ref={inputFieldRef}
          value={value}
          onChange={event=>onInput(event.target.value)} 
          className={classes.TextField}
          type="text"
          ></input>
}