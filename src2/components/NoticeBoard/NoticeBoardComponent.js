import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body } from 'native-base';
//component
import HeaderComponent from "../Header/";
//styles
import { styles } from '../../../assets/css/style';

import { NOTICEBOARDDETAIL } from "../../values/screenName";

class NoticeBoardComponent extends Component {
    state = {}
    render() {
        return (
            <View style={[styles.background, styles.flex1]}>
                <HeaderComponent navigation={this.props.navigation} title="Biển Báo" icon_home={true} go_back="" />
                <ScrollView style={[styles.home_scrollView]}>
                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(NOTICEBOARDDETAIL, { loai_xe: 1 });
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icons/icon_bb_cam.png')} />
                                    <Body>
                                        <Text>Biển Báo Cấm</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(NOTICEBOARDDETAIL, { loai_xe: 2 });
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icons/icon_bb_nguyhiem.png')} />
                                    <Body>
                                        <Text>Biển Báo Nguy Hiểm</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(NOTICEBOARDDETAIL, { loai_xe: 3 });
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icons/icon_bb_hieulenh.png')} />
                                    <Body>
                                        <Text>Biển Báo Hiệu Lệnh</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(NOTICEBOARDDETAIL, { loai_xe: 4 });
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icons/icon_bb_chidan.png')} />
                                    <Body>
                                        <Text>Biển Báo Chỉ Dẫn</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate(NOTICEBOARDDETAIL, { loai_xe: 5 });
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icons/icon_bb_phu.png')} />
                                    <Body>
                                        <Text>Biển Báo Phụ</Text>
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

export default NoticeBoardComponent;