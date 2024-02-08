import { Dispatch, SetStateAction } from "react";

export type AppStateType = {
    appState:{
      editTodId:number,
      isDrawerOpen:boolean
    },
    setAppState:Dispatch<SetStateAction<{editTodId:number;isDrawerOpen:boolean}>>
  }
