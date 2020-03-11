/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Landingpage from './src/components/landingpage.js';
import GateLandingPage from './src/components/gatelandingpage';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import AsyncStorage from '@react-native-community/async-storage';

const getToken = async () => {
    try {
        global.user_token = await AsyncStorage.getItem('@user_token');
    } catch(e) {
        alert('Error Occurred : '+JOSN.stringify(e));
    }
}

const App: () => React$Node = () => {
  getToken()
  if(global.user_token !== null) {
    return (
      <>
        <SafeAreaView>
          <GateLandingPage />
        </SafeAreaView>
      </>
    )
  } else {
    return (
      <>
        <SafeAreaView>
            <Header />
            <Landingpage />
        </SafeAreaView>
        
      </>
    );
  }
  
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
