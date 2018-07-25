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
    fontFamily: 'BarlowCondensed-Regular',
    marginHorizontal: 20,
    marginVertical: 20
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontFamily: 'BarlowCondensed-Bold',
    marginHorizontal: 20,
    marginBottom: 20
  },
  errorMessage: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'BarlowCondensed-Regular',
    textAlign: 'center',
    width: '100%'
  }
});

export default CharactersDetailsComponentStyle;