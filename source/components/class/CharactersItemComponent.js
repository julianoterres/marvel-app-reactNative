import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import CharactersItemComponentStyle from '../styles/CharactersItemComponentStyle';

export default class CharactersItemComponent extends React.Component {

  render() {
    const character = this.props.character;
    const thumbnail = character.thumbnail;
    const avatarUrl = `${thumbnail.path }/portrait_medium.${thumbnail.extension}`;
    return (
      <TouchableOpacity onPress={() => { this.props.touch({character}); }}>
        <View style={ CharactersItemComponentStyle.line }>
          <Image style={CharactersItemComponentStyle.avatar} source={{ uri: avatarUrl }} />
          <Text style={ CharactersItemComponentStyle.text }>{character.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }

}