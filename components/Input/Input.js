import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import style from './style';
import PropTypes from 'prop-types';

const Input = props => {
  const [value, setValue] = useState('');
  return (
    <View>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        placeholder={props.placeholder ? props.placeholder : null}
        keyboardType={props.keyboardType}
        secureTextEntry={props.secureTextEntry}
        style={style.inputComponent}
        value={value}
        onChangeText={val => {
          setValue(val);
          props.onChangeText(val);
        }}
      />
    </View>
  );
};

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.prototype = {
  secureTextEntry: PropTypes.bool,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func,
};

export default Input;
