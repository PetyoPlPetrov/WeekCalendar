import { createStore } from "redux";
import createReducer from "./reducers";

export const store = createStore(createReducer(), {});
