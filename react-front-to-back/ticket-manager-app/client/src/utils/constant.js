export const THUNK_TYPE = {
  REGISTER: 'auth/register',
  LOGIN: 'auth/login',
  LOGOUT: 'auth/logout',
  CREATE_TICKET: 'tickets/create',
  GET_TICKETS: 'tickets/getAll',
  GET_TICKET: 'tickets/get',
  CLOSE_TICKET: 'tickets/close',
};

export const API_URL = {
  REGISTER: '/sign-up',
  LOGIN: '/sign-in',
  TICKETS: '/tickets',
  NOTES: '/notes',
};
