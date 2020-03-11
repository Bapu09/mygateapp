import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TextInput, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'phone' : '',
            'password' : ''
        };
    }
    
    doLogin=()=> {
        const {phone,password} =this.state
        const data = new FormData();
        data.append('phone', phone);
        data.append('password', password);
        let response = fetch(
            'http://10.0.2.2:5000/login',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                body: data
            }
        ).then(response=> response.json()
        ).then((result) => {
            if(result.code == 200) {
                this.saveToken(result.token);
            }
        }).catch((error) => {
            alert(error)
        });
    }
    
    saveToken = async (token) => {
        try {
            await AsyncStorage.setItem('@user_token', token);
            alert('Token Saved');
        } catch(e) {
            alert('Error Occurred : '+JOSN.stringify(e));
        }
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
                            onChangeText={text => this.setState({ phone: text })}
                             />
                    </View>
                    <View style={styles.formGroup}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.formControl}
                            secureTextEntry
                            onChangeText={text => this.setState({ password: text })}
                             />
                    </View>
                    <TouchableHighlight style={styles.cardButton} onPress={this.doLogin}>
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