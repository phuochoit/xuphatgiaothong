import React, { Component } from 'react';
import { Image, View, FlatList, TouchableOpacity, Linking, ActivityIndicator} from "react-native";
import { Text, Thumbnail, Content, Icon } from "native-base";
import { isEmpty, isNull } from "lodash";
import SQLite from 'react-native-sqlite-storage';

import { AdMobBannerContent, AdMobBannerHeader } from "../admob";
//style
import { styles, thumbnail_xp } from "../../../assets/css/style";

//component
import HeaderComponent from "../Header/";
import ItemsComponent from "./ItemsComponent";
import LoadingComponent from "../loading";
// service
import { get_image_xu_phat } from "../../Service/service";

let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite" });

class HomeDetailComponent extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            result: null,
            loading: false
        });

        this._getData = this._getData.bind(this);
    }
    componentWillMount() {
        this._getData();
        
    }
    componentDidMount() {

    }

    _getData() {
        let record = []
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM XuPhat AS xp WHERE xp.loai_xe IN (' + getIdLoaiXe(this.props.navigation.state.params.loai_xe) +')  AND xp.group_value = ' + this.props.navigation.state.params.group_value + ' AND xp.id != ' + this.props.navigation.state.params.id + ' ORDER BY xp.ten_loi ASC LIMIT 0,5', [], (tx, results) => {
                let len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    record[i] = row;
                }
                this.setState({
                    result: record,
                });
            });
        }, null, null);
    }
    componentWillUnmount() {
        // db.close();
    }
    render() {

        const { loading } = this.state;
        const { params } = this.props.navigation.state;
        image_group = get_image_xu_phat(params.group_value, params.loai_xe);
        phat_bo_sung = null;
       
        if (!isEmpty(params.phat_bo_sung)) {
            phat_bo_sung = (
                <View style={[styles.detail_xp_box]}>
                    <Text style={[styles.detail_xp_text_bold]}>Hình Phạt Bổ Sung:
                        <Text style={[styles.detail_xp_text]}> {params.phat_bo_sung}</Text>
                    </Text>
                </View>
            );
        }
        if (loading)
            return (
                <View style={[styles.flex1, styles.background]}>
                    <HeaderComponent navigation={this.props.navigation} title={params.ten_loi} icon_home={false} go_back={true} />
                    <LoadingComponent/>
                </View>
            );
        
        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderComponent navigation={this.props.navigation} title={params.ten_loi} icon_home={false} go_back={true} />
                <Content style={[styles.flex1, styles.detail_xp_wacrapt]}>
                    <AdMobBannerHeader bannerSize="banner" />
                    <View style={[styles.detail_xp_box, styles.flex_row]}>
                        <View style={[styles.item_xp_left, { flex: 2 }]}>
                            <Thumbnail square style={[styles.detail_xp_left_icon]} source={image_group} />
                        </View>
                        <View style={[styles.detail_xp_right_conetnet, { flex: 8 }]}>
                            <Text style={[styles.item_xp_title]}>{params.ten_loi}</Text>
                        </View>
                    </View>
                    <View style={[styles.detail_xp_box]}>
                        <Text style={[styles.detail_xp_text_bold]}>Điều Khoản:
                            <Text style={[styles.detail_xp_text]}> {params.dieu_khoan}</Text>
                        </Text>
                    </View>
                    <View style={[styles.detail_xp_box]}>
                        <Text style={[styles.detail_xp_text_bold]}>Đối Tượng:
                            <Text style={[styles.detail_xp_text]}> {params.doi_tuong}</Text>
                        </Text>
                    </View>
                    <View style={[styles.detail_xp_box]}>
                        <Text style={[styles.detail_xp_text_bold]}>Nội Dung:
                            <Text style={[styles.detail_xp_text]}> {params.noi_dung}</Text>
                        </Text>
                    </View>
                    {phat_bo_sung}
                    <View style={[styles.detail_xp_box]}>
                        <Text style={[styles.detail_xp_text_bold]}>Mức Phạt:
                            <Text style={[styles.detail_xp_text_bold]}> {params.muc_phat}</Text>
                        </Text>
                    </View>
                       <View style={[styles.detail_xp_menuhv]}>
                        <Icon ios='ios-list-outline' android="ios-list" style={[styles.detail_xp_menu_icon]} />
                        <Text style={[styles.detail_xp_menu_title]}>Hành Vi Liên Quan</Text>
                    </View>
                    <AdMobBannerContent bannerSize="mediumRectangle" />
                    <FlatList
                        ListHeaderComponent={() => {
                            return (<View style={[styles.height10]} />);
                        }}
                        ListFooterComponent={() => {
                            return (<View style={[styles.height10]} />);
                        }}
                        data={this.state.result}
                        renderItem={({ item, index }) => {
                            return (<ItemsComponent item={item} index={index} navigation={this.props.navigation} />);
                        }}
                        keyExtractor={item => item.id}
                    />
                </Content>
            </View>
        );
    }
}

export default HomeDetailComponent;