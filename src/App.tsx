import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./styles/general.scss";
import { TodoContainer } from './containers/TodoContainer/TodoContainer';
import Header from './partials/Header/Header';

function App() {
  return <>
  <Header></Header>
  <div className='mr-auto ml-auto' style={{width:"500px"}}>
    <TodoContainer></TodoContainer>
  </div>
  </>
}

export default App;
