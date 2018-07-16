import { StyleSheet } from 'react-native';

const CharactersItemComponentStyle = StyleSheet.create({
  line: {
    flex: 1,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#646464',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  text: {
    fontSize: 18,
    paddingLeft: 15,
    flex: 7,
    color: 'white',
    fontFamily: 'Barlow Condensed',
    fontWeight: 'normal'
  },
  avatar: {
    aspectRatio: 1,
    flex: 1,
    marginLeft: 15,
    width: 40,
    height: 40,
    borderRadius: 20
  }
});

export default CharactersItemComponentStyle;