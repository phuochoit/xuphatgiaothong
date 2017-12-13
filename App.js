/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import HomeScreenRouter from "./src/Components/";


export default class App extends Component {
    constructor(props) {
        super(props);     
    }
    render() {

        return (
            <HomeScreenRouter/>
        );
    }
}

