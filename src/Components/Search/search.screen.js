import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList } from "react-native";
import { Header,  Icon, Button, Text, Item, Input, StyleProvider, getTheme, Spinner, Thumbnail} from "native-base";
import { isEmpty } from "lodash";
import SQLite from 'react-native-sqlite-storage';

import FabScreen from "../fab";
import { myTab } from "../../../assets/css/my_material";
import { styles, colormenu, thumbnail_xp, deviceHeight } from "../../../assets/css/style";
import { myThemeHeader } from "../../../assets/css/my_material";
import {DismissKeyboard} from "../dismissKeyboar";
import ItemsSearchScreen from "./items.search.screen";
let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            text_search: null,
            onsearch : false,
            search_item: []
        });
        this._onSearch = this._onSearch.bind(this);
        this._ongoBack = this._ongoBack.bind(this);
        this._ontrashSearch = this._ontrashSearch.bind(this);
        this._onChangeText = this._onChangeText.bind(this);
        this._getdata = this._getdata.bind(this);
    }

    _onChangeText(text){
        this.setState({
            text_search:text,
            onsearch: true
        });

        this._getdata(text);
    }
    _getdata(text){
        if (!isEmpty(text)){
            let record = [];
            let newcode = null;
            db.transaction((tx) => {
                tx.executeSql(`SELECT RTRIM( xp.id ) AS id, RTRIM( xp.ten_loi ) AS ten,RTRIM( xp.group_value ) AS anh, RTRIM( xp.loai_xe ) AS loai_xe,RTRIM( xp.noi_dung ) AS noi_dung, RTRIM( xp.muc_phat ) AS muc_phat, ( 'XuPhat' ) AS name_table FROM XuPhat AS xp WHERE xp.loai_xe IN ( 2, 33, 1, 22 ) AND xp.ten_loi LIKE '%${text}%' UNION SELECT RTRIM( bb.id ), RTRIM( bb.ten_loi ), RTRIM( bb.anh ), "","","", ( 'bien_bao' ) FROM bien_bao AS bb WHERE bb.ten_loi LIKE '%${text}%' UNION SELECT RTRIM( ddn.id ), RTRIM( ddn.tentinh ), " ", "",RTRIM( ddn.sodt_tinh ),"", ( 'duong_day_nong' ) FROM duong_day_nong AS ddn WHERE ddn.tentinh LIKE '%${text}%'`, [], (tx, results) => {
                    let len = results.rows.length;
                    for (let i = 0; i < len; i++) {
                        let row = results.rows.item(i);
                        record[i] = row;
                    }
                    this.setState({
                        search_item: record,
                        onsearch: false,
                    });
                });
            }, null, null);
        }else{
            this.setState({
                search_item: [],
                onsearch: false,
            });
        }
    }
    _onSearch() {
        this._getdata(this.state.text_search);
    }

    _ongoBack() {
        this.props.navigation.navigate("Home")
    }

    _ontrashSearch(){
        this.setState({
            text_search: null,
            search_item: [],
            onsearch: false
        });
    }

    render() {
        const DismissKeyboardView = DismissKeyboard(View);
        const ViewLoad = this.state.onsearch ? (
            <View style={[styles.search_spinner_box]}> 
                <Spinner color={colormenu} /> 
            </View>
        ) : null;

        const FlastData = isEmpty(this.state.search_item) ? (
            <View style={[styles.search_emtry_box]}>
                <Icon name="ios-analytics-outline" style={[styles.search_emtry_icon]} />
                <Text>Không Có Dữ Liệu.</Text>
            </View>) : (
                <FlatList
                    ListHeaderComponent={(item) => {
                        return (<View style={[!isEmpty(this.state.search_item) ? styles.height10 : styles.height0]} />);
                    }}
                    ListFooterComponent={() => {
                        return (<View style={[!isEmpty(this.state.search_item) ? styles.height0 : styles.height0]} />);
                    }}
                    data={this.state.search_item}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsSearchScreen item={item} index={index} navigation={this.props.navigation} />
                        );
                    }}
                    keyExtractor={item => item.id}
                />
            );
        return (
            <View style={{flex:1}}>
                <StyleProvider style={getTheme(myThemeHeader)}>
                    <Header searchBar rounded>
                        <View style={[styles.header_body, styles.flex_row]}>
                            <View style={[styles.search_header_left]}>
                                <TouchableOpacity onPress={this._ongoBack}>
                                    <Icon name="ios-arrow-back-outline"
                                        style={[styles.search_header_icon]} />
                                </TouchableOpacity>
                            </View>
                            <Item style={[styles.search_header_item]}>
                                <Input
                                    value={this.state.text_search}
                                    onChangeText={
                                        (text) => this._onChangeText(text)
                                    }
                                    placeholder="Search" 
                                    style={[styles.search_header_input]} />
                                <TouchableOpacity onPress={this._ontrashSearch}>
                                    <Icon name="ios-trash-outline" />
                                </TouchableOpacity>
                            </Item>
                            <View style={[styles.search_header_right]}>
                                <TouchableOpacity
                                    onPress={this._onSearch}
                                    style={{}}
                                >
                                    <Icon name="ios-search" style={[styles.search_header_icon]}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Header>
                </StyleProvider>
                <DismissKeyboardView style={[styles.flex1,styles.background]}>
                    {ViewLoad}
                    {FlastData}
                </DismissKeyboardView>
                <FabScreen/>
            </View>
            
        );
    }
}

export default SearchScreen;