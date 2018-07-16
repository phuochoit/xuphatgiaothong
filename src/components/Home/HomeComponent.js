// react
import React, { Component } from 'react';
import { Text, View, Image, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

//component
import HeaderComponent from "../Header/";
import { AdMobBannerHeader } from "../admob";
//styles
import { styles } from '../../../assets/css/style';
//
import { SCOOTER } from "../../values/screenName";

class HomeComponent extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={[styles.background,styles.flex1]}>
                <HeaderComponent navigation={this.props.navigation} title="Lỗi Vi Phạm" icon_home={true} go_back="" />
                <ScrollView style={[styles.home_scrollView]}>
                    <AdMobBannerHeader bannerSize="banner" />
                    <View style={[styles.item_xp_wraper_boxshadow, styles.home_scrollView_view]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(SCOOTER, { loai_xe: 2});
                        }}>
                            <View>
                            <Image source={require('../../../assets/images/icons-xemay.jpg')} style={[styles.home_image]} />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.item_xp_wraper_boxshadow, styles.home_scrollView_view]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(SCOOTER, { loai_xe: 1 });
                        }}>
                            <Image source={require('../../../assets/images/icons-oto.jpg')} style={[styles.home_image]} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.item_xp_wraper_boxshadow, styles.home_scrollView_view]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(SCOOTER, { loai_xe: 22 });
                        }}>
                            <Image source={require('../../../assets/images/icons-xebus.jpg')} style={[styles.home_image]} />
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.item_xp_wraper_boxshadow, styles.home_scrollView_view]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(SCOOTER, { loai_xe: 33 });
                        }}>
                            <Image source={require('../../../assets/images/icons-xetai.jpg')} style={[styles.home_image]} />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HomeComponent;

