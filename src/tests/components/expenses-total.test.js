import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should return correct amount for one expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195);
});

test('should return the correct amount for all expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(114195);
})