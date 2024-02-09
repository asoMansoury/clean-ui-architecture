
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
  // const location = window.location.pathname;

  const [location,setLocation]= useState(window.localStorage.pathname);
  useEffect(()=>{
    document.querySelectorAll("a").forEach((item)=>{
      item.addEventListener("click",(event)=>{
        event.preventDefault();
        let link = (event.target as HTMLAnchorElement).href;
        if(window.history.state.pathLink !== link){
          window.history.pushState({pathLink:link},"",link);
          setLocation(window.location.pathname);
        }
      })
    });

    window.addEventListener("popstate",(event)=>{
      setLocation((event.target as Window).location.pathname)
    });
  })

  return <>
  <Header></Header>
  <div className='mr-auto ml-auto' style={{width:"500px"}}>
    {/* <Provider store={store}>
      {
        location ==="/" && (
          <>
            <TodoContainer></TodoContainer>
            <EditContainer></EditContainer>
          </>
        )
      }
      {
        location==="/Stats" && <StatsContainer></StatsContainer>
      }
      </Provider> */}
  </div>
  </>
}

export default App;
