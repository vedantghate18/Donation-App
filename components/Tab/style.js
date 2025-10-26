import { StyleSheet } from 'react-native';
import { getFontFamily } from '../../Helper/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    color: '#FFFFFF',
    textAlign: 'center',
    paddingVertical: 10,
  },
  inactiveTab: {
    backgroundColor: '#d8dbe1ff',
  },
  inactiveTitle: {
    color: '#79869F',
  },
  activeTab: {
    backgroundColor: '#007AFF',
  },
  activeTitle: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default style;
