import React from "react";
import { Image, View, } from "react-native";
import { Text, StyleProvider, getTheme, Tabs, Tab, TabHeading, ScrollableTab } from "native-base";

import HeaderScreen from "../Header";
import FabScreen from "../fab";
import { styles } from "../../../assets/css/style";
import { myTab } from "../../../assets/css/my_material";

import ExtraScreen from "./extra.screen";
import LeadScreen from "./lead.screen";
import ControlScreen from "./control.screen";
import DangerScreen from "./danger.screen";
import ProhibitScreen from "./prohibit.screen";

class NoticeBoardScreen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[styles.flex1, styles.background]}>
                <HeaderScreen navigation={this.props.navigation} icon_home={false} title="Biển Báo" go_back="Home" />
                <StyleProvider style={getTheme(myTab)}>
                    <Tabs style={[styles.flex1]} renderTabBar={() => <ScrollableTab />} >
                        <Tab
                            heading={
                                <TabHeading style={[styles.flex1]}>
                                    <Image
                                        square
                                        style={[styles.icon_tab]}
                                        source={require('../../../assets/images/icons/icon_bb_cam.png')}
                                    />
                                    <Text style={{}}>Biển Báo Cấm</Text>
                                </TabHeading>
                            }
                        >
                            <ProhibitScreen navigation={this.props.navigation} />
                        </Tab>

                        <Tab heading={
                            <TabHeading style={[styles.flex1]}>
                                <Image
                                    square
                                    style={[styles.icon_tab]}
                                    source={require('../../../assets/images/icons/icon_bb_nguyhiem.png')}
                                />
                                <Text style={{ flex: 1, width: 250 }}>Biển Báo Nguy Hiểm</Text>
                            </TabHeading>
                        }>
                            <DangerScreen navigation={this.props.navigation} />
                        </Tab>
                        <Tab heading={
                            <TabHeading style={[styles.flex1,]}>
                                <Image
                                    square
                                    style={[styles.icon_tab]}
                                    source={require('../../../assets/images/icons/icon_bb_hieulenh.png')}
                                />
                                <Text>Biển Báo Hiệu Lệnh</Text>
                            </TabHeading>
                        }>
                            <ControlScreen navigation={this.props.navigation} />
                        </Tab>
                        <Tab heading={
                            <TabHeading style={[styles.flex1,]}>
                                <Image
                                    square
                                    style={[styles.icon_tab]}
                                    source={require('../../../assets/images/icons/icon_bb_chidan.png')}
                                />
                                <Text>Biển Báo Chỉ Dẫn</Text>
                            </TabHeading>
                        }>
                            <LeadScreen navigation={this.props.navigation} />
                        </Tab>
                        <Tab heading={
                            <TabHeading style={[styles.flex1,]}>
                                <Image
                                    square
                                    style={[styles.icon_tab]}
                                    source={require('../../../assets/images/icons/icon_bb_phu.png')}
                                />
                                <Text>Biển Báo Phụ</Text>
                            </TabHeading>
                        }>
                            <ExtraScreen navigation={this.props.navigation} />
                        </Tab>
                    </Tabs>
                </StyleProvider>
                <FabScreen />
            </View>
        );
    }
}

export default NoticeBoardScreen;