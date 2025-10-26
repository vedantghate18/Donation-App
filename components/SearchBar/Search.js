import React, { useRef, useState } from 'react';
import style from './style';
import { Pressable, TextInput, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { scaleFontSize } from '../../assets/styles/scaling';
import PropTypes from 'prop-types';

const Search = props => {
  const textInputRef = useRef(null);
  const [search, setSearch] = useState('');

  const handleFocus = () => {
    textInputRef.current?.focus();
  };

  const handleSearch = searchValue => {
    setSearch(searchValue);
    if (typeof props.onSearch === 'function') {
      props.onSearch(searchValue);
    }
  };

  return (
    <Pressable style={style.container} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}
      />
      <TextInput
        placeholder={props.placeholder || 'Search'}
        ref={textInputRef}
        style={style.input}
        value={search}
        onChangeText={handleSearch}
      />
    </Pressable>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Search;
