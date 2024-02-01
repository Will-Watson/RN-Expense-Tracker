import { View, StyleSheet } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  const amountChangedHandler = () => {};

  return (
    <View>
      <Input
        label='Amount'
        textInputConfig={{
          keyboardType: 'decimal-pad',
          onChangeText: amountChangedHandler,
        }}
      />
      <Input
        label='Date'
        textInputConfig={{
          placeholder: 'YYYY-MM-DD',
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label='Description' textInputConfig={{
        multiline: true,
        autoCorrect: false,
        autoCapitalize: 'sentences',
        onChangeText: () => {},
      }} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpenseForm;
