import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import HomeScreen from "./home.screen";
import HomeDetaileScreen from "./home.detail.screen";

const HomeRouter = StackNavigator(
    {
        Home: { screen: HomeScreen },
        HomeDetail: { screen: HomeDetaileScreen}
    },
    {
        headerMode: "none"
    }
);

export default HomeRouter;