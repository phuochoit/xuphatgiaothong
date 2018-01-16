//react
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// Container
import HomeComponent from "../components/Home/HomeComponent";
import ScooterComponent from "../components/Home/ScooterComponent";
import HomeDetailComponent from "../components/Home/HomeDetailComponent";

// screenName
import { SCOOTER, HOME, HOMEDETAIL } from "../values/screenName";

const HomeNavigator = StackNavigator(
    {
        HOME: { screen: HomeComponent },
        SCOOTER: { screen: ScooterComponent },
        HOMEDETAIL: { screen: HomeDetailComponent }
    },
    {
        headerMode: "none"
    }
);

export default HomeNavigator;