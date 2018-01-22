import React from "react";
import { View } from "react-native";
import { H3,Thumbnail } from "native-base";
import { styles, thumbnail_xp } from "../../../assets/css/style";
import { get_image_bb } from "../../service/service";

class NoticeBoardItemsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { item, index } = this.props;
        let image_group, item_noi_dung = null;
        const url = get_image_bb(item.anh);
        return (
            <View style={[styles.item_xp_wraper, styles.item_xp_wraper_boxshadow, styles.marginHorizontal]} key={index}>
                <View style={[styles.item_xp_left, styles.item_bb_left ]}>
                    <Thumbnail square size={thumbnail_xp} source={url} />
                </View>
                <View style={[styles.flex80, styles.justifyContent_center]}>
                    <H3 style={[styles.item_xp_title]}>{item.ten_loi}</H3>
                </View>
            </View>
        );
    }
}
export default NoticeBoardItemsComponent;