import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginRight: 5,
    marginLeft: 5,
  },

  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    padding: 5,
    fontSize: 12,
    fontWeight: '600'
  }
};


export { Button };
