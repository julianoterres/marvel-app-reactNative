import { StyleSheet } from 'react-native';

const ComicsListItemComponentStyle = StyleSheet.create({
  comicItemContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center',
    marginHorizontal: 20
  },
  magazine: {
    flex: 1,
    width: 50,
    height: 50,
    marginRight: 10
  },
  comicTitle: {
    flex: 4,
    textAlign: 'left',
    fontSize: 18,
    color: 'white',
    fontFamily: 'Barlow Condensed',
    fontWeight: 'normal'
  }
});

export default ComicsListItemComponentStyle;