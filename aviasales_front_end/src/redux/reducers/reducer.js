import {
  REQUEST_TICKETS,
  REQUEST_TICKETS_SUCCESS,
  REQUEST_TICKETS_ERROR
} from '../actions/actionsTypes';

const initialState = {
  tickets: 'loading'
};

export default function reducer(state = initialState, action) {
     switch (action.type) {
       case REQUEST_TICKETS:
         return { ...state, tickets: 'loading' };
       case REQUEST_TICKETS_SUCCESS:
         return { ...state, branches: action.payload };
       case REQUEST_TICKETS_ERROR:
         return { ...state, branches: null };
       default:
         return state;
     }
   }
   