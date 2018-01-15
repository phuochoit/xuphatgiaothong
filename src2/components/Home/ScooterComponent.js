// react
import React, { Component } from 'react';
import { Text, View, FlatList, ActivityIndicator} from 'react-native';

//style
import { styles } from '../../../assets/css/style';

//component
import HeaderComponent from "../Header/";
import ItemsComponent from "./ItemsComponent";

class ScooterComponent extends Component {
    constructor(props){
        super(props);
        this.state = ({
            items: 20,
            refreshing: false,
        });

        this._onEndReached = this._onEndReached.bind(this);
        this._onRefresh = this._onRefresh.bind(this);
    }
    _onEndReached() {
        this.setState({ items: (this.state.items + 20) });
        this.props.onFetchMoreScooter(this.state.items);
    }
    _onRefresh(){
        console.log('_onRefresh');
    }
    componentDidMount(){
        this.props.onFetchScooter();
    }
    render() {
        
        return (
            <View style={[styles.background, styles.flex1]}>
                <HeaderComponent {...this.props} title="Lỗi Vi Phạm Xe Máy" icon_home={true} go_back={true} />
                <FlatList
                    ListHeaderComponent={() => {
                        return (<View style={[styles.height10]} />);
                    }}
                    ListFooterComponent={() => {
                        return (<View style={[styles.height10]} />);
                    }}
                    data={this.props.scooter}
                    renderItem={({ item, index }) => {
                        return (
                            <ItemsComponent item={item} index={index} navigation={this.props.navigation} />
                        );
                    }}
                    keyExtractor={item => item.id}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onEndReached}
                    onRefresh={this._onRefresh}
                    refreshing={this.state.refreshing}
                />
            </View>
        );
    }
}

export default ScooterComponent;