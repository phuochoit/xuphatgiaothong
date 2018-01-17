import React from "react";
import { FlatList, View, Linking, TouchableOpacity, Alert } from "react-native";
import { Text, Button, Thumbnail } from "native-base";
import SQLite from 'react-native-sqlite-storage';
import Swipeout from 'react-native-swipeout';

import HeaderComponent from "../Header/";
import LoadingComponent from "../loading";

import { styles } from "../../../assets/css/style";

let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class HotCallComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [],
            refreshing: false,
            loading: false
        });
        this._getdata = this._getdata.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }
    componentDidMount() {
        this.setState({ loading: true });
        this._getdata();

    }
    _getdata() {
        let record = [];
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM duong_day_nong ORDER BY id asc', [], (tx, results) => {
                let len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    record[i] = row;
                }
                this.setState({
                    data: record,
                    loading: false
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
        const { data, loading } = this.state;

        if (loading)
            return (
                <View style={[styles.flex1, styles.background]}>
                    <HeaderComponent navigation={this.props.navigation} title="Đường Dây Nóng" icon_home={false} go_back={true} />
                    <LoadingComponent />
                </View>
            );

        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderComponent navigation={this.props.navigation} icon_home={false} title="Đường Dây Nóng" go_back="" />
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
            </View>
        );
    }
}

class ItemsHotCall extends React.Component {
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
                            <Thumbnail source={require('../../../assets/images/hot_call_cagt.jpg')} />
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

export default HotCallComponent;