import { StyleSheet } from 'react-native';

const CharactersDetailsComponentStyle = StyleSheet.create({
  avatarContainer: {
    height: 210,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    width: '100%',
    height: '100%'
  },
  description: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Barlow Condensed',
    fontWeight: 'normal',
    marginHorizontal: 20,
    marginVertical: 20
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'Barlow Condensed',
    fontWeight: 'normal',
    marginHorizontal: 20,
    marginBottom: 20
  },
  errorMessage: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Barlow Condensed',
    fontWeight: 'normal',
    textAlign: 'center',
    width: '100%'
  }
});

export default CharactersDetailsComponentStyle;