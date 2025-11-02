import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
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
  backButton: {
    marginLeft: horizontalScale(14),
    marginTop: verticalScale(7),
  },
  error: {
    color: '#FF0000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    marginBottom: verticalScale(24),
  },
  success: {
    color: '#008000',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    marginBottom: verticalScale(24),
  },
});

export default style;
