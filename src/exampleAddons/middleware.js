export const print1 = (storeAPI) => (next) => (action) => {
  console.log("1");
  return next(action);
};

export const print2 = (storeAPI) => (next) => (action) => {
  console.log("2");
  return next(action);
};

export const print3 = (storeAPI) => (next) => (action) => {
  console.log("3");
  return next(action);
};

export const loggerMiddleware = (storeAPI) => (next) => (action) => {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", storeAPI.getState());
  return result;
};

export const alwaysReturnHellowMiddleware = (storeAPI) => (next) => (
  action
) => {
  const result = next(action);
  console.log("hello");
  return "hello";
};
