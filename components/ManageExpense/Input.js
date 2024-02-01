import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = ({label, textInputConfig}) => {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default Input;
