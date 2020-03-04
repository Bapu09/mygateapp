import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native';


class Login extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <View style={styles.loginContainer}>
                <Text style={styles.loginHeader}>Log In</Text>
                <View style={styles.formHolder}>
                    <View style={styles.formGroup}>
                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput
                            style={styles.formControl}
                            keyboardType="number-pad"
                             />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.formControl}
                            secureTextEntry
                             />
                    </View>
                    <TouchableHighlight style={styles.cardButton}>
                        <Text style={styles.cardButtonText}> Login</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer : {
        backgroundColor: '#ff9000',
        padding: 10
    },
    loginHeader : {
        color: '#FFFFFF',
        fontSize: 40,
        textTransform: 'uppercase',
        marginTop: '2%',
        marginBottom: '10%',
        textAlign: 'center'
    },
    formHolder : {
        padding: 10,
    },
    formGroup : {
        marginTop: 5,
        marginBottom: 10,
    },
    formControl : {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        fontSize: 18
    },
    inputLabel : {
        fontSize: 24,
        marginBottom: 5
    },
    cardButton : {
        backgroundColor: '#007bff',
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%',
        borderRadius: 10,
        marginLeft: '15%'
        
    },
    cardButtonText: {
        fontSize:24,
        color: 'white'
    }
})

export default Login