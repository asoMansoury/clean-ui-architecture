// This is a Higher-Order Component (HOC) used for Dependency Injection.
// Wrap all your components with this HOC to enable the use of Dependency Injection feature.
// This should be used for all your pages to be able to utilize the Dependency Injection feature.


import { ComponentProps, ElementType } from "react";
import { container } from "../dependencies";


export const WithDependency = (
    Component:ElementType,
    dependencies:{
        [key:string]:symbol
    }) =>{
    const resolvedDependencies = {};
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

            Object.defineProperty(resolvedDependencies,propName,{
                value:dependency,
                enumerable:true
            });
    });

    return (props:ComponentProps<typeof Component>) => <Component {...props} {...resolvedDependencies}></Component>
  }
  

 