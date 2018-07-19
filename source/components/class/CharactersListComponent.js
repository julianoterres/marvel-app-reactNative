import React from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import CharactersItemComponent from './CharactersItemComponent'
import CharactersListComponentStyle from '../styles/CharactersListComponentStyle'
import CharactersService from '../../services/CharactersService'

export default class CharactersListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      showLoader: true,
      loadingCharacterActive: false,
      ofsset: 0,
      limit: 20,
      total: 0
    };
  }

  componentDidMount() {
    this.loadCharacter();
  }

  loadCharacter() {
    CharactersService.list(this.state.ofsset, this.state.limit).then((data, reject) => {
      if(reject){
        Alert.alert('Alert', reject);
        this.setState({
          loadingCharacterActive: false
        });
      }else{
        this.setState({
          characters: this.state.characters.concat(data.results),
          showLoader: false,
          total: data.total,
          loadingCharacterActive: false
        });
      }      
    });
  }

  loadMoreCharacter() {
    if(!this.state.loadingCharacterActive && !this.alreadyLoadAll()){
      this.state.loadingCharacterActive = true;
      this.state.ofsset += this.state.limit;
      this.loadCharacter();
    }
  }

  renderFooter() {
    if(!this.alreadyLoadAll()) {
      return (
        <ActivityIndicator animating={ true } size={ 'small' } color={ '#FFFFFF' } style={ CharactersListComponentStyle.loaderFlatList } />
      );
    }
  }

  alreadyLoadAll() {
    if(this.state.characters.length < this.state.total) {
      return false;
    }
    return true;
  }

  renderComponents() {
    if(this.state.showLoader){
      return (
        <ActivityIndicator animating={ true } size={ 'large' } color={ '#FFFFFF' } />
      );
    }

    if(this.state.characters.length > 0) {
      return (
        <FlatList style={ CharactersListComponentStyle.list } 
                  data={ this.state.characters }
                  renderItem={ ({ item }) => ( <CharactersItemComponent character={ item } touch={ this.props.touch } /> )}
                  keyExtractor={ item => `${item.name}_${item.id}` }
                  onEndReached={ () => this.loadMoreCharacter() }
                  onEndReachedThreshold={ 1 }
                  ListFooterComponent={ this.renderFooter() } />  
      )
    }
  }

  render() {
    return (
      <View>
        { this.renderComponents() }
      </View>
    );
  }

}