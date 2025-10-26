import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    height: horizontalScale(44),
    width: horizontalScale(44),
    borderRadius: horizontalScale(26),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default style;
