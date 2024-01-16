import { createContext, useReducer } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-01-15'),
  },
  {
    id: 'e2',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2024-01-11'),
  },
  {
    id: 'e3',
    description: 'Some Bananas',
    amount: 5.99,
    date: new Date('2024-01-03'),
  },
  {
    id: 'e4',
    description: 'Liquor',
    amount: 14.99,
    date: new Date('2023-12-31'),
  },
  {
    id: 'e5',
    description: 'A book',
    amount: 18.59,
    date: new Date('2023-12-22'),
  },
  {
    id: 'e6',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2024-01-15'),
  },
  {
    id: 'e7',
    description: 'A pair of trousers',
    amount: 89.29,
    date: new Date('2024-01-11'),
  },
  {
    id: 'e8',
    description: 'Some Bananas',
    amount: 5.99,
    date: new Date('2024-01-03'),
  },
  {
    id: 'e9',
    description: 'Liquor',
    amount: 14.99,
    date: new Date('2023-12-31'),
  },
  {
    id: 'e10',
    description: 'A book',
    amount: 18.59,
    date: new Date('2023-12-22'),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id }, ...state];

    case 'UPDATE':
      const updatableExpenseIndex = state.findIndex(() => {
        return expense.id === action.payload.id;
      });
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updateExpenses = [...state];
      updateExpenses[updatableExpenseIndex] = updatedItem;
      return updateExpenses;

    case 'DELETE':
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: 'ADD', payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
};

export default ExpensesContextProvider;
