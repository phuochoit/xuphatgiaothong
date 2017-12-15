import React, { Component } from 'react';
import { FlatList, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';

import { styles } from "../../../assets/css/style";
import ItemsScreen from "./items.screen";
let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class ExtraScreen extends Component {
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
            tx.executeSql('select * from bien_bao as bb where bb.loai_xe = 5 ORDER BY ten_loi asc', [], (tx, results) => {
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
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }
}

export default ExtraScreen;