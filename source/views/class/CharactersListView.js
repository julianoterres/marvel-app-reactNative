import React from 'react';
import { View } from 'react-native';
import CharactersListComponent from '../../components/class/CharactersListComponent';
import StatusBarComponent from '../../components/class/StatusBarComponent';
import CharactersListViewStyle from '../styles/CharactersListViewStyle'

export default class CharactersListView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={ CharactersListViewStyle.container }>
        <StatusBarComponent />
        <CharactersListComponent touch={ pageParams => { this.props.navigation.navigate('CharactersDetailsView', pageParams); }} />
      </View>
    );
  }

}