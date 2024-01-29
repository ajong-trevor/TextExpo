import React from "react";
import { Text, View } from 'react-native';

const RowText = (props) => {
  const {
    containerStyles,
    messageOne,
    messageTwo,
    messageOneStyles,
    messageTwoStyles
  } = props;

  return (
    <View style={containerStyles}>
      <Text style={messageOneStyles}>{messageOne}</Text>
      <Text style={messageTwoStyles}>{messageTwo}</Text>
    </View>
  );
}

export default RowText;