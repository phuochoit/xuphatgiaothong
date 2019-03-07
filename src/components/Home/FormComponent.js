import React from "react";
import { FlatList, View } from "react-native";
import SQLite from "react-native-sqlite-storage";
import { concat } from "lodash";
//style
import { styles } from "../../../assets/css/style";

import { getIdLoaiXe } from "../../Service/service";

//component
import HeaderComponent from "../Header/";
import ItemsComponent from "./ItemsComponent";
import LoadingComponent from "../loading";
import { AdMobBannerHeader } from "../admob";
let db = SQLite.openDatabase({
    name: "atgt.sqlite",
    createFromLocation: "~atgt.sqlite",
    location: "Library"
});

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scooter: [],
            page: 0,
            refreshing: false,
            loading: false
        };

        this._getdata = this._getdata.bind(this);
        this._onEndReached = this._onEndReached.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }

    componentDidMount() {
        this._getdata();
    }
    _getdata() {
        this.setState({ loading: true });
        let record = [];
        db.transaction(
            tx => {
                tx.executeSql("SELECT * FROM Xuphat where loai_xe IN (" + getIdLoaiXe(this.props.navigation.state.params.loai_xe) + ") ORDER BY ten_loi asc limit " + this.state.page + ",10",
                    [],
                    (tx, results) => {
                        let len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            record[i] = row;
                        }
                        this.setState({
                            scooter: record,
                            page: 20,
                            loading: false
                        });
                    }
                );
            },
            null,
            null
        );
    }

    _onEndReached() {
        let new_record = [];
        db.transaction(
            tx => {
                tx.executeSql("SELECT * FROM Xuphat where loai_xe IN (" + getIdLoaiXe(this.props.navigation.state.params.loai_xe) + ") ORDER BY ten_loi asc limit " + this.state.page + ",10",
                    [],
                    (tx, results) => {
                        let len = results.rows.length;
                        if (len > 0) {
                            for (let i = 0; i < len; i++) {
                                let row = results.rows.item(i);
                                new_record[i] = row;
                            }
                            this.setState({
                                scooter: concat(this.state.scooter, new_record),
                                page: this.state.page + 10
                            });
                        }
                    }
                );
            },
            null,
            null
        );
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
        let title = null;
        switch (this.props.navigation.state.params.loai_xe) {
            case 1:
                title = "Lỗi Vi Phạm Xe Ô TÔ";
                break;
            case 2:
                title = "Lỗi Vi Phạm Xe Máy";
                break;
            case 5:
                title = "Lỗi Khác";
                break;
            case 6:
                title = "Người tham gia giao thông";
                break;
            case 33:
                title = "Lỗi Vi Phạm Xe Tải";
                break;
            case 22:
                title = "Lỗi Vi Phạm Xe Khách";
                break;
        }
        if (this.state.loading)
            return (
                <View style={[styles.flex1, styles.background]}>
                    <HeaderComponent
                        navigation={this.props.navigation}
                        title={title}
                        icon_home={true}
                        go_back={true}
                    />
                    <LoadingComponent />
                </View>
            );

        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderComponent
                    navigation={this.props.navigation}
                    title={title}
                    icon_home={true}
                    go_back={true}
                />
                <AdMobBannerHeader bannerSize="banner" />
                <FlatList
                    data={this.state.scooter}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsComponent
                                item={item}
                                index={index}
                                navigation={this.props.navigation}
                            />
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

export default FormComponent;
