
import './App.css';
import "./styles/general.scss";
import Header from './partials/Header/Header';
import TodoContainer from './containers/TodoContainer';
import EditContainer from './containers/TodoContainer/EditContainer';
import { AppState, AppStateProvider, useAppState } from './customHooks/useAppSate';



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
