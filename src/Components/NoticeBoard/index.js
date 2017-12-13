import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import NoticeBoardScreen from "./noticeboard.screen";

const NoticeBoardRouter = StackNavigator(
    {
        NoticeBoard: { screen: NoticeBoardScreen },
    },
    {
        headerMode: "none"
    }
);

export default NoticeBoardRouter;