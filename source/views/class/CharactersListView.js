import React from 'react';
import { View } from 'react-native';
import CharactersListComponent from '../../components/class/CharactersListComponent';
import StatusBarComponent from '../../components/class/StatusBarComponent';
import CharactersListViewStyle from '../styles/CharactersListViewStyle';
import SplashScreen from 'react-native-splash-screen';

export default class CharactersListView extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    SplashScreen.hide()
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