import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body } from 'native-base';

import HeaderComponent from "../Header/";
import { SEARCHDETAIL } from "../../values/screenName";
import { styles } from "../../../assets/css/style";
import { AdMobBannerHeader} from "../admob";

class SearchComponent extends Component {
    state = {}
    render() {
        return (
            <View style={[styles.background, styles.flex1]}>
                <HeaderComponent navigation={this.props.navigation} title="Tìm Kiếm" icon_home={true} go_back="" />
                <AdMobBannerHeader bannerSize="banner" />
                <ScrollView style={[styles.home_scrollView]}>
                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(SEARCHDETAIL, { table_name: 'Xuphat', search_title: 'Lỗi Vi Phạm' });
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icon_xuphat.png')} />
                                    <Body>
                                        <Text>Lỗi Vi Phạm</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(SEARCHDETAIL, { table_name: 'bien_bao', search_title: 'Biển Báo' });
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icon_warning.png')} />
                                    <Body>
                                        <Text>Biển Báo</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(SEARCHDETAIL, { table_name: 'duong_day_nong', search_title: 'Đường Dây Nóng' });
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icons-call.png')} />
                                    <Body>
                                        <Text>Đường Dây Nóng</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                </ScrollView>
            </View>
        );
    }
}

export default SearchComponent;