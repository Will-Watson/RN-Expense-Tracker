import { TextInput, View, StyleSheet } from 'react-native';
import Input from './Input';

const ExpenseForm = () => {
  return (
    <View>
      <Input label = "Amount" />
      <Input label = "Date" />
      <Input label = "Description" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ExpenseForm;
