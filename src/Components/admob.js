import React from "react";
import { View } from "react-native";
import {
    AdMobBanner,
    AdMobInterstitial,
    PublisherBanner,
    AdMobRewarded,
} from 'react-native-admob'

const BANNER_FOOTER = 'ca-app-pub-1070789846238739/2395901196';
export const BANNER_FULL = 'ca-app-pub-1070789846238739/5771328983';
const BANNER_CONTNET = 'ca-app-pub-1070789846238739/3816083639';

export class AdMobBannerContent extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_CONTNET}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        )
    }
}


export class AdMobBannerFooter extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5, position: 'absolute', bottom:0, right:0, left:0 }}>
                <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_FOOTER}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        )
    }
}

export class AdMobBannerFull extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID={BANNER_FULL}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                />
            </View>
        )
    }
}

