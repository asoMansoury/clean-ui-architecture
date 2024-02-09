
import './App.css';
import "./styles/general.scss";
import Header from './partials/Header/Header';
import { AppStateProvider, useAppState } from './customHooks/useAppSate';
import EditContainer from './pages/Todo/EditContainer';
import  TodoContainer  from './pages/Todo';
import { Provider } from 'react-redux';
import { store } from './redux';
import { StatsContainer } from './pages/Stats/StatsContainer';
import { useEffect, useState } from 'react';



function App() {

  return <>
  <Header></Header>
  <div className='mr-auto ml-auto' style={{width:"500px"}}>
    <Provider store={store}>
          <TodoContainer></TodoContainer>
          <EditContainer></EditContainer>
          <StatsContainer></StatsContainer>

      </Provider>
  </div>
  </>
}

export default App;
