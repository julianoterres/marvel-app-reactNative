import React from 'react';
import { StatusBar } from 'react-native';

export default class StatusBarComponent extends React.Component {

  render() {
    return (
      <StatusBar barStyle="light-content" />
    );
  }

}