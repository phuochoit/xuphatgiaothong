import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import HotCallScreen from "./hotcall.screen";

const HotCallRouter = StackNavigator(
    {
        HotCall: { screen: HotCallScreen },
    },
    {
        headerMode: "none"
    }
);

export default HotCallRouter;