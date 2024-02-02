import axios from 'axios';

const BACKEND_URL = 'https://rn-expense-tracker-e7f44-default-rtdb.firebaseio.com';

export const storeExpense = (expenseData) => {
  return axios.post(
    BACKEND_URL + '/expenses.json',
    expenseData
  );
};

export const fetchExpenses = () => {
  axios.get(BACKEND_URL + '/expenses.json');
}
