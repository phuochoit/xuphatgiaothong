import React from "react";
import { View, BackHandler } from "react-native";
import { Header, Left, Right, Title,  Button, Body, Icon, StyleProvider, getTheme} from "native-base";
import firebase from 'react-native-firebase';

import { styles, colorbgbox } from "../../../assets/css/style";
import { myThemeHeader } from "../../../assets/css/my_material";
import {ADS_BANNER_INTERSTITIAL_ID} from "../../Service/string";

var number_back = 0;
const advert = firebase.admob().interstitial(ADS_BANNER_INTERSTITIAL_ID);
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();
advert.loadAd(request.build());

class HeaderComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
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
        // 
        if (number_back == 4) {
            advert.show();
            console.log('number_back', number_back);
            number_back = 0;
        }
    }
    _ongoBack(){
        number_back++;
        if (number_back == 4) {
            advert.show();
            number_back = 0;
        }
        this.props.navigation.goBack();
    }
    render() {  
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