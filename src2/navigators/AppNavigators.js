import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, StyleProvider, getTheme, View, Fab, Thumbnail } from 'native-base';
import { TabNavigator } from "react-navigation";

// import { myThemeFooter } from "../../assets/css/my_material";
import { styles, background2FB8FE } from "../../assets/css/style";

import HomeNavigator from "./HomeNavigator";

import HotCallComponent from "../components/HotCall/HotCallComponent";
import NoticeBoardComponent from "../components/NoticeBoard/NoticeBoardComponent";
import SearchComponent from "../components/Search/SearchComponent";
import MoreComponent from "../components/More/MoreComponent";

import { HOME, HOTCALL, MORE, NOTICEBOARD, SEARCH } from "../values/screenName";

export default (AppNavigators = TabNavigator(
    {
        HOME: { screen: HomeNavigator },
        NOTICEBOARD: { screen: NoticeBoardComponent },
        HOTCALL: { screen: HotCallComponent },
        SEARCH: { screen: SearchComponent },
        MORE: { screen: MoreComponent },
    },
    {
        headerMode: "none",
        tabBarPosition: "bottom",
        tabBarComponent: props => {
            return (
                <View>
                    <View style={{
                        height: 1,
                        backgroundColor: "#2FB8FE",
                    }}
                    />
                    <Footer>
                        <FooterTab>
                            <Button
                                transparent
                                vertical
                                active={props.navigation.state.index === 0}
                                onPress={() => props.navigation.navigate(HOME)}>
                                <Thumbnail square
                                    style={[styles.tab_items_icon]}
                                    source={require('../../assets/images/icon_xuphat.png')} />
                            </Button>

                            <Button
                                vertical
                                active={props.navigation.state.index === 1}
                                onPress={() => props.navigation.navigate(NOTICEBOARD)}
                            >
                                <Thumbnail square
                                    style={[styles.tab_items_icon]}
                                    source={require('../../assets/images/icons-high-priority.png')} />
                            </Button>
                            <Button
                                vertical
                                active={props.navigation.state.index === 2}
                                onPress={() => props.navigation.navigate(HOTCALL)}
                            >
                                <Thumbnail square
                                    style={[styles.tab_items_icon]}
                                    source={require('../../assets/images/icons-call.png')} />
                            </Button>
                            <Button
                                vertical
                                active={props.navigation.state.index === 3}
                                onPress={() => props.navigation.navigate(SEARCH)}
                            >
                                <Thumbnail square
                                    style={[styles.tab_items_icon]}
                                    source={require('../../assets/images/icons-search.png')} />
                            </Button>
                            <Button
                                vertical
                                active={props.navigation.state.index === 4}
                                onPress={() => props.navigation.navigate(MORE)}
                            >
                                <Thumbnail square
                                    style={[styles.tab_items_icon]}
                                    source={require('../../assets/images/menu_store.png')} />
                            </Button>
                        </FooterTab>
                    </Footer>
                </View>
            );
        }
    }
));
