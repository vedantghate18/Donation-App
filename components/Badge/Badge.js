import React, { useRef, useState } from 'react';

import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import { event } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { horizontalScale } from '../../assets/styles/scaling';

const Badge = props => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const BadgeWidth = { width: horizontalScale(paddingHorizontal * 2 + width) };
  return (
    <View style={[style.badge, BadgeWidth]}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={style.title}
      >
        {props.title}
      </Text>
    </View>
  );
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Badge;
