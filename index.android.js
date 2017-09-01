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
export  class AwesomeProject extends Component {
  constructor(props) {
      super(props);
      this.id = -1;
  }
  static navigationOptions = ({ navigation }) => ({
    title:'Welcome',
    headerTintColor: 'white',

     headerTitleStyle : {textAlign: 'center',alignSelf:'center', color:'white'},
        headerStyle:{
            backgroundColor:'#D33E1E',
        },
    });
  displayName:'AwesomeProject'

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
          title="Chat with Lucy"
        />

        <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{ height: 56, elevation: 8, position: 'absolute', left: 0, bottom: 0, right: 0 }}
        onTabChange={(newTabIndex) => {alert(`New Tab at position ${newTabIndex}`), this.id= '{newTabIndex}', <Rank/>}}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="Funxnal"
          icon={<Image style={{borderRadius: 20,  height:30, width: 30}}  source= {require('./srces/logo.jpg')} backgroundColor = 'transparent'/>}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Home"
          icon={<Image style={{borderRadius: 20,  height:30, width: 30}} source= {require('./srces/homebtnnrm.png')} backgroundColor = 'transparent'/>}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="Menu"
          icon={<Image style={{borderRadius: 20,  height:30, width: 30}} source= {require('./srces/menubtnnrm.png')} backgroundColor = 'transparent'/>}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Orders"
          icon={<Image style={{borderRadius: 20,  height:30, width: 30}} source= {require('./srces/orderbtnnrm.png')} backgroundColor = 'transparent'/>}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Notifications"
          icon={<Image style={{borderRadius: 20,  height:30, width: 30}} source= {require('./srces/notifibtnnrm.png')} backgroundColor = 'transparent'/>}
        />
      </BottomNavigation>
      </View>
    );
  }
}

var Rank = React.createClass({
  render: function() {
    switch (this.props.id) {
      case '0':
        return (
          <View style={styles.lvl2}>
            <Image source={require('./srces/imgmenu1.png')} style={{padding: 10}} />
          </View>
          );
      case '1':
        return (
          <View style={styles.lvl2}>
            <Image source={require('./srces/imgmenu2.png')} style={{padding: 10}} />
          </View>
          );
      case '2':
        return (
          <View style={styles.lvl2}>
            <Image source={require('./srces/imgmenu3.png')} style={{padding: 10}} />
            <Image source={require('./srces/imgmenu4.png')} style={{padding: 10}} />
          </View>
          );
      case '3':
        return (
          <View style={styles.lvl2}>
            <Image source={require('./srces/imgmenu5.png')} style={{padding: 10}} />
            <Image source={require('./srces/imgmenu6.png')} style={{padding: 10}} />
          </View>
          );
      default:
        return (
          <View style={styles.lvl2}>
            <Text>Null</Text>
          </View>
          );
      }
    }
  });
  var styles = StyleSheet.create({
    lvl2: {
      flexDirection: 'row',
      backgroundColor: 'red',
      justifyContent: 'center',
      alignItems: 'center',
    },
    lvl1: {
      padding: 10,
      flexDirection: 'row',
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  module.exports = Rank;

const MyApp = TabNavigator({
  MoviesAndTV: { screen: AwesomeProject },
  Music: { screen: Menu },
  Newsstand: { screen: Menu }
}, {
  tabBarComponent: NavigationComponent,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    bottomNavigationOptions: {
      labelColor: 'white',
      rippleColor: 'white',
      tabs: {
        MoviesAndTV: {
          barBackgroundColor: '#37474F'
        },
        Music: {
          barBackgroundColor: '#00796B'
        },
        Newsstand: {
          barBackgroundColor: '#EEEEEE',
          labelColor: '#434343', // like in the standalone version, this will override the already specified `labelColor` for this tab
          activeLabelColor: '#212121',
          activeIcon: <Icon size={24} color="#212121" name="videocam" />
        }
      }
    }
  }
})
const AwesomeProjects = StackNavigator({
  Home: { screen: AwesomeProject },
  Chat: { screen: Menu },
  Menu: { screen: Menu }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProjects);
