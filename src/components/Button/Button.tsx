import { ReactNode } from "react"
import classes from './Button.module.scss';
type ButtonProps = {
    children:ReactNode,
    primary?:boolean;
    secondary?:boolean;
    transparent?:boolean;
    disabled?:boolean;
}
export const Button = ({children,primary,transparent}:ButtonProps) =>{
    let classNames = [classes.Button];
    if(primary)
        classNames.push(classes.Primary);
    if(transparent)
        classNames.push(classes.Transparent);
    return <button className={classNames.join(" ")}>
        {
            children
        }
    </button>
}