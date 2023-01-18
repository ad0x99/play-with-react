/**
 * It takes a type and a payload and returns an object with a type and a payload
 * @param type - The type of action to be dispatched.
 * @param payload - the data that is being passed to the reducer
 */
const createAction = (type, payload) => ({ type, payload });

export { createAction };
