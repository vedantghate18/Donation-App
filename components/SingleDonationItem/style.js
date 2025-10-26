import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: verticalScale(170),
    borderRadius: horizontalScale(20),
  },
  badgeContainer: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
    opacity: 0.9,
  },
  InfoContainer: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default style;
