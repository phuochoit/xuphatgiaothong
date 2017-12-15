import React from "react";
import { View, BackHandler } from "react-native";
import { Header, Left, Right, Title,  Button, Body, Icon, StyleProvider, getTheme} from "native-base";
import { AdMobInterstitial, BANNER_FULL } from 'react-native-admob';

import { styles, colorbgbox } from "../../../assets/css/style";
import { myThemeHeader } from "../../../assets/css/my_material";
const number_back = 0;

class HeaderScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            show_ads: false
        });
        this._onBackPress = this._onBackPress.bind(this);
        this._ongoBack = this._ongoBack.bind(this);
        
    }
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this._onBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this._onBackPress);
    }

    _onBackPress() {
        number_back++;
        if (number_back == 4) {
            this.setState({
                show_ads: true
            });
            number_back = 0;
        }
        if (number_back == 0) {
            this.setState({
                show_ads: false
            });
        }
    }
    _ongoBack(){
        this.props.navigation.goBack();
    }
    render() {  
        if (this.state.show_ads) {
            // Display an interstitial
            AdMobInterstitial.setAdUnitID('ca-app-pub-1070789846238739/5771328983');
            AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
            AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
        }
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
                        onPress={this._ongoBack}>
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