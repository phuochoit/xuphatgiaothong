import React, { Component } from 'react';
import { FlatList, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';

import { styles } from "../../../assets/css/style";

import HeaderComponent from "../Header/";
import NoticeBoardItemsComponent from "./NoticeBoardItemsComponent";
import LoadingComponent from "../loading";
import { AdMobBannerContent, AdMobBannerHeader } from "../admob";

let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class NoticeBoardDetailComponent extends Component {
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
            tx.executeSql('select * from bien_bao as bb where bb.loai_xe = ' + this.props.navigation.state.params.loai_xe + ' ORDER BY ten_loi asc', [], (tx, results) => {
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
            refreshing: !this.state.refreshing,
        });
        this._getdata();
        this.setState({
            refreshing: !this.state.refreshing,
        });
    }
    render() {
        const { data, loading } = this.state;
        let title = null;
        switch (this.props.navigation.state.params.loai_xe) {
            case 1:
                title = 'Biển Báo Cấm';
                break;
        
            case 2:
                title = 'Biển Báo Nguy Hiểm';
                break;
            case 3:
                title = 'Biển Báo Hiệu Lệnh';
                break;
            case 4:
                title = 'Biển Báo Chỉ Dẫn';
                break;
            case 5:
                title = 'Biển Báo Phụ';
                break;
                
        }
        if (loading)
            return (
                <View style={[styles.flex1, styles.background]}>
                    <HeaderComponent navigation={this.props.navigation} title={title} icon_home={false} go_back={true} />
                    <LoadingComponent />
                </View>
            );

        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderComponent navigation={this.props.navigation} title={title} icon_home={false} go_back={true} />
                <FlatList
                    ListHeaderComponent={() => {
                        return (<AdMobBannerHeader bannerSize="banner" />);
                    }}
                    data={this.state.data}
                    renderItem={({ item, index }) => {
                        return (
                            <NoticeBoardItemsComponent item={item} index={index} navigation={this.props.navigation} />
                        );
                    }}
                    keyExtractor={item => item.id}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }
}

export default NoticeBoardDetailComponent;