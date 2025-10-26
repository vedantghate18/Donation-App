import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../Helper/helper';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    margintop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(14),
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  },
});

export default style;
