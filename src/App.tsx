
import './App.css';
import "./styles/general.scss";
import Header from './partials/Header/Header';
import TodoContainer from './containers/TodoContainer';


function App() {

  return <>
  <Header></Header>
  <div className='mr-auto ml-auto' style={{width:"500px"}}>
     <TodoContainer></TodoContainer>
  </div>
  </>
}

export default App;
