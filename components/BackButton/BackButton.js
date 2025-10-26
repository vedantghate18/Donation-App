import React from 'react';
import style from './style';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = props => {
  return (
    <Pressable onPress={props.onPress} style={style.container}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

BackButton.PropTypes = {
  onPress: PropTypes.func.isRequired,
};
export default BackButton;
