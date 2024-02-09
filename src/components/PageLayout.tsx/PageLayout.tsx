import { ReactNode } from "react";
type PageLayoutProps = {
    children:ReactNode
}
export const PageLayout = ({children}:PageLayoutProps) => {

    return <div className='mr-auto ml-auto' style={{width:"500px"}}>
        {children}
    </div>
}