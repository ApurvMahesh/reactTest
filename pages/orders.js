/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import Home from './pages/home';
import { StackNavigator } from 'react-navigation';
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Menu from './pages/menu';
import { TabNavigator } from 'react-navigation';
import { NavigationComponent } from 'react-native-material-bottom-navigation'

export  class Orders extends Component {

  static navigationOptions = ({ navigation }) => ({
    title:'Welcome',
    headerTintColor: 'white',

     headerTitleStyle : {textAlign: 'center',alignSelf:'center', color:'white'},
        headerStyle:{
            backgroundColor:'#D33E1E',
        },
    });
  displayName:'Orders'

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
      <StatusBar
    backgroundColor="#FF5733"
    barStyle="light-content"
  />
        <Button
          onPress={() => navigate('Chat', {title: 'Home'})}
          title="Orders to Home"
        />
      </View>
    );
  }
}


AppRegistry.registerComponent('AwesomeProject', () => Orders);
