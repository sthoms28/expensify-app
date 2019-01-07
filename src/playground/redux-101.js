import { createStore} from 'redux';

//Action generators
// const add = ({ a, b}, c ) => {
//     return a + b + c ;
// };
// console.log(add({a:1, b:12}, 100))
const incrementCount = ({incrementBy = 1} = {}) => ({
          type: 'INCREMENT',
          incrementBy
          //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
   });
const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
    //incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
});

const setCount = ({count = 101} = {})  => ({
    type: 'SET',
    count
});

const resetCount = ()  => ({
    type: 'RESET',
    
});

//Reducers
//1. Pure functions
//2/ Never change state or action

const countReducer = ((state = {count: 0}, action) =>{
    switch(action.type){
       
         case 'INCREMENT':
        // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        return {
            count: state.count + action.incrementBy
    };
     
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
    return {
        count: state.count - decrementBy
};
case 'SET':
    return {
        count: action.count
    };

case 'RESET':
    return {
        count:  0
};
    default:
      return state;
}
   
});

const store = createStore(countReducer);
        
// store.dispatch(
//     {
//     type: 'DECREMENT'
//     decrmentBy: 10
//     });
store.dispatch(decrementCount({decrementBy: 10}));
// store.dispatch({
//     type: 'SET',
//     count: 101
//     });
store.dispatch(setCount({count: 102}));
store.dispatch(resetCount());