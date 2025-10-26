import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../Helper/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'Center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default style;
