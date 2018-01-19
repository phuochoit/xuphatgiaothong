import React from "react";
import { FlatList, View } from "react-native";
// import { Text, Button, Thumbnail } from "native-base";
import SQLite from 'react-native-sqlite-storage';
// import Swipeout from 'react-native-swipeout';

import HeaderComponent from "../Header/";
import LoadingComponent from "../loading";
import HotCallItemsComponent from "./HotCallItemsComponent";
import { styles } from "../../../assets/css/style";
import { AdMobBannerContent, AdMobBannerHeader } from "../admob";

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
                        return (<AdMobBannerHeader bannerSize="banner" />);
                    }}
                    ListFooterComponent={() => {
                        return (<AdMobBannerContent bannerSize="mediumRectangle" />);
                    }}
                    data={this.state.data}
                    renderItem={({ item, index }) => {
                        return (<HotCallItemsComponent item={item} index={index} navigation={this.props.navigation} />);
                    }}
                    keyExtractor={item => item.id}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }
}

export default HotCallComponent;