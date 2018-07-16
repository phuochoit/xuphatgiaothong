import React from "react";
import { View , Text} from "react-native";
import firebase from 'react-native-firebase';

import { ADS_BANNER_HEADER_ID,ADS_BANNER_FOOTER_ID, ADS_BANNER_CONTNET_ID, ADS_BANNER_INTERSTITIAL_ID} from "../Service/string";


const Banner = firebase.admob.Banner;
const AdRequest = firebase.admob.AdRequest;
const request = new AdRequest();

export const AdMobBannerHeader = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 2, marginBottom: 5, justifyContent: 'center' }}>
            <Banner
                size={"SMART_BANNER"}
                unitId={ADS_BANNER_HEADER_ID}
                request={request.build()}
                onAdLoaded={() => {}}
                onAdFailedToLoad={(error) => {}}
            />
        </View>
    );
}

export const AdMobBannerFooter = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 2, marginBottom: 5, justifyContent: 'center' }}>
            <Banner
                size={"SMART_BANNER"}
                unitId={ADS_BANNER_FOOTER_ID}
                request={request.build()}
                onAdLoaded={() => {}}
                onAdFailedToLoad={(error) => {}}
            />
        </View>
    );
}

export const AdMobBannerContent = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 2, marginBottom: 5, justifyContent: 'center' }}>
            <Banner
                size={"MEDIUM_RECTANGLE"}
                unitId={ADS_BANNER_CONTNET_ID}
                request={request.build()}
                onAdLoaded={() => {}}
                onAdFailedToLoad={(error) => {}}
            />
        </View>
    );
}

export const AdMobBannerFull = () => {
    return (
        <View style={{ alignItems: 'center', marginTop: 2, marginBottom: 5, justifyContent: 'center' }}>
            <Banner
                size={"MEDIUM_RECTANGLE"}
                unitId={ADS_BANNER_CONTNET_ID}
                request={request.build()}
                onAdLoaded={() => {}}
                onAdFailedToLoad={(error) => {}}
            />
        </View>
    );
}
