import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './App';
import AppWithNavigationState  from "./src2/navigators/";
//import redux
import { createStore, applyMiddleware  } from "redux";
import { Provider } from "react-redux";
import AllReducer from "./src2/reducers/";

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src2/sagas/rootSaga'; 

const sagaMiddleware = createSagaMiddleware();
let store = createStore(AllReducer, applyMiddleware(sagaMiddleware));

const App = () =>(
    <Provider store={store}>
        <AppWithNavigationState/>
    </Provider>
)
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('xuphatgiaothong', () => App);
