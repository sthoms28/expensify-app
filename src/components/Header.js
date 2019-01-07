import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Header = () => (
    <header>
      <h1><NavLink to="/" activeClassName="is-active" exact={true}>Expensify</NavLink> </h1>
      <NavLink to="/create" activeClassName="is-active">Add Expense</NavLink>
      <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
      <NavLink to="/help" activeClassName="is-active">Help!</NavLink>
    </header>

);

export default Header;