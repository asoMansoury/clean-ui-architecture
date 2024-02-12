//This Hoc is the most important hoc in our project.
//This Hoc take two params, the first one is your component,
//The second paramters is for injecteing your services which you have already injected in dependencies.tsx

import { ComponentProps, ElementType } from "react";
import { container } from "../dependencies";

export const WithDependency = (
    Component:ElementType,
    dependencies:{
        [key:string]:symbol
    }) =>{
    const resolvedDependencies = {};

        Object.keys(dependencies).forEach(propName =>{
            const dependencyKey = Object.getOwnPropertyDescriptor(dependencies,propName)?.value;
            const dependency = container.get(dependencyKey);

            Object.defineProperty(resolvedDependencies,propName,{
                value:dependency,
                enumerable:true
            });
    });

    return (props:ComponentProps<typeof Component>) => <Component {...props} {...resolvedDependencies}></Component>
  }
  

 