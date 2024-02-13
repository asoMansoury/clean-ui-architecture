
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
import { Menu } from './partials/MenuBar/Menu';


function App() {

  return <>

  <div >

    <Provider store={store}>
      <BrowserRouter>
        <Header></Header>
        <Menu></Menu>

        <div className='mr-auto ml-auto' style={{width:"1440px"}} >
          <Routes>
            <Route path="/" element={<>
              <TodoContainer></TodoContainer>
              <EditContainer></EditContainer>
            </>}></Route>
            <Route path='/system' element={<StatsContainer></StatsContainer>}></Route>
            <Route path='/about' element={<AboutContainer></AboutContainer>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
  </>
}

export default App;
