import React from "react";
import { FlatList, View, Linking, TouchableOpacity } from "react-native";
import { Container, Text, Button, Icon, Thumbnail } from "native-base";
import SQLite from 'react-native-sqlite-storage';

import HeaderScreen from "../Header";
import FabScreen from "../fab";
import { styles } from "../../../assets/css/style";

let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class HotCallScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [],
            refreshing: false
        });
        this._getdata = this._getdata.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentDidMount() {
        this._getdata();
    }
    _getdata() {
        let record = [];
        let newcode = null;
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM duong_day_nong ORDER BY id asc', [], (tx, results) => {
                let len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    record[i] = row;
                }
                this.setState({
                    data: record,
                });
            });
        }, null, null);
    }

    _onRefresh() {
        this.setState({
            refreshing: true
        });
        this._getdata();
        this.setState({
            refreshing: false
        });
    }
    render() {
        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderScreen navigation={this.props.navigation} icon_home={false} title="Đường Dây Nóng" go_back="Home" />
                <FlatList
                    ListHeaderComponent={() => {
                        return (<View style={[styles.height10]} />);
                    }}
                    ListFooterComponent={() => {
                        return (<View style={[styles.height10]} />);
                    }}
                    data={this.state.data}
                    renderItem={({ item, index }) => {
                        return (<ItemsHotCall item={item} index={index} navigation={this.props.navigation} />);
                    }}
                    keyExtractor={item => item.id}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                />
                <FabScreen/>
            </View>
        );
    }
}

class ItemsHotCall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this._onPhoneCall = this._onPhoneCall.bind(this);
    }
    _onPhoneCall() {
        Linking.openURL('tel:' + encodeURIComponent(this.props.item.sodt_tinh)).catch(err => console.error('An error occurred', err));
    }
    render() {
        const { item, index } = this.props;
        return (
            <View key={index} style={[styles.item_xp_wraper, styles.item_xp_wraper_boxshadow, styles.marginHorizontal]}>
                <View style={[styles.flex1]}>
                    <Thumbnail source={require('../../../assets/images/hot_call_cagt.jpg')} />
                </View>
                <View style={[styles.flex40, styles.paddingHorizontal, styles.justifyContent_center]}>
                    <Text style={[styles.hot_call_tentinh]}>{item.tentinh}</Text>
                    <Text style={[styles.hot_call_sodt_tinh]}>{item.sodt_tinh}</Text>
                </View>
                <View style={[styles.flex1,styles.content_center]}>
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

export default HotCallScreen;