import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  AppRegistry,
  Image
} from 'react-native';
import Carousel from 'react-native-looped-carousel';
import Home from '../pages/home';
const { width, height } = Dimensions.get('window');

export default class Menu extends Component {
  static navigationOptions = ({ navigation }) => ({
      title: `${navigation.state.params.title}`,
      headerTintColor: 'white',

       headerTitleStyle : {textAlign: 'center',alignSelf:'center', color:'white'},
          headerStyle:{
              backgroundColor:'#D33E1E',
          },
      });
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: 200 } });
  }

  render() {
    return (
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={5000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Image style={this.state.size} source= {require('../srces/headimage.png')} backgroundColor = 'transparent'/></View>
          <View style={[{ backgroundColor: 'red' }, this.state.size]}><Image style={this.state.size} source= {require('../srces/imgmenu2.png')} backgroundColor = 'transparent'/></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Image style={this.state.size} source= {require('../srces/imgmenu3.png')} backgroundColor = 'transparent'/></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Image style={this.state.size} source= {require('../srces/imgmenu4.png')} backgroundColor = 'transparent'/></View>
          <View style={[{ backgroundColor: 'blue' }, this.state.size]}><Image style={this.state.size} source= {require('../srces/imgmenu5.png')} backgroundColor = 'transparent'/></View>
        </Carousel>
        <Home/>
      </View>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () => Menu);
