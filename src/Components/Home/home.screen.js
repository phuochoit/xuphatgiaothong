import React from "react";
import { Image, View } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, Item, Input, Tab, Tabs, ScrollableTab, TabHeading, StyleProvider, getTheme } from "native-base";

import HeaderScreen from "../Header/";
import ScooterScreen from "./scooter.screen";
import DrivingScreen from "./driving.screen";
import TruckScreen from "./truck.screen";
import BusScreen from "./bus.screen";
import FabScreen from "../fab";
import { myTab } from "../../../assets/css/my_material";
import { styles } from "../../../assets/css/style";

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {

        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderScreen navigation={this.props.navigation} title="Lỗi Vi Phạm" icon_home={true} go_back="" />
                <StyleProvider style={getTheme(myTab)}>
                    <Tabs renderTabBar={() => <ScrollableTab />} >
                        <Tab

                            heading={
                                <TabHeading style={styles.flex1}>
                                    <Image
                                        square
                                        style={styles.icon_tab}
                                        source={require('../../../assets/images/icons/scooter.png')}
                                    />
                                    <Text>Xe Máy</Text>
                                </TabHeading>
                            }
                        >
                            <ScooterScreen navigation={this.props.navigation} />
                        </Tab>

                        <Tab heading={
                            <TabHeading style={styles.flex1}>
                                <Image
                                    square
                                    style={styles.icon_tab}
                                    source={require('../../../assets/images/icons/driving.png')}
                                />
                                <Text>Xe Ô tô</Text>
                            </TabHeading>
                        }>
                            <DrivingScreen navigation={this.props.navigation} />
                        </Tab>
                        <Tab heading={
                            <TabHeading style={styles.flex1}>
                                <Image
                                    square
                                    style={styles.icon_tab}
                                    source={require('../../../assets/images/icons/truck.png')}
                                />
                                <Text>Xe Tải</Text>
                            </TabHeading>
                        }>
                            <TruckScreen navigation={this.props.navigation} />
                        </Tab>
                        <Tab heading={
                            <TabHeading style={styles.flex1}>
                                <Image
                                    square
                                    style={styles.icon_tab}
                                    source={require('../../../assets/images/icons/bus.png')}
                                />
                                <Text>Xe Khách</Text>
                            </TabHeading>
                        }>
                            <BusScreen navigation={this.props.navigation} />
                        </Tab>
                    </Tabs>
                </StyleProvider>
                <FabScreen />
            </View>
        );
    }
}