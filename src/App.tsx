
import './App.css';
import "./styles/general.scss";
import Header from './partials/Header/Header';
import { Provider } from 'react-redux';
import { store } from './redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { withSuspense } from './hoc/withSuspense';
import { PageLayout } from './components/PageLayout.tsx/PageLayout';


const AsyncTodoContainer = withSuspense(()=>import("./pages/Todo"));
const AsyncEditTodoContainer = withSuspense(()=>import("./pages/Todo/EditContainer"));
const AsyncStatsContainer = withSuspense(()=>import("./pages/Stats"));
const AsyncAboutContainer = withSuspense(()=>import("./pages/About"));

function App() {
  return <>
        <BrowserRouter>
          <Header></Header>
          <PageLayout>
            <Provider store={store}>
                <Routes>
                  <Route path="/" element={
                    <>
                      {AsyncTodoContainer}
                      {AsyncEditTodoContainer}
                    </>
                  }></Route>
                  <Route path='/stats' element={AsyncStatsContainer}></Route>
                  <Route path='/about' element={AsyncAboutContainer}></Route>
                </Routes>
              </Provider>
          </PageLayout>
        </BrowserRouter>
  </>
}

export default App;
