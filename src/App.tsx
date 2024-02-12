
import './App.css';
import "./styles/general.scss";
import Header from './partials/Header/Header';
import EditContainer from './pages/Todo/EditContainer';
import  TodoContainer  from './pages/Todo';
import { Provider } from 'react-redux';
import { store } from './redux';
import  StatsContainer  from './pages/Stats';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  AboutContainer  from './pages/About';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';


function App() {

  return <>
  <Header></Header>
  <div className='mr-auto ml-auto' style={{width:"500px"}}>
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<>
          <TodoContainer></TodoContainer>
          <EditContainer></EditContainer>
        </>}></Route>
        <Route path='/stats' element={<StatsContainer></StatsContainer>}></Route>
        <Route path='/about' element={<AboutContainer></AboutContainer>}></Route>
      </Routes>
      </BrowserRouter>
    </Provider>
  </div>
  </>
}

export default App;
