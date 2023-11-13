import { useReducer } from 'react';
import { createContext } from 'react';

import alertReducer from './AlertReducer';
import { ALERT_ACTION_TYPE } from '../../utils/actionTypes';

const AlertContext = createContext();

const AlertProvider = ({ children }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg, type) => {
    dispatch({ type: ALERT_ACTION_TYPE.SET_ALERT, payload: { msg, type } });
    setTimeout(() => dispatch({ type: ALERT_ACTION_TYPE.REMOVE_ALERT }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertContext, AlertProvider };
