import { createStore, compose } from "redux";
import {
  includeMeaningOfLife,
  sayHiOnDispatch
} from "./exampleAddons/enhancers";
import rootRuducer from "./reducer";

const composedEnchancer = compose(sayHiOnDispatch, includeMeaningOfLife);
const store = createStore(rootRuducer, undefined, composedEnchancer);

export default store;
