import { createAction } from 'redux-actions';
import {
  FETCH_TICKETS,
  REQUEST_TICKETS,
  REQUEST_TICKETS_SUCCESS,
  REQUEST_TICKETS_ERROR
} from './actionsTypes';

export const fetchTickets = createAction(FETCH_TICKETS);
export const requestTickets = createAction(REQUEST_TICKETS);
export const requestTicketsSuccess = createAction(REQUEST_TICKETS_SUCCESS);
export const requestTicketsError = createAction(REQUEST_TICKETS_ERROR);
