import React from 'react';
import { ActivityIndicator, Image, SectionList, Text, View } from 'react-native';
import CharactersDetailsComponentStyle from '../styles/CharactersDetailsComponentStyle'
import ComicsListItemComponent from './ComicsListItemComponent'
import CharactersService from '../../services/CharactersService'

export default class CharactersDetailsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comics: [],
      comicsMessageErrorShow: false,
      comicsShowLoader: true
    };
  }

  componentDidMount() {
    CharactersService.comics(character.id).then((result, reject) => {
      if(reject){
        Alert.alert('Alert', reject);
      }else{
        
        if(result.length >= 1){
          
          this.setState({
            comics: result,
            comicsShowLoader: false,
          });

        }else{

          this.setState({
            comicsShowLoader: false,
            comicsMessageErrorShow: true
          });

        }
      }
    });
  }

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

  renderLoader() {
    if(this.state.comicsShowLoader){
      return(
        <ActivityIndicator animating={ true } size={ 'small' } color={ '#FFFFFF' } />
      );
    }
  }

  renderMessageError() {
    if(this.state.comicsMessageErrorShow){
      return(
        <Text style={ CharactersDetailsComponentStyle.errorMessage } > Was not found comics to this character. </Text>
      );
    }
  }

  renderTitle(section) {
    return(
      <View>
        <Text style={ CharactersDetailsComponentStyle.title }> { section.title } </Text>
        { this.renderLoader() }
        { this.renderMessageError() }
      </View>
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
        sections={[{ title: 'Comics', data: this.state.comics }]}
        renderSectionHeader={ ({section}) => this.renderTitle(section)  }
        renderItem={ ({item}) => this.renderComic(item) }
        keyExtractor={ (item, index) => item.title }
        stickySectionHeadersEnabled={ false }
      />
    );
  }

}