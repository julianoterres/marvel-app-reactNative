import React from 'react';
import { FlatList } from 'react-native';
import CharactersItemComponent from './CharactersItemComponent'
import CharactersListComponentStyle from '../styles/CharactersListComponentStyle'

export default class CharactersListComponent extends React.Component {

  render() {
    return (
      <FlatList style={CharactersListComponentStyle.list} 
                data={this.props.characters} 
                renderItem={ ({item}) => (
        <CharactersItemComponent character={ item } touch={ this.props.touch } />
      )} />
    );
  }

}