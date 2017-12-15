import React, { Component } from 'react';
import { View, TouchableOpacity, Linking} from "react-native";
import { Thumbnail, Text } from "native-base";
import { styles, colorbgbox, thumbnail_xp } from "../../../assets/css/style";
import { get_image_bb, get_image_xu_phat } from "../../Service/service";
import SQLite from 'react-native-sqlite-storage';

let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class ItemsSearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [],
        });
        this._onPhoneCall = this._onPhoneCall.bind(this);
        this._onXPDetail = this._onXPDetail.bind(this);
    }
    _onPhoneCall() {
        Linking.openURL('tel:' + encodeURIComponent(this.props.item.noi_dung)).catch(err => console.error('An error occurred', err));
    }
    _onXPDetail(){
        let record = null;
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM XuPhat as xp WHERE xp.id = ' + this.props.item.id, [], (tx, results) => {
                let len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    record = row;
                }
                this.props.navigation.navigate('HomeDetail', record);
            });
        }, null, null);

        
    }
    render() {
        const { item, index } = this.props;
        var image, ten, item_noi_dung = null;
        switch (item.name_table) {
            case 'XuPhat':
                image = get_image_xu_phat(parseInt(item.anh), parseInt(item.loai_xe));
                if (item.noi_dung) {
                    item_noi_dung = item.noi_dung.substring(0, 50) + '...';
                }
                return (
                    <View style={[styles.item_xp_wraper, styles.item_xp_wraper_boxshadow, styles.marginHorizontal]} key={index}>
                        <View style={[styles.item_xp_left, styles.flex1]}>
                            <Thumbnail source={image} square size={thumbnail_xp} />
                        </View>
                        <View style={[styles.flex40, styles.paddingHorizontal, styles.justifyContent_center]}>
                            <Text style={[styles.hot_call_tentinh]}>{item.ten}</Text>
                            <Text style={[styles.item_xp_noi_dung]}>{item_noi_dung}</Text>
                            <Text style={[styles.item_xp_muc_phat]}>{item.muc_phat}</Text>
                        </View>
                        <View style={[styles.flex1, styles.content_center]}>
                            <TouchableOpacity
                                onPress={this._onXPDetail}
                            >
                                <Thumbnail square small style={[styles.detail_xp_left_icon]} source={require('../../../assets/images/arrow_right.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                );
            case 'bien_bao':
                image = get_image_bb(item.anh);
                return (
                    <View style={[styles.item_xp_wraper, styles.item_xp_wraper_boxshadow, styles.marginHorizontal]} key={index}>
                        <View style={[styles.item_xp_left, styles.flex1]}>
                            <Thumbnail source={image} square size={thumbnail_xp} />
                        </View>
                        <View style={[styles.flex40, styles.paddingHorizontal, styles.justifyContent_center]}>
                            <Text style={[styles.hot_call_tentinh]}>{item.ten}</Text>
                        </View>
                    </View>
                );
            default:
                image = require('../../../assets/images/hot_call_cagt.jpg');
                return (
                    <View style={[styles.item_xp_wraper, styles.item_xp_wraper_boxshadow, styles.marginHorizontal]} key={index}>
                        <View style={[styles.item_xp_left, styles.flex1]}>
                            <Thumbnail source={image} square size={thumbnail_xp} />
                        </View>
                        <View style={[styles.flex40, styles.paddingHorizontal, styles.justifyContent_center]}>
                            <Text style={[styles.hot_call_tentinh]}>{item.ten}</Text>
                        </View>
                        <View style={[styles.flex1, styles.content_center]}>
                            <TouchableOpacity
                                onPress={this._onPhoneCall}
                            >
                                <Thumbnail square small style={[styles.detail_xp_left_icon]} source={require('../../../assets/images/phone_call.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                );
        }
        
    }
}
export default ItemsSearchScreen;