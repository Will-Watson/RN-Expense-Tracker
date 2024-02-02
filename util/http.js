import axios from 'axios';

export const storeExpense = (expenseData) => {
  return axios.post(
    'https://rn-expense-tracker-e7f44-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
};
