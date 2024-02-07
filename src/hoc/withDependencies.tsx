import { ElementType } from "react";
import { container } from "../dependencies";

export const WithDependency = (
    Component:ElementType,
    dependencies:{
        [key:string]:symbol
    }) =>{
    const props = {};
        // console.log({dependencies});
        // Object.keys(dependencies).forEach(propName=>{
        //     console.log(propName);
        //     console.log(dependencies[propName]);
        //     console.log(Object.getOwnPropertyDescriptor(dependencies,propName)?.value);
        //     console.log(container.get(dependencies[propName]))
        // });

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
  

 