
import './App.css';
import "./styles/general.scss";
import Header from './partials/Header/Header';
import { AppStateProvider, useAppState } from './customHooks/useAppSate';
import EditContainer from './pages/Todo/EditContainer';
import  TodoContainer  from './pages/Todo';



function App() {

  const {appState,setAppState} = useAppState();

  return <>
  <Header></Header>
  <div className='mr-auto ml-auto' style={{width:"500px"}}>
    <AppStateProvider>
        <TodoContainer></TodoContainer>
        <EditContainer></EditContainer>
     </AppStateProvider>
  </div>
  </>
}

export default App;
