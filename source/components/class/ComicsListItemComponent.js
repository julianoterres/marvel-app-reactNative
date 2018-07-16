import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import ComicsListItemComponentStyle from '../styles/ComicsListItemComponentStyle';

export default class ComicsListItemComponent extends React.Component {

  render() {
    const comic = this.props.comic;
    const thumbnail = comic.thumbnail;
    const magezine = `${thumbnail.path }/portrait_medium.${thumbnail.extension}`;
    return (
      <View style={ ComicsListItemComponentStyle.comicItemContainer }>
        <Image style={ ComicsListItemComponentStyle.magazine } source={{ uri: magezine }} />
        <Text style={ ComicsListItemComponentStyle.comicTitle }> { comic.title } </Text>
      </View>
    );
  }

}