import { StyleSheet } from 'react-native';

const CharactersDetailsStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303030'
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 210
  },
  avatar: {
    width: 160,
    height: 160,
    borderRadius: 80
  },
  description: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 18,
    color: 'white',
    marginHorizontal: 20
  },
  title: {
    fontFamily: 'BarlowCondensed-Regular',
    fontSize: 24,
    color: 'white',
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 25
  }
});

export default CharactersDetailsStyle;