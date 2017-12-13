import React from "react";
import { Image, View } from "react-native";
import { Container, Text, Button } from "native-base";

import HeaderScreen from "../Header";

import { styles} from "../../../assets/css/style";
class NoticeBoardScreen extends React.Component {
    render() {
        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderScreen navigation={this.props.navigation} icon_home={false} title="Biển Báo" go_back="Home" />
                <Text>Biển Báo</Text>
            </View>
        );
    }
}

export default NoticeBoardScreen;