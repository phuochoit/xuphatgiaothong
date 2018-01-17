import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native'
import { styles, colormenu } from "../../assets/css/style";

class LoadingComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.flex1, styles.content_center]}>
                <ActivityIndicator size="large" color={colormenu} />
            </View>
        );
    }
}

export default LoadingComponent;

