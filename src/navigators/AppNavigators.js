import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, StyleProvider, getTheme, View, Fab, Thumbnail} from 'native-base';
import { TabNavigator } from "react-navigation";

import { myFooter } from "../../assets/css/my_material";
import { styles, background2FB8FE } from "../../assets/css/style";

import HomeNavigator from "./HomeNavigator";
import NoticeBoardNavigator from "./NoticeBoardNavigator";
import SearchNavigator from "./SearchNavigator";

import HotCallComponent from "../components/HotCall/HotCallComponent";
import MoreComponent from "../components/More/MoreComponent";

import FabScreen from "../components/fab";
import { HOME, HOTCALL, MORE, NOTICEBOARD, SEARCH } from "../values/screenName";


export default (AppNavigators = TabNavigator(
    {
        HOME: { screen: HomeNavigator },
        NOTICEBOARD: { screen: NoticeBoardNavigator },
        HOTCALL: { screen: HotCallComponent },
        SEARCH: { screen: SearchNavigator },
        MORE: { screen: MoreComponent },
    },
    {
        headerMode: "none",
        tabBarPosition: "bottom",
        swipeEnabled: false,
        tabBarComponent: props => {
            return (
                <View>
                    <FabScreen/>
                    <View style={{
                        height: 1,
                        backgroundColor: "#407ED2",
                    }}
                    />
                    <Footer style={{backgroundColor:'#fff'}}>
                        <StyleProvider style={getTheme(myFooter)}>
                            <FooterTab>
                                <Button
                                    transparent
                                    vertical
                                    active={props.navigation.state.index === 0}
                                    onPress={() => props.navigation.navigate(HOME)}>
                                    <Thumbnail square
                                        style={(props.navigation.state.index === 0) ? [styles.tab_items_icon_active] : [styles.tab_items_icon]}
                                        source={require('../../assets/images/icon_xuphat.png')} />
                                </Button>

                                <Button
                                    vertical
                                    active={props.navigation.state.index === 1}
                                    onPress={() => props.navigation.navigate(NOTICEBOARD)}
                                >
                                    <Thumbnail square
                                        style={(props.navigation.state.index === 1) ? [styles.tab_items_icon_active] : [styles.tab_items_icon]}
                                        source={require('../../assets/images/icon_warning.png')} />
                                </Button>
                                <Button
                                    vertical
                                    active={props.navigation.state.index === 2}
                                    onPress={() => props.navigation.navigate(HOTCALL)}
                                >
                                    <Thumbnail square
                                        style={(props.navigation.state.index === 2) ? [styles.tab_items_icon_active] : [styles.tab_items_icon]}
                                        source={require('../../assets/images/icons-call.png')} />
                                </Button>
                                <Button
                                    vertical
                                    active={props.navigation.state.index === 3}
                                    onPress={() => props.navigation.navigate(SEARCH)}
                                >
                                    <Thumbnail square
                                        style={(props.navigation.state.index === 3) ? [styles.tab_items_icon_active] : [styles.tab_items_icon]}
                                        source={require('../../assets/images/icons-search.png')} />
                                </Button>
                                <Button
                                    vertical
                                    active={props.navigation.state.index === 4}
                                    onPress={() => props.navigation.navigate(MORE)}
                                >
                                    <Thumbnail square
                                        style={(props.navigation.state.index === 4) ? [styles.tab_items_icon_active] : [styles.tab_items_icon]}
                                        source={require('../../assets/images/menu_store.png')} />
                                </Button>
                            </FooterTab>
                        </StyleProvider>
                    </Footer>
                </View>
            );
        }
    }
));
