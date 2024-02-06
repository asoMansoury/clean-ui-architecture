import { ElementType } from "react";
import { container } from "../dependencies";

export const WithDependency = (
    Component:ElementType,
    dependencies:{
        [key:string]:symbol
    }) =>{
    const props = {};

        Object.keys(dependencies).forEach(propName =>{
        const dependencyKey = Object.getOwnPropertyDescriptor(dependencies,propName)?.value;
        const dependency = container.get(dependencyKey);

        Object.defineProperty(props,propName,{
            value:dependency,
            enumerable:true
        });
    });

    return () => <Component {...props}></Component>
  }
  

 