import { configureStore, createSlice } from "@reduxjs/toolkit";

// const Value = {
//   counter: 0,
//   privacy: false,
// };

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterValue: 0 },
  reducers: {
    increment: (state) => {
      state.counterValue++;
    },
    decrement: (state) => {
      state.counterValue--;
    },
    add: (state, action) => {
      state.counterValue += Number(action.payload);
    },
    subtract: (state, action) => {
      state.counterValue -= Number(action.payload);
    },
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
  reducer: {
    counter: counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;
export default counterStore;
