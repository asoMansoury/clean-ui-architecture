//------------------------------------------Do not use this HOC at all!---------------------------------------- 
//This Higher-Order Component (HOC) is only for demonstrating how React.lazy works internally. 
//Instead of using this HOC, use React.lazy for lazy loading components.

import { useEffect, useState } from "react";

const Loading = ()=><>Loading ...</>;
const withAsyncLoader = (importFn: any) => {
 return () =>{
  const [Component,setComponent]= useState<any>(null);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(()=>{
    importFn().then((module:any) => {
      setComponent(module.default as any);
      setIsLoading(false);
    });
  },[]);
  
  return isLoading?<Loading></Loading>:<Component></Component>;
  }

}
