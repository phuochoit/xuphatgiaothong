import React, { Component } from 'react';
import { Image, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, Item, Input, Tab, Tabs, ScrollableTab, TabHeading, StyleProvider, getTheme } from "native-base";

import HeaderScreen from "../Header/";
import FabScreen from "../fab";
import { myTab } from "../../../assets/css/my_material";
import { styles, colorbgbox } from "../../../assets/css/style";
import { myThemeHeader } from "../../../assets/css/my_material";
class SearchScreen extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View>
                <StyleProvider style={getTheme(myThemeHeader)}>
                    <Header searchBar rounded>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.props.navigation.navigate("Home")}>
                                <Icon name="md-arrow-round-back" size={30} color={colorbgbox} />
                            </Button>
                        </Left>
                        <Body>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                                <Icon name="ios-people" />
                            </Item>
                        </Body>
                        <Right />
                    </Header>
                </StyleProvider>
            </View>
        );
    }
}

export default SearchScreen;