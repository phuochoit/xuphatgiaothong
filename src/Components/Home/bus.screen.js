import React from "react";
import { FlatList, View } from "react-native";
import SQLite from 'react-native-sqlite-storage';
import { concat } from "lodash";

import ItemsScreen from "./items.screen";
import { styles } from "../../../assets/css/style";

let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class BusScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            scooter: [],
            page: 0,
            refreshing: false
        });

        this._getdata = this._getdata.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
        this._onRefresh = this._onRefresh.bind(this);

    }

    componentDidMount() {
        this._getdata();
    }
    _getdata() {
        let record = [];
        let newcode = null;
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Xuphat where loai_xe = 22 ORDER BY ten_loi asc limit 0,20', [], (tx, results) => {
                let len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    record[i] = row;
                }
                this.setState({
                    scooter: record,
                    page: 20
                });
            });
        }, null, null);
    }

    _onEndReached() {
        let new_record = [];
        db.transaction((tx) => {
            tx.executeSql('SELECT * FROM Xuphat where loai_xe = 22 ORDER BY ten_loi asc limit ' + this.state.page + ',20', [], (tx, results) => {
                let len = results.rows.length;
                if (len > 0) {
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        new_record[i] = row;
                    }
                    this.setState({
                        scooter: concat(this.state.scooter, new_record),
                        page: this.state.page + 20
                    });
                }

            });
        }, null, null);
    }
    _onRefresh() {
        this.setState({
            refreshing: true,
        });
        this._getdata();
        this.setState({
            refreshing: false,
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
                    data={this.state.scooter}
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

export default BusScreen;