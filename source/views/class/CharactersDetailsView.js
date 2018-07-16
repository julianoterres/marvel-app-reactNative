import React from 'react';
import { Text, View } from 'react-native';
import StatusBarComponent from '../../components/class/StatusBarComponent';
import CharactersDetailsStyle from '../styles/CharactersDetailsStyle'

export default class CharactersDetailsView extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={ CharactersDetailsStyle.container }>
        <StatusBarComponent />
        <Text>Tela de detalhes</Text>
      </View>
    );
  }

}