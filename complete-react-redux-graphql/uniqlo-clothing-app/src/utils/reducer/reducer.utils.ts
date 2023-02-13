export type ActionWithPayload<T, P> = {
  type: T;
  payload?: P;
};

export type Action<T> = {
  type: T;
};

export function createAction<T extends string, P>(
  type: T,
  payload: P
): ActionWithPayload<T, P>;

export function createAction<T extends string>(
  type: T,
  payload: void
): Action<T>;

/**
 * It takes a type and a payload, and returns an object with the type and payload
 * @param {T} type - T - The type of the action.
 * @param {P} payload - P - The payload of the action.
 * @returns An object with a type and payload property.
 */
export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload };
}
