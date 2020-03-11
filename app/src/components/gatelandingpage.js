import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';

class GateLandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading : false,
            iconSource : {
                
            }
        };
    }
    
    componentDidMount() {
        var that = this;
        let items = Array.apply(null, Array(60)).map((v,i) => {
            return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) };
        });
        
        that.setState({
            iconSource : items
        });
    }
    
    render() {
        return (
            <View style={styles.iconWrapper}>
                <FlatList
                    style={styles.gridview}
                    data={this.state.iconSource}
                    renderItem={ ({item}) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <Image style={styles.imageThumbnail} source={{ uri: item.src }} />
                        </View>
                    )}
                    numColumns={3}
                    keyExtractor={(item, index) => index.toString()}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    iconWrapper : {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },
    imageThumbnail : {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    }
});

export default GateLandingPage;