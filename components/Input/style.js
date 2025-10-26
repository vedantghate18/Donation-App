import { StyleSheet, TextInputComponent } from 'react-native';
import { getFontFamily } from '../../Helper/helper';
import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';
import Input from './Input';

const style = StyleSheet.create({
  label: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#36455A',
  },
  inputComponent: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167,167,167,0.5)',
  },
});

export default style;
