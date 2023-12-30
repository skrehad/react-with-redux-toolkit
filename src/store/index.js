import { configureStore, createSlice } from "@reduxjs/toolkit";

// const Value = {
//   counter: 0,
//   privacy: false,
// };

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 },
  reducers: {
    increment: (state, action) => {},
    decrement: (state, action) => {},
    add: (state, action) => {},
    subtract: (state, action) => {},
  },
});

// const counterReducer = (store = Value, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store, counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return {
//       ...store,
//       counter: store.counter + Number(action.payload.num),
//     };
//   } else if (action.type === "SUBTRACT") {
//     return {
//       ...store,
//       counter: store.counter - Number(action.payload.num),
//     };
//   } else if (action.type === "PRIVACY_TOGGLE") {
//     return { ...store, privacy: !store.privacy };
//   }
//   return store;
// };

const counterStore = configureStore({
  counter: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default counterStore;
