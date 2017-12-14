import React, { Component } from 'react';
import { FlatList, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';

import { styles } from "../../../assets/css/style";
import ItemsScreen from "./items.screen";
let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class DangerScreen extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            data: [],
            refreshing: false
        });
        this._getdata = this._getdata.bind(this);
    }
    componentDidMount() {
        this._getdata();
    }

    _getdata() {
        let record = [];
        let newcode = null;
        db.transaction((tx) => {
            tx.executeSql('select * from bien_bao as bb where bb.loai_xe = 2 ORDER BY ten_loi asc', [], (tx, results) => {
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
            refreshing: !this.state.refreshing,
        });
        this._getdata();
        this.setState({
            refreshing: !this.state.refreshing,
        });
    }
    render() {
        return (
            <View style={[styles.flex1, styles.background]}>
                <FlatList
                    ListHeaderComponent={() => {
                        return (<View style={[styles.height10]} />);
                    }}
                    ListFooterComponent={() => {
                        return (<View style={[styles.height10]} />);
                    }}
                    data={this.state.data}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsScreen item={item} index={index} navigation={this.props.navigation} />
                        );
                    }}
                    keyExtractor={item => item.id}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }
}

export default DangerScreen;