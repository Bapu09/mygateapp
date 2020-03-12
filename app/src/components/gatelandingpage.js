import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Image, Dimensions, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUsersCog, faPlusSquare, faList, faCog } from '@fortawesome/free-solid-svg-icons';

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
            <>
                <View style={styles.mainBar}>
                    <TouchableOpacity style={styles.userCog}>
                        <FontAwesomeIcon icon= { faCog } style={styles.menuIcon} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.menuWrapper}>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: "grey"}}>
                            <View>
                                <View style={styles.gridSingleMenuView}>
                                    <Text style={styles.menuText}>Manage Users</Text>
                                    <FontAwesomeIcon icon= { faUsersCog } style={styles.menuIcon} />
                                </View>
                                <View style={styles.gridSingleMenuView}>
                                    <Text style={styles.menuText}>Add Activity</Text>
                                    <FontAwesomeIcon icon= { faPlusSquare } style={styles.menuIcon} />
                                </View>
                                <View style={styles.gridSingleMenuView}>
                                
                                </View>
                                <View style={styles.gridSingleMenuView}>
                                
                                </View>
                            </View>
                            <View>
                                <View style={styles.gridSingleMenuView}>
                                    <Text style={styles.menuText}>Today Activity</Text>
                                    <FontAwesomeIcon icon= { faList } style={styles.menuIcon} />
                                </View>
                                <View style={styles.gridSingleMenuView}>
                                
                                </View>
                                <View style={styles.gridSingleMenuView}>
                                
                                </View>
                                <View style={styles.gridSingleMenuView}>
                                
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </>
            
        )
    }
}

const styles = StyleSheet.create({
    mainBar : {
      backgroundColor:  'powderblue',
      borderBottomWidth: 2,
      borderBottomColor: '#FFF',
      padding: 5
    },
    menuWrapper : {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        marginTop: 4
    },
    imageList : {
        flex: 1
    },
    gridSingleMenuView : {
        width: DeviceWidth*0.49, 
        height: DeviceWidth*0.5,
        marginBottom:1,
        backgroundColor: 'powderblue',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuText : {
        fontSize: 20,
        
    },
    menuIcon : {
        fontSize: 25,
    },
    userCog : {
        textAlign : 'right',
        alignSelf: 'flex-end',
        padding: 5,
        backgroundColor: '#FFFFFF',
        borderRadius : 5
    }
});

export default GateLandingPage;