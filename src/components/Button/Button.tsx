import { MouseEventHandler, ReactNode } from "react"
import classes from './Button.module.scss';
type ButtonProps = {
    children:ReactNode,
    primary?:boolean;
    secondary?:boolean;
    transparent?:boolean;
    disabled?:boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
    children,
    primary,
    transparent,
    onClick
}:ButtonProps) =>{
    let classNames = [classes.Button];
    if(primary)
        classNames.push(classes.Primary);
    if(transparent)
        classNames.push(classes.Transparent);

    return <button type="button" onClick={onClick} className={classNames.join(" ")}>
        {children}
    </button>
}