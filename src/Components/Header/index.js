import React from "react";
import { View, BackHandler } from "react-native";
import { Header, Left, Right, Title,  Button, Body, Icon, StyleProvider, getTheme} from "native-base";
// import { AdMobInterstitial } from 'react-native-admob';

import { styles, colorbgbox } from "../../../assets/css/style";
import { myThemeHeader } from "../../../assets/css/my_material";
let number_back = 0;

class HeaderComponent extends React.Component {
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
        number_back++;
        if (number_back == 2) {
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
        this.props.navigation.goBack();
    }
    render() {  
        // if (this.state.show_ads) {
        //     AdMobInterstitial.setAdUnitID('ca-app-pub-1070789846238739/5771328983');
        //     AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
        //     AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
        // }
        button_left = <View />;
        if(this.props.go_back){
            button_left = (
                <Button
                    transparent
                    onPress={this._ongoBack}>
                    <Icon name="ios-arrow-back-outline" style={[styles.search_header_icon]} color={colorbgbox} />
                </Button>
            );
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
                        <Right style={[styles.flex1]}/>
                    </Header>
                </StyleProvider>
            </View>
        );
    }
}

export default HeaderComponent;