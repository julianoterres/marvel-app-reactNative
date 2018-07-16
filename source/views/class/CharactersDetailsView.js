import React from 'react';
import { Text, View, Image } from 'react-native';
import StatusBarComponent from '../../components/class/StatusBarComponent';
import CharactersDetailsStyle from '../styles/CharactersDetailsStyle'
import CharactersDetailsComponent from '../../components/class/CharactersDetailsComponent';
import CharactersService from '../../services/CharactersService'

export default class CharactersDetailsView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      character: this.props.navigation.state.params.character,
      comics: []
    };
  }

  componentDidMount() {
    CharactersService.comics(character.id).then((result, reject) => {
      if(reject){
        Alert.alert('Alert', reject);
      }else{
        this.setState({
          comics: result
        });
      }
    });
  }

  render() {
    return (
      <View style={ CharactersDetailsStyle.container }>
        <StatusBarComponent />
         <CharactersDetailsComponent character={ this.state.character } comics={ this.state.comics } />
      </View>
    );
  }

}