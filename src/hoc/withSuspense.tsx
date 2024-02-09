//This is HOC to wrap all of components with React.lazy and set Suspense over components.
//Always use this HOC and wrap your components with this HOC 
//You can see a sample in App.tsx in root folder.

import React, { ComponentType, Suspense } from "react";

const Loading = ()=><>Loading ...</>;
type ComponentImportFnCallbackType = () => Promise<{default:ComponentType<any>}>;
export const withSuspense = (ComponentImportFnCallback:ComponentImportFnCallbackType) =>{
    const ComponentAsync = React.lazy(ComponentImportFnCallback);
    return <Suspense fallback={<Loading></Loading>}>
        <ComponentAsync></ComponentAsync>
  </Suspense>
}