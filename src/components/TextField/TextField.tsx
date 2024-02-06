import classes from "./TextField.module.scss";
import { forwardRef} from "react";

type TextFieldProps = {
  value: string;
  onInput: (value:string)=> void;
  label?: string;
  name?: string;
  className?: string;
};

export const TextField = forwardRef<HTMLInputElement,TextFieldProps>(({onInput,value}:TextFieldProps,ref) => {



  return <input 
          ref={ref}
          value={value}
          onChange={event=>onInput(event.target.value)} 
          className={classes.TextField}
          type="text"
          ></input>
});