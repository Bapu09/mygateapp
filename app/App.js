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

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';



const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
          <Header />
          <Landingpage />
      </SafeAreaView>
      
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
});

export default App;
