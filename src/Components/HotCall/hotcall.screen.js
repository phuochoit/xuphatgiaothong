import React from "react";
import { Image, View } from "react-native";
import { Container, Text, Button } from "native-base";

import HeaderScreen from "../Header";

import { styles} from "../../../assets/css/style";
class HotCallScreen extends React.Component {
    render() {
        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderScreen navigation={this.props.navigation} icon_home={false} title="Đường Dây Nóng" go_back="Home" />
                <Text>Đường Dây Nóng</Text>
            </View>
        );
    }
}

export default HotCallScreen;