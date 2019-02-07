import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseListItem from './ExpenseListItem';

const ExpenseDashboardPage = () => (
    <div>
      <ExpenseListFilters />
      <ExpenseList/>
      <ExpensesSummary />
    </div>
); 

export default ExpenseDashboardPage;