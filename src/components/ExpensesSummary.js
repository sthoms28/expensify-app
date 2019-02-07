import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import moment from 'moment';

const ExpensesSummary = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p> none </p>
         ):(
         props.expenses.map((expense)  => {
          return <ExpenseListItem key={expense} {...expense} />
         
            })
        )
    }
   </div>
);
        const mapStateToProps = (state) => {
            return {
               expenses: selectExpenses(state.expenses, state.filters)
               
            };
        };
        
        export default connect (mapStateToProps)(ExpensesSummary);
