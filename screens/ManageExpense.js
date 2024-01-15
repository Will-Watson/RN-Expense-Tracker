import { useLayoutEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  return (
    <View>
      <Text>Manage Expenses</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ManageExpense;
