import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  includeMeaningOfLife,
  sayHiOnDispatch
} from "./exampleAddons/enhancers";
import rootRuducer from "./reducer";
import {
  print1,
  print2,
  print3,
  loggerMiddleware,
  alwaysReturnHellowMiddleware,
  delayedMessageMiddleware
} from "./exampleAddons/middleware";

const middlewareEnhancer = applyMiddleware(
  print1,
  print2,
  print3,
  loggerMiddleware,
  alwaysReturnHellowMiddleware,
  delayedMessageMiddleware
);
const composedEnchancer = composeWithDevTools(
  sayHiOnDispatch,
  includeMeaningOfLife,
  middlewareEnhancer
);
const store = createStore(rootRuducer, undefined, composedEnchancer);

export default store;
