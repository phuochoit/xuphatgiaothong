//react
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// Container
import HomeComponent from "../components/Home/HomeComponent";
import FormComponent from "../components/Home/FormComponent";
import HomeDetailComponent from "../components/Home/HomeDetailComponent";

// screenName
import { SCOOTER, HOME, HOMEDETAIL } from "../values/screenName";

const HomeNavigator = StackNavigator(
    {
        HOME: { screen: HomeComponent },
        SCOOTER: { screen: FormComponent },
        HOMEDETAIL: { screen: HomeDetailComponent }
    },
    {
        headerMode: "none"
    }
);

export default HomeNavigator;