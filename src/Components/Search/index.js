import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import SearchScreen from "./search.screen";
import HomeRouter from "../Home";
const SearchRouter = StackNavigator(
    {
        Search: { screen: SearchScreen },
    },
    {
        headerMode: "none"
    }
);

export default SearchRouter;