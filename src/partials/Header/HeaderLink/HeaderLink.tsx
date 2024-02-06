import { ReactNode } from 'react';
import classes from './HeaderLink.module.scss';

type HeaderLinkProps = {
    url:string,
    children:ReactNode
}

export const HeaderLink =({children,url}:HeaderLinkProps) =>{
    return (
        <a href={url}  className={classes.HeaderLink + " mr-2 ml-1"} >
            {children}
        </a>
    )
}