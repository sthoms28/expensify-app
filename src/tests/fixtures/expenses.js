import moment from 'moment';

export default  [{
    id:'1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
    endDate: moment(0).add(5, 'days').valueOf()
},{
    id:'2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    endDate: moment(0).add(2, 'days').valueOf()
},{
    id:'3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
    endDate: moment(0).add(5, 'days').valueOf()
}];
