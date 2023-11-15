import React, {useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, TextInput} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../utils/scaling';

import {styles} from './styles';

export function Search({onSearch = () => {}, placeholder = 'Search'}) {
  const [search, setSearch] = useState('');
  const textInputRef = useRef(null);

  function handleFocus() {
    textInputRef.current.focus();
  }
  function handleSearch(searchedValue) {
    setSearch(searchedValue);
    onSearch(searchedValue);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={styles.searchInput}
        placeholder={placeholder}
        placeholderTextColor="#686C7A"
        value={search}
        onChangeText={handleSearch}
      />
    </TouchableOpacity>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};
