export const THUNK_TYPE = {
  REGISTER: 'auth/register',
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  CREATE_TICKET: 'tickets/create',
  GET_TICKETS: 'tickets/getAll',
  GET_TICKET: 'tickets/get',
  CLOSE_TICKET: 'tickets/close',
  GET_NOTES: 'notes/getAll',
  CREATE_NOTE: 'notes/create',
};

export const API_URL = {
  REGISTER: '/sign-up',
  LOGIN: '/sign-in',
  TICKETS: '/tickets',
  NOTES: '/notes',
};

export const CLIENT_URL = {
  ROOT: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  NEW_TICKET: '/new-ticket',
  TICKETS: '/tickets',
  TICKET: '/tickets/:ticketId',
};
