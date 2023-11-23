import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput} from 'react-native';

import {styles} from './styles';

export function Input({
  label,
  placeholder,
  onChangeText,
  keyboardType,
  secureTextEntry,
}) {
  const [value, setValue] = useState('');

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={text => {
          setValue(text);
          onChangeText(text);
        }}
        placeholder={placeholder && placeholder}
        placeholderTextColor="#686C7A"
        keyboardType={keyboardType ? keyboardType : 'default'}
        style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

Input.defaultProps = {
  onChangeText: () => {},
  keyboardType: 'default',
  secureTextEntry: false,
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};
