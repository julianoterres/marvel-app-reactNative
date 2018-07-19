import React from 'react';
import { Text, View, Image } from 'react-native';
import StatusBarComponent from '../../components/class/StatusBarComponent';
import CharactersDetailsStyle from '../styles/CharactersDetailsStyle'
import CharactersDetailsComponent from '../../components/class/CharactersDetailsComponent';

export default class CharactersDetailsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      character: this.props.navigation.state.params.character
    };
  }

  render() {
    return (
      <View style={ CharactersDetailsStyle.container }>
        <StatusBarComponent />
         <CharactersDetailsComponent character={ this.state.character } />
      </View>
    );
  }

}