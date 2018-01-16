import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
// import App from './App';
import AppNavigators  from "./src2/navigators/AppNavigators";


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <AppNavigators />
        );
    }
}

AppRegistry.registerComponent('xuphatgiaothong', () => App);
