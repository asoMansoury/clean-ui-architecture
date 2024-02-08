import { Component, ComponentProps, Dispatch, ElementType, ReactNode, SetStateAction, createContext, useContext } from "react";

type AppStateType = {
    appState:{
      editTodId:number,
      isDrawerOpen:boolean
    },
    setAppState:Dispatch<SetStateAction<{editTodId:number;isDrawerOpen:boolean}>>
  }


  export const AppState = createContext<AppStateType>({
    appState:{editTodId:-1,isDrawerOpen:false },
    setAppState:()=>{} 
  })
  


export const useAppState = () =>useContext(AppState);
//   export const useAppState = ()=>{
//     const [appState,setAppState] = useState({
//         editTodId:-1,
//         isDrawerOpen:false
//       })
    
//       return {appState,setAppState}
//   }
  ///custom hook for use AppState defined


  type AppStateProviderProps = {
    children:ReactNode
  }
  //Right now we are going to define a new hof to inject this custom hook to all them.
  export const AppStateProvider = ({children}:AppStateProviderProps)=>{

    const {appState,setAppState} = useAppState();

    return <AppState.Provider value={{appState,setAppState}}>
        {children}
    </AppState.Provider>
  }