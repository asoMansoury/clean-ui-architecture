import { MouseEventHandler, ReactNode } from "react"
import classes from './Button.module.scss';
type ButtonProps = {
    children:ReactNode,
    primary?:boolean,
    secondary?:boolean,
    transparent?:boolean,
    disabled?:boolean,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?:'button' | 'submit'
}

export const Button = ({
    children,
    primary,
    transparent,
    onClick,
    type="button"
}:ButtonProps) =>{
    let classNames = [classes.Button];
    if(primary)
        classNames.push(classes.Primary);
    if(transparent)
        classNames.push(classes.Transparent);

    return <button type={type} onClick={onClick} className={classNames.join(" ")}>
        {children}
    </button>
}