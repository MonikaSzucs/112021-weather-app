import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryName: '',
      regionName: ''
    };
  }

  componentDidMount() {
    var url = 'https://freegeoip.net/json/';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        this.setState({
          countryName: responseJson.country_name,
          regionName: responseJson.region_name
        });
      })
      .catch((error) => {
       //console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Country: {this.state.countryName}</Text>
        <Text>Region: {this.state.regionName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('Test', () => Test);