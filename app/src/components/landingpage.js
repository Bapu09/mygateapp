import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

import Login from './login';
import Signup from './signup';

class Landingpage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin : false,
            showSignUp : false
        }
    }
    onPress() {
        
    }
    render() {
        if(this.state.showLogin) {
            return (
                <Login />
            )
        }
        if(this.state.showSignUp) {
            return (
                <Signup />
            )
        }
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.mainContainer}>
                <View style={styles.cardView}>
                    <Text style={styles.textCenter}>Already have account ?</Text>
                    <TouchableHighlight
                        style={styles.cardButton}
                        onPress={() => {
                            this.setState({showLogin:true});
                        }}
                    >
                        <Text style={styles.cardButtonText}> Sign In</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.cardView}>
                    <Text style={styles.textCenter}>Need An Account ?</Text>
                    <TouchableHighlight style={styles.cardButton}>
                        <Text style={styles.cardButtonText}> Sign Up</Text>
                    </TouchableHighlight>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ff9000',
        paddingTop: '40%',
        textAlign: 'center',
        
    },
    cardView: {
        marginVertical : 15,
        alignItems:'center',
        
    },
    cardButton : {
        backgroundColor: '#007bff',
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        borderRadius: 10
        
    },
    cardButtonText: {
        fontSize:24,
        color: 'white'
    },
    textCenter : {
        textAlign: 'center', 
        marginBottom: 5,
        fontSize: 18
        
    }
    
})

export default Landingpage