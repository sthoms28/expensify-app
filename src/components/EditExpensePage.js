import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './Expenseform';
import {editExpense, removeExpense} from '../actions/expenses'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
export class EditExpensePage extends React.Component {
    
    onSubmit=(expense) => {
        console.log(this.props); 
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/');
       console.log('updated', expense);
    };
    onRemove=() => {
        this.props.removeExpense({id: this.props.expense.id});
        this.props.history.push('/');
    };
   render() {
    return (
       // <div> Editing expense with id of {props.match.params.id}</div>
        <div>
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
            
        />
        <button onClick={this.onRemove}> Remove </button>
      </div>
    ); 
  }
};

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id,expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
});  
const mapStateToProps = (state,props) => {
 return {
     expense: state.expenses.find((expense) => expense.id === props.match.params.id)
     
 };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);