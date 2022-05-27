import { createSelector } from "reselect";

export const makeSelectEvents = 
  createSelector(
    (state) => {
      return state.events.events;
    },
    (events) => {

      return events
    }
  );
export const makeSelectLoading = () =>
  createSelector(
    (state) => {
      return state.events.loading;
    },
    (loading) => {

      return loading
    }
  );
