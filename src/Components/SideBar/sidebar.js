import React from "react";
import { Image, View, TouchableOpacity, Linking} from "react-native";
import { Text,Thumbnail} from "native-base";

import { styles } from "../../../assets/css/style";
import { developer_google, google_app } from "../../Service/string";
export default class SideBar extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={[styles.sidebar_wacrapt]}>
                <View style={[styles.sidebar_box]}>
                    <TouchableOpacity 
                        onPress={() => {
                            this.props.navigation.navigate("Home")
                        }}
                    >
                        <View style={[styles.sidebar_box_items]}>
                            <Thumbnail square
                                style={[styles.sidebar_items_icon]}
                                source={require('../../../assets/images/icon_xuphat.png')} />
                            <Text style={[styles.sidebar_items_title]}>Xử Phạt</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.sidebar_box]}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("NoticeBoard")
                        }}
                    >
                        <View style={[styles.sidebar_box_items]}>
                            <Thumbnail square  
                                style={[styles.sidebar_items_icon]}
                                source={require('../../../assets/images/icon_warning.png')} />
                            <Text style={[styles.sidebar_items_title]}>Biển Báo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.sidebar_box]}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate("HotCall")
                        }}
                    >
                        <View style={[styles.sidebar_box_items]}>
                            <Thumbnail square
                                style={[styles.sidebar_items_icon]}
                                source={require('../../../assets/images/phone_call_menu.png')} />
                            <Text style={[styles.sidebar_items_title]}>Đường Dây Nóng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.sidebar_box]}>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(google_app).catch(err => console.error('An error occurred', err));
                        }}
                    >
                        <View style={[styles.sidebar_box_items]}>
                            <Thumbnail square
                                style={[styles.sidebar_items_icon]}
                                source={require('../../../assets/images/icon_rate.png')} />
                            <Text style={[styles.sidebar_items_title]}>Đánh Giá</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.flex1, { justifyContent: 'center', alignItems: 'center', }]}>
                    <TouchableOpacity
                        onPress={() => {
                            Linking.openURL(developer_google).catch(err => console.error('An error occurred', err));
                        }}
                    >
                        <View style={[styles.sidebar_box_items]}>
                            <Thumbnail square
                                style={[styles.sidebar_items_icon]}
                                source={require('../../../assets/images/menu_store.png')} />
                            <Text style={[styles.sidebar_items_title]}>Ứng Dụng Khác</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

