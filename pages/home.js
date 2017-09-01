/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
 var React = require('react');
 var {
   AppRegistry,
   Image,
   ListView,
   TouchableHighlight,
   StyleSheet,
   Text,
   View,
 } = require('react-native');




var Home = React.createClass({

  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(this._genRows({})),
    };
  },

  _pressData: ({}: {[key: number]: boolean}),

  componentWillMount: function() {
    this._pressData = {};
  },

  render: function() {
    return (
      // ListView wraps ScrollView and so takes on its properties.
      // With that in mind you can use the ScrollViewHome's contentContainerStyle prop to style the items.
      <ListView contentContainerStyle={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    );
  },

  _renderRow: function(rowData: string, sectionID: number, rowID: number) {
    var rowHash = Math.abs(hashCode(rowData));
    //var imgSource = require(THUMB_URLS[rowHash % THUMB_URLS.length]);
    return (
      <TouchableHighlight onPress={() => this._pressRow(rowID)} underlayColor='rgba(0,0,0,0)'>
        <View>
          <View style={styles.row}>
            <Image style={styles.thumb} source={require('../srces/imgmenu1.png')} />
            <Text style={styles.text}>Cafe 5H by the Kitchen</Text>
            <Text style={styles.textNew}>
              {rowData}
            </Text>
            <Text style={styles.textRed}>Open Now   3.0*</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  },

  _genRows: function(pressData: {[key: number]: boolean}): Array<string> {
    var dataBlob = [];
    for (var ii = 0; ii < 100; ii++) {
      var pressedText = pressData[ii] ? ' (X)' : '';
      dataBlob.push('Cell ' + ii + pressedText);
    }
    return dataBlob;
  },

  _pressRow: function(rowID: number) {
    this._pressData[rowID] = !this._pressData[rowID];
    this.setState({dataSource: this.state.dataSource.cloneWithRows(
      this._genRows(this._pressData)
    )});
  },
});

//var THUMB_URLS = ['../srces/imgmenu1.png', '../srces/imgmenu2.png', '../srces/imgmenu3.png', '../srces/imgmenu4.png', '../srces/imgmenu5.png', '../srces/imgmenu6.png', '../srces/imgmenu7.png', '../srces/imgmenu8.png', '../srces/imgmenu9.png', '../srces/imgmenu10.png', '../srces/imgmenu11.png', '../srces/imgmenu12.png'];

/* eslint no-bitwise: 0 */
var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};

var styles = StyleSheet.create({
  list: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  row: {
    justifyContent: 'center',
    padding: 2,
    margin: 2,
    width: 110,
    height: 150,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },
  thumb: {
    width: 110,
    height: 64
  },
  text: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold'
  },
  textNew: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'normal',
    alignItems: 'flex-start',
  },
  textRed: {
    flex: 1,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'red'
  }
});
module.exports = Home;
AppRegistry.registerComponent('AwesomeProject', () => Home);
