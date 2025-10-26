import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../Helper/helper';
import { scaleFontSize } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title1: {
    fontSize: scaleFontSize(24),
    fontFamily: getFontFamily('Inter', '600'),
    lineHeight: scaleFontSize(29),
  },
  title2: {
    fontSize: scaleFontSize(18),
    fontFamily: getFontFamily('Inter', '600'),
    lineHeight: scaleFontSize(22),
  },
  title3: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Inter', '600'),
    lineHeight: scaleFontSize(19),
  },
});

export default style;
