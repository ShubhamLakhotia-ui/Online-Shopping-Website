import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addInitialItems: (store, action) => {
      store.push(action.payload); //no return required because we are modifying exisitng initialState array
    },
    removeFromBag: (store, action) => {
      console.log("Action Payload", action.payload);
      return store.filter((itemId) => itemId !== action.payload); //here we are creating new array thats why we used return here
    },
  },
});
export const bagSliceActions = bagSlice.actions;
export default bagSlice;
