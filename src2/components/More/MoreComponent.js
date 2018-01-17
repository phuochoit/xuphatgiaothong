import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Linking, Image} from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body } from 'native-base';
//component
import HeaderComponent from "../Header/";
//styles
import { styles } from '../../../assets/css/style';

import { NOTICEBOARDDETAIL } from "../../values/screenName";

import { developer_google, google_app, google_app_magiamgia } from "../../service/string";

class MoreComponent extends Component {
    state = {}
    render() {
        return (
            <View style={[styles.background, styles.flex1]}>
                <HeaderComponent navigation={this.props.navigation} title="Nhiều Hơn" icon_home={true} go_back="" />
                <ScrollView style={[styles.home_scrollView]}>
                    <Card style={[styles.flex0]}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icon_ideas.png')} />
                                    <Body>
                                        <Text style={{fontSize: 18, fontWeight: 'bold', color:'#000'}}>Gợi Ý:</Text>
                                        <Text note>Mã Giảm Giá</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <TouchableOpacity onPress={() => {
                                Linking.openURL(google_app_magiamgia).catch(err => console.error('An error occurred', err));
                                }}>
                                <Image source={require('../../../assets/images/banner.png')} style={[styles.ideas_image]} />
                                </TouchableOpacity>
                            </CardItem>
                        
                    </Card>

                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(google_app).catch(err => console.error('An error occurred', err));
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icon_rate.png')} />
                                    <Body>
                                        <Text>Đánh Giá Ứng Dụng</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>

                    <Card style={[styles.flex0]}>
                        <TouchableOpacity onPress={() => {
                            Linking.openURL(developer_google).catch(err => console.error('An error occurred', err));
                        }}>
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../../../assets/images/icon_more.png')} />
                                    <Body>
                                        <Text>Ứng Dụng Khách</Text>
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

export default MoreComponent;