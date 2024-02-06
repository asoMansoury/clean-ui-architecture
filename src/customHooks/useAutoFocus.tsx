import { useEffect, useRef } from "react";

export const useAutoFocus = () =>{
    const elementRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        elementRef.current?.focus();
    },[]);

    return elementRef;
}