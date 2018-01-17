//react
import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
// Container
import NoticeBoardComponent from "../components/NoticeBoard/NoticeBoardComponent";
import NoticeBoardDetailComponent from "../components/NoticeBoard/NoticeBoardDetailComponent";

// screenName
import { NOTICEBOARD, NOTICEBOARDDETAIL } from "../values/screenName";

const NoticeBoardNavigator = StackNavigator(
    {
        NOTICEBOARD: { screen: NoticeBoardComponent },
        NOTICEBOARDDETAIL: { screen: NoticeBoardDetailComponent }
    },
    {
        headerMode: "none"
    }
);

export default NoticeBoardNavigator;