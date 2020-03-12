import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Image, Dimensions } from 'react-native';
const DeviceWidth = Dimensions.get('window').width

class GateLandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false,
        };
    }
    
    componentDidMount() {
        
    }
    
    render() {
        return (
            <View style={styles.menuWrapper}>
                <View style={{
                  flexDirection: 'row',
                  backgroundColor: "grey"}}>
                  <View>
                    <View style={styles.gridSingleMenuView}/>
                    <View style={styles.gridSingleMenuView} />
                    <View style={styles.gridSingleMenuView} />
                    <View style={styles.gridSingleMenuView} />
                  </View>
                  <View>
                    <View style={styles.gridSingleMenuView} />
                    <View style={styles.gridSingleMenuView} />
                    <View style={styles.gridSingleMenuView} />
                    <View style={styles.gridSingleMenuView} />
                  </View>
                  <View>
                    <View style={styles.gridSingleMenuView} />
                    <View style={styles.gridSingleMenuView} />
                    <View style={styles.gridSingleMenuView} />
                    <View style={styles.gridSingleMenuView} />
                  </View>    
                </View>
              </View>
        )
    }
}

const styles = StyleSheet.create({
    menuWrapper : {
        justifyContent: 'center',
        flex: 1,
        padding: 25,
        alignItems: 'center',
    },
    imageList : {
        flex: 1
    },
    gridSingleMenuView : {
        width: DeviceWidth*0.3, 
        height: DeviceWidth*0.3,
        marginBottom:1,
        backgroundColor: 'powderblue',
        borderColor: '#FFFFFF',
        borderWidth: 1
    }
});

export default GateLandingPage;