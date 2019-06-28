import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

/**
 * A Material Design reusable text input field
 * @param {enumString} autoCapitalize - Determine capitalisation behaviour of text input
 * @param {string} value - Content to be displayed in `TextInput`
 * @param {func} onChangeText - Callback to run when text is changed
 * @param {enumString} textContentType - Expected semantic meaning for the content that users enter.
 *    You can add more to `propTypes` as necessary based on the underlying prop used by `TextInput`
 *    https://facebook.github.io/react-native/docs/textinput#textcontenttype
 * @param {string} title - Label for the field
 * @param {string} highlightColor - Color of border and title when the component is focused
 * @param {string} placeholder - Placeholder text when value is empty
 */
const MaterialInput = ({ autoCapitalize, value, onChangeText, textContentType, title, highlightColor, placeholder, secureTextEntry }) => {
  const textInput = useRef(null);
  const [inputFocused, setInputFocused] = useState(false);

  return (
    <MaterialInputContainer
      activeOpacity={1}
      onPress={() => textInput.current.focus()}
      borderColor={textInput.current && inputFocused ? highlightColor : 'rgba(118, 118, 118, 0.4)'}
    >
      <TitleText color={textInput.current && inputFocused ? highlightColor : '#767676'}>{title}</TitleText>
      <CustomTextInput
        onFocus={() => setInputFocused(true)}
        onBlur={() => setInputFocused(false)}
        ref={textInput}
        autoCapitalize={autoCapitalize}
        value={value}
        onChangeText={onChangeText}
        textContentType={textContentType}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.6)"
        secureTextEntry={secureTextEntry}
      />
    </MaterialInputContainer>
  );
};

MaterialInput.propTypes = {
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  textContentType: PropTypes.oneOf(['none', 'username', 'password']),
  title: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
};

MaterialInput.defaultProps = {
  autoCapitalize: 'none',
  value: '',
  onChangeText: undefined,
  textContentType: 'none',
  placeholder: '',
  secureTextEntry: false,
};

const MaterialInputContainer = styled.TouchableOpacity`
  background-color: #F5F5F5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 58px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) => props.borderColor};
  padding: 8px 16px 10px 16px;
`;

const TitleText = styled.Text`
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.4px;
  line-height: 16px;
`;

const CustomTextInput = styled.TextInput`
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.15px;
`;

export default MaterialInput;
