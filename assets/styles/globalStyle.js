import { StyleSheet } from 'react-native';
import { verticalScale } from './scaling';

const globalStyle = StyleSheet.create({
  BackgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  marginBotom24: {
    marginBottom: verticalScale(24),
  },
});

export default globalStyle;
