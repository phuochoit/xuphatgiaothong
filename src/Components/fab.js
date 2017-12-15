import React, { Component } from 'react';
import { Button, Icon, View, Fab } from 'native-base';
import { Linking } from 'react-native'

import { styles, colormenu } from "../../assets/css/style";
import { facebook_share, google_plus } from "../Service/string";
class FabScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            style: false
        };
        this._OnClickFackbook = this._OnClickFackbook.bind(this);
        this._OnClickFab = this._OnClickFab.bind(this);
        this._OnClickGoogleplus = this._OnClickGoogleplus.bind(this);
    }

    _OnClickFab = () => {
        this.setState({
            active: !this.state.active,
            style: !this.state.style
        });
    }
    _OnClickFackbook = () => {
        Linking.openURL(facebook_share).catch(err => console.error('An error occurred', err));
    }
    _OnClickGoogleplus = () => {
        Linking.openURL(google_plus).catch(err => console.error('An error occurred', err));
    }
    render() {
        return (
            <View >
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={[styles.fab_wacrapt]}
                    position="bottomRight"
                    onPress={this._OnClickFab}>
                    <Icon name="share" />
                    <Button
                        style={{ backgroundColor: '#3B5998', top: !this.state.style ? 0 : null }}
                        onPress={this._OnClickFackbook}
                    >
                        <Icon name="logo-facebook" />
                    </Button>
                    <Button
                        style={{ backgroundColor: '#DD5144', top: !this.state.style ? 0 : null }}
                        onPress={this._OnClickGoogleplus}
                    >
                        <Icon name="logo-googleplus" />
                    </Button>
                </Fab>
            </View>
        );
    }
}

export default FabScreen;

