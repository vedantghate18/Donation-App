import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { getFontFamily } from '../../Helper/helper';
import style from './style';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const Header = props => {
  const styleToApply = () => {
    switch (props.type) {
      case 1:
        return style.title1;
      case 2:
        return style.title2;
      case 3:
        return style.title3;
      default:
        return style.title1;
    }
  };
  return (
    <View>
      <Text
        style={[styleToApply(), props.color && { color: props.color }]}
        numberOfLines={props.numberOfLines ? props.numberOfLines : null}
      >
        {props.title}
      </Text>
    </View>
  );
};
Header.default = {
  title: ' ',
  type: 1,
  color: '#000000',
};
Header.propTypes = {
  title: PropTypes.string,
  types: PropTypes.number,
  Color: PropTypes.string,
  numberOfLines: PropTypes.number,
};
export default Header;
