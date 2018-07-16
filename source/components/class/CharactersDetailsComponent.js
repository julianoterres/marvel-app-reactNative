import React from 'react';
import { Image, SectionList, Text, View } from 'react-native';
import CharactersDetailsComponentStyle from '../styles/CharactersDetailsComponentStyle'
import ComicsListItemComponent from './ComicsListItemComponent'

export default class CharactersDetailsComponent extends React.Component {

  renderListHeader(character) {
    const thumbnail = character.thumbnail;
    const avatarUrl = `${thumbnail.path }/landscape_incredible.${thumbnail.extension}`;
    return(
      <View>
        <View style={ CharactersDetailsComponentStyle.avatarContainer }>
          <Image style={ CharactersDetailsComponentStyle.avatar } source={{ uri: avatarUrl }} />
        </View>
        <Text style={ CharactersDetailsComponentStyle.description }>{ character.description }</Text>
      </View>
    );
  }

  renderTitle(section) {
    let title = null;
    if(this.props.comics.length >= 1){
      title = <Text style={ CharactersDetailsComponentStyle.title }> { section.title } </Text>;
    }
    return(
      title
    );
  }

  renderComic(comic) {
    return(
      <ComicsListItemComponent comic={ comic } />
    );
  }

  render() {
    return (
      <SectionList
        ListHeaderComponent={ this.renderListHeader(this.props.character) }
        sections={[{ title: 'Comics', data: this.props.comics }]}
        renderSectionHeader={ ({section}) => this.renderTitle(section)  }
        renderItem={ ({item}) => this.renderComic(item) }
        keyExtractor={ (item, index) => item.title }
        stickySectionHeadersEnabled={ false }
      />
    );
  }

}