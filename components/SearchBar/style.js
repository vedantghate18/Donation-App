import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import { getFontFamily } from '../../Helper/helper';

const style = StyleSheet.create({
  input: {
    marginLeft: horizontalScale(6),

    flex: 1,
    height: '100%',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(14),
    color: '#686C7A',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F5F9',
    height: verticalScale(50),
    borderRadius: horizontalScale(15),
  },
});

export default style;
