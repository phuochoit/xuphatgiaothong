import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList} from 'react-native';
import { isEmpty } from "lodash";
import { Header, Item, Left, Right, Title, Button, Body, Icon, StyleProvider, getTheme, Input } from "native-base";
import SQLite from 'react-native-sqlite-storage';

import { myThemeHeader } from "../../../assets/css/my_material";
import { styles, colorbgbox } from "../../../assets/css/style";

import { DismissKeyboard } from "../dismissKeyboar";
import LoadingComponent from "../loading";
import ItemsComponent from "../Home/ItemsComponent";
import NoticeBoardItemsComponent from "../NoticeBoard/NoticeBoardItemsComponent";
import HotCallItemsComponent from "../HotCall/HotCallItemsComponent";
import { AdMobBannerHeader } from "../admob";

let db = SQLite.openDatabase({ name: 'atgt.sqlite', createFromLocation: "~atgt.sqlite", location: 'Library' });

class SearchDetailComponent extends Component {
    constructor(props){
        super(props);
        this.state = ({
            text_search: null,
            onsearch: false,
            search_item: []
        });

        this._onChangeText = this._onChangeText.bind(this);
        this._onSearch = this._onSearch.bind(this);
        this._ontrashSearch = this._ontrashSearch.bind(this);
        this._getdata = this._getdata.bind(this);
        this._ongoBack = this._ongoBack.bind(this);
    }
    _onChangeText(text){
        this.setState({
            text_search: text,
            onsearch: isEmpty(text) ? false : true
        });
        this._getdata(text);
    }
    _onSearch() {
        this._getdata(this.state.text_search);
    }
    _ontrashSearch(){
        this.setState({
            text_search: null,
            search_item: [],
            onsearch: false
        });
    }
    _getdata(text){
        const { table_name } = this.props.navigation.state.params;
        if (!isEmpty(text)) {
            let record = [];
            let query = null;
            switch (table_name) {
                case 'Xuphat':
                    query = `SELECT * FROM Xuphat WHERE ten_loi LIKE '%${text}%' AND loai_xe IN ( 2, 33, 1, 22 ) ORDER BY ten_loi ASC`;
                    break;
                case 'bien_bao':
                    query = `SELECT * FROM bien_bao WHERE ten_loi LIKE '%${text}%' ORDER BY ten_loi ASC`;
                    break;
                case 'duong_day_nong':
                    query = `SELECT * FROM duong_day_nong  WHERE tentinh LIKE '%${text}%' ORDER BY tentinh ASC`;
                    break;    
            }
            db.transaction((tx) => {
                tx.executeSql(query, [], (tx, results) => {
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
        } else {
            this.setState({
                search_item: [],
                onsearch: false,
            });
        }
    }
    _ongoBack(){
        this.props.navigation.goBack();
    }
    render() {
        const { navigation } = this.props;
        const DismissKeyboardView = DismissKeyboard(View);
        let resultQuery = null;
        // console.log('this.state--', this.state);
        
        // const { text_search, onsearch, search_item} = this.state;
        
        let ViewLoad = this.state.onsearch ? (<LoadingComponent/>) : null;
        let FlastData = isEmpty(this.state.search_item) ? (
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
                        switch (navigation.state.params.table_name) {
                            case 'Xuphat':
                                return (
                                    <ItemsComponent item={item} index={index} navigation={this.props.navigation} />
                                );
                            case 'bien_bao':
                                return (
                                    <NoticeBoardItemsComponent item={item} index={index} navigation={this.props.navigation} />
                                );
                            case 'duong_day_nong':
                                return (
                                    <HotCallItemsComponent item={item} index={index} navigation={this.props.navigation} />
                                );
                                break;
                        }

                        
                    }}
                    keyExtractor={item => item.id}
                />
            );
        let fullData = this.state.onsearch ? ViewLoad : FlastData;
        return (
            <View style={[styles.background, styles.flex1]}>
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
                                    placeholder={navigation.state.params.search_title}
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
                <DismissKeyboardView style={[styles.flex1, styles.background]}>
                    <AdMobBannerHeader bannerSize="banner" />                
                    {fullData}
                </DismissKeyboardView>
            </View>
        );
    }
}

export default SearchDetailComponent;