//react
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// Container
import HomeContainer from "../containers/Home/HomeContainer";
import ScooterContainer from "../containers/Home/ScooterContainer";

// screenName
import { SCOOTER,HOME } from "../values/screenName";

const HomeNavigator = StackNavigator(
    {
        HOME: { screen: HomeContainer },
        SCOOTER: { screen: ScooterContainer }
    },
    {
        headerMode: "none"
    }
);

export default HomeNavigator;