import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { isEmpty } from "lodash";
import { Container, Text, Thumbnail, H3, Card, CardItem, Body } from "native-base";
import { styles,thumbnail_xp} from "../../../assets/css/style";
import { get_image_xu_phat } from "../../Service/service";

class ItemsScreen extends React.Component {
    constructor(props) {
        super(props);
        this._onPressButton = this._onPressButton.bind(this);
    }
    _onPressButton(){
        this.props.navigation.navigate('HomeDetail', this.props.item);
    }
    render() {
        
        const { item, index } = this.props;
        let image_group, item_noi_dung  = null;
        var image_link = null;
        console.log('item------', item);
        image_group = get_image_xu_phat(item.group_value, item.loai_xe);
        
        if (item.noi_dung) {
            item_noi_dung = item.noi_dung.substring(0, 100) + '...';
        }
        return (
            <TouchableOpacity 
                style={[styles.item_xp_touchableopacity]}
                onPress={this._onPressButton}
            >
                <View style={[styles.item_xp_wraper, styles.item_xp_wraper_boxshadow]} key={index}>
                    <View style={[styles.item_xp_left]}>
                        <Thumbnail square size={thumbnail_xp} source={image_group}/>
                    </View>
                    <View style={[styles.flex90]}>
                        <View>
                            <H3 style={[styles.item_xp_title]}>{item.ten_loi}</H3>
                        </View>
                        <View>
                            <Text style={[styles.item_xp_noi_dung]}>{item_noi_dung}</Text>
                            <Text style={[styles.item_xp_muc_phat]}>{item.muc_phat}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ItemsScreen;