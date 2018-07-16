import React from 'react';
import { View } from 'react-native';
import CharactersListComponent from '../../components/class/CharactersListComponent';
import StatusBarComponent from '../../components/class/StatusBarComponent';
import CharactersService from '../../services/CharactersService'
import CharactersListStyle from '../styles/CharactersListStyle'

export default class CharactersListView extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    CharactersService.get().then((result, reject) => {

      if(reject){

      }else{

        this.setState({
          characters: result
        });

      }      

    });
  }

  renderComponents() {
    if(this.state.characters.length > 0) {
      return (
        <CharactersListComponent characters={ this.state.characters } touch={ pageParams => { this.props.navigation.navigate('CharactersDetailsView', pageParams); }} />
      )
    }
  }

  render() {
    return (
      <View style={ CharactersListStyle.container }>
        <StatusBarComponent />
        { this.renderComponents() }
      </View>
    );
  }

}