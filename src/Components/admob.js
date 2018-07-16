import React from "react";
import { View , Text} from "react-native";


const BANNER_FOOTER = 'ca-app-pub-1070789846238739/2395901196';
export const BANNER_FULL = 'ca-app-pub-1070789846238739/5771328983';
const BANNER_CONTNET = 'ca-app-pub-1070789846238739/3816083639';
const BANNER_HEADER = 'ca-app-pub-1070789846238739/1196845454';

export class AdMobBannerHeader extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginVertical: 5 }}>
                <Text>AdMobBannerHeader</Text>
                {/* <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_HEADER}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                /> */}
            </View>
        )
    }
}

export class AdMobBannerContent extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <Text>AdMobBannerContent</Text>
                {/* <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_CONTNET}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                /> */}
            </View>
        )
    }
}

export class AdMobBannerFooter extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5, position: 'absolute', bottom:0, right:0, left:0 }}>
                <Text>BANNER_FOOTER</Text>
                {/* <AdMobBanner
                    adSize={this.props.bannerSize}
                    adUnitID={BANNER_FOOTER}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                /> */}
            </View>
        )
    }
}

export class AdMobBannerFull extends React.Component {
    render() {
        return (
            <View style={{ alignItems: 'center', marginTop: 5 }}>
                <Text>BANNER_FULL</Text>
                {/* <AdMobBanner
                    adSize="fullBanner"
                    adUnitID={BANNER_FULL}
                    testDevices={[AdMobBanner.simulatorId]}
                    onAdFailedToLoad={error => console.error(error)}
                /> */}
            </View>
        )
    }
}

