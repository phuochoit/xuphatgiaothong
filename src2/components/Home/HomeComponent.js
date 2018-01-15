import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from "native-base";
class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this._ongonavigate = this._ongonavigate.bind(this);
        console.log('naviagation', this.props.navigation);
    }
    componentDidMount(){
        console.log('naviagation', this.props.navigation);
        this.props.onFetchScooter();
    }
    _ongonavigate(){
        this.props.navigation.navigate('HOTCALL', { name: 'Brent' });
    }
    
    render() {
        console.log('scooter---', this.props.scooter);
        console.log('naviagation', this.props.navigation);
        return (
            <View>
                <Button onPress={this._ongonavigate}>
                    <Text>HotCallComponent</Text>
                </Button>
            </View>
        );
    }
}

export default HomeComponent;