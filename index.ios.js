/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var CookieManager = require('react-native-cookies');


// set a cookie
CookieManager.set({
    name: 'myCookie',
    value: 'myValue',
    domain: 'some domain',
    origin: 'some origin',
    path: '/',
    version: '1',
    expiration: '2015-05-30T12:30:00.00-05:00'
}, (err, res) => {
    console.log('cookie set!');
    console.log(err);
    console.log(res);
});

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Ayoo = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});


AppRegistry.registerComponent('Ayoo', () => Ayoo);
