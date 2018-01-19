import React from "react";
import { FlatList, View, Linking, TouchableOpacity, Alert } from "react-native";
import { Text, Button, Thumbnail } from "native-base";
import SQLite from 'react-native-sqlite-storage';
import Swipeout from 'react-native-swipeout';

import { styles } from "../../../assets/css/style";

class HotCallItemsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null
        };
    }

    render() {
        const { item, index } = this.props;
        const swipeoutSetting = {
            autoClose: true,
            rowId: this.props.index,
            sectionId: 1,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.id });
            },
            right: [
                {
                    onPress: () => {
                        let messeage = '';
                        if (this.props.item.id != 1 && this.props.item.id != 2) {
                            messeage = 'Công An Giao Thông ';
                        }
                        Alert.alert(
                            'Thông Báo',
                            'Bạn Muốn Gọi Đến ' + messeage + this.props.item.tentinh,
                            [
                                { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        Linking.openURL('tel:' + encodeURIComponent(this.props.item.sodt_tinh)).catch(err => console.error('An error occurred', err));
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Gọi',
                    backgroundColor: '#407ED2',
                    color: '#fff',
                    underlayColor: "#006fff",
                }
            ]
        }
        let first_name = '';
        if (this.props.item.id != 1 && this.props.item.id != 2) {
            first_name = 'Công An Giao Thông ';
        }

        //[styles.item_xp_wraper, styles.item_xp_wraper_boxshadow, styles.marginHorizontal]
        return (

            <View key={index} style={[styles.box_wraper_item, styles.item_xp_wraper_boxshadow, styles.marginHorizontal]}>
                <Swipeout {...swipeoutSetting}>
                    <View style={[styles.box_item]}>
                        <View style={[styles.flex1]}>
                            <Thumbnail source={require('../../../assets/images/hot_call_cagt.png')} />
                        </View>
                        <View style={[styles.flex40, styles.paddingHorizontal, styles.justifyContent_center]}>
                            <Text style={[styles.hot_call_tentinh]}>{first_name + item.tentinh}</Text>
                            <Text style={[styles.hot_call_sodt_tinh]}>{item.sodt_tinh}</Text>
                        </View>
                    </View>
                </Swipeout>
            </View>

        );
    }
}

export default HotCallItemsComponent;