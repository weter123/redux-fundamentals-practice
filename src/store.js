import { createStore, compose, applyMiddleware } from "redux";
import {
  includeMeaningOfLife,
  sayHiOnDispatch
} from "./exampleAddons/enhancers";
import rootRuducer from "./reducer";
import { print1, print2, print3 } from "./exampleAddons/middleware";

const middlewareEnhancer = applyMiddleware(print1, print2, print3);
const composedEnchancer = compose(
  sayHiOnDispatch,
  includeMeaningOfLife,
  middlewareEnhancer
);
const store = createStore(rootRuducer, undefined, composedEnchancer);

export default store;
