import React from 'react';
import { createRoot } from 'react-dom/client';


import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './Home';
import { GlobalStyle, theme } from './lib/theme';
import { ThemeProvider } from 'styled-components';
import Header from './components';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import reducers from './redux/reducers'





const container = document.getElementById('root')!;
const root = createRoot(container);
const sagaMiddleware = createSagaMiddleware();


// const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))


root.render(
  <React.StrictMode>
  
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Home/>}></Route>
    </Routes>
    </BrowserRouter>

  <GlobalStyle/>
   </React.StrictMode>
);


reportWebVitals();
