import React from 'react';
import { ActivityIndicator, Alert, View } from 'react-native';
import CharactersListComponent from '../../components/class/CharactersListComponent';
import StatusBarComponent from '../../components/class/StatusBarComponent';
import CharactersService from '../../services/CharactersService'
import CharactersListViewStyle from '../styles/CharactersListViewStyle'

export default class CharactersListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      showLoader: true
    };
  }

  componentDidMount() {
    CharactersService.list().then((result, reject) => {
      if(reject){
        Alert.alert('Alert', reject);
      }else{
        this.setState({
          characters: result,
          showLoader: false
        });
      }      
    });
  }

  renderComponents() {
    if(this.state.showLoader){
      return (
        <ActivityIndicator size={ 'large' } style={ CharactersListViewStyle.loader } />
      );
    }

    if(this.state.characters.length > 0) {
      return (
        <CharactersListComponent characters={ this.state.characters } touch={ pageParams => { this.props.navigation.navigate('CharactersDetailsView', pageParams); }} />
      )
    }
  }

  render() {
    return (
      <View style={ CharactersListViewStyle.container }>
        <StatusBarComponent />
        { this.renderComponents() }
      </View>
    );
  }

}