import React from "react";
import { View } from "react-native";
import { Header, Left, Right, Title,  Button, Body, Icon, StyleProvider, getTheme} from "native-base";

import { styles, colorbgbox } from "../../../assets/css/style";
import { myThemeHeader } from "../../../assets/css/my_material";
class HeaderScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render() {        
        button_left = (
            <Button
                transparent
                onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                <Icon name="ios-menu-outline" style={[styles.search_header_icon]}  color={colorbgbox} />
            </Button>
        );

        if (!this.props.icon_home){
            if (this.props.go_back == ""){
                button_left = (
                    <Button
                        transparent
                        onPress={() => this.props.navigation.goBack()}>
                        <Icon name="ios-arrow-back-outline" style={[styles.search_header_icon]}  color={colorbgbox} />
                    </Button>
                );
            }else{
                button_left = (
                    <Button
                        transparent
                        onPress={() => this.props.navigation.navigate(this.props.go_back)}>
                        <Icon name="ios-arrow-back-outline" style={[styles.search_header_icon]}  color={colorbgbox} />
                    </Button>
                );
            }
            
        }
        return (
            <View>
                <StyleProvider style={getTheme(myThemeHeader)}>
                    <Header 
                        hasTabs 
                    >
                        <Left style={[styles.flex1]}>
                            {button_left}
                        </Left>
                        <Body style={[styles.header_body]}>
                            <Title style={[styles.header_title]}>{this.props.title}</Title>
                        </Body>
                        <Right style={[styles.flex1]}>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("Search")}>
                                <Icon name="ios-search-outline" style={[styles.search_header_icon]}  color={colorbgbox} />
                            </Button>
                        </Right>
                    </Header>
                </StyleProvider>
            </View>
        );
    }
}

export default HeaderScreen;