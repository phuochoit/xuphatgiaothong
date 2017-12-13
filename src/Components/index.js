import React, { Component } from "react";
import { DrawerNavigator } from "react-navigation";

import HomeRouter from "./Home";
import SearchRouter from "./Search/";
import HotCallRouter from "./HotCall";
import NoticeBoardRouter from "./NoticeBoard";
import SideBar from "./SideBar/sidebar";

const HomeScreenRouter = DrawerNavigator(
    {
        HotCall: { screen: HotCallRouter },
        Home: { screen: HomeRouter },
        Search: { screen: SearchRouter },
        // HotCall: { screen: HotCallRouter },
        NoticeBoard: { screen: NoticeBoardRouter },
    },
    {
        drawerPosition: "left",
        drawerWidth: 200,
        contentComponent: props => <SideBar {...props} />
    }
);
export default HomeScreenRouter;