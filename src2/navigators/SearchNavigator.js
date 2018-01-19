//react
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// Container
import SearchComponent from "../components/Search/SearchComponent";
import SearchDetailComponent from "../components/Search/SearchDetailComponent";

// screenName
import { SEARCH, SEARCHDETAIL } from "../values/screenName";

const SearchNavigator = StackNavigator(
    {
        SEARCH: { screen: SearchComponent },
        SEARCHDETAIL: { screen: SearchDetailComponent }
    },
    {
        headerMode: "none"
    }
);

export default SearchNavigator;