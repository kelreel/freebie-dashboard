import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initial_data } from "./initialData";

import { OwnerItem } from "./types";

type SliceState = {
  owners: Array<OwnerItem>;
  pagination: {
    current_page: number;
    total_pages: number;
    per_page: number;
  };
};

let initialState: SliceState = {
  owners: [],
  pagination: {
    current_page: 1,
    total_pages: 1,
    per_page: 10,
  },
};

if (localStorage.getItem("owners")) {
  initialState.owners = JSON.parse(localStorage.getItem("owners")!).owners;
} else {
  initialState.owners = initial_data;
  localStorage.setItem("owners", JSON.stringify(initialState));
}

initialState.pagination.total_pages =
  initial_data.length / initialState.pagination.per_page;

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addOwner(state, action: PayloadAction<OwnerItem>) {
      localStorage.setItem(
        "owners",
        JSON.stringify([action.payload, ...state.owners])
      );
      state.owners.unshift(action.payload);
    },
  },
});

export const { addOwner } = tableSlice.actions;
export default tableSlice.reducer;
