import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from "native-base";
class HotCallComponent extends Component {
    constructor(props){
        super(props);
        this._ongoBack = this._ongoBack.bind(this);
        console.log('constructor', this.props);
    }
    _ongoBack() {
        
        this.props.navigation.setParams({ count: '213213' });
        console.log('_ongoBack', this.props.navigation);
        this.props.navigation.goBack();
        console.log('_ongoBack, goBack', this.props);
    }
    render() {
        console.log('constructor', this.props);
        return (
            <View>
                <Button onPress={this._ongoBack}>
                    <Text>HotCallComponent</Text>
                </Button>
            </View>
            
        );
    }
}

export default HotCallComponent;