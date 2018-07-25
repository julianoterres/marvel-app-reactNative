import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import CharactersListView from './views/class/CharactersListView';
import CharactersDetailsView from './views/class/CharactersDetailsView';

export default createStackNavigator(
  {
    'Main': {
      screen: CharactersListView
    },
    'CharactersDetailsView': {
      screen: CharactersDetailsView,
      navigationOptions: ({ navigation }) => {
        character = navigation.state.params.character;
        return ({
          title: character.name
        });
      }
    }
  },{
    navigationOptions: {
      title: 'Characters',
      headerTintColor: 'white',
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: '#B50F16',
        elevation: 0,
        borderBottomWidth: 0
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'BarlowCondensed-Bold'
      }
    }
  }
);