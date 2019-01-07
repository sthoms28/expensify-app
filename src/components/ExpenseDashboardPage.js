import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem';
const ExpenseDashboardPage = () => (
    <div>
      <ExpenseListFilters />
      <ExpenseList/>
    </div>
); 

export default ExpenseDashboardPage;