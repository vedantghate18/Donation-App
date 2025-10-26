import { StyleSheet } from 'react-native';
import {
  verticalScale,
  horizontalScale,
  scaleFontSize,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../Helper/helper';

const style = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(24),
    flex: 1,
    justifyContent: 'center',
  },
  registry: {
    alignItems: 'center',
  },
  error: {
    color: 'red',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    marginBottom: verticalScale(24),
  },
});

export default style;
