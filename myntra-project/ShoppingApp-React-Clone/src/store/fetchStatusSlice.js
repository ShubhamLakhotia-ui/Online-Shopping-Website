import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //false:'PENDING' and true:"DONE"
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (store) => {
      store.fetchDone = true;
    },
    markFetchingStarted: (store) => {
      store.currentlyFetching = true;
    },
    markFetchingFinished: (store, action) => {
      store.currentlyFetching = false;
    },
  },
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
