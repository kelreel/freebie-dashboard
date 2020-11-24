import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initial_data } from "./initialData";

import { OwnerItem } from "./types";

type SliceState = {
  owners: Array<OwnerItem>;
  pagination: PaginationState;
};

type PaginationState = {
  current_page: number;
  total_pages: number;
  per_page: number;
};

let initialState: SliceState = {
  owners: [],
  pagination: {
    current_page: 1,
    total_pages: 1,
    per_page: 10,
  },
};

// Initialize from localStorage
if (localStorage.getItem("owners")) {
  initialState.owners = JSON.parse(localStorage.getItem("owners")!);
} else {
  initialState.owners = initial_data;
  localStorage.setItem("owners", JSON.stringify(initialState.owners));
}

const calculatePagination = (
  { per_page, current_page }: PaginationState,
  length: number
): PaginationState => {
  return {
    per_page,
    current_page,
    total_pages: Math.ceil(length / per_page),
  };
};

initialState.pagination = calculatePagination(
  initialState.pagination,
  initialState.owners.length
);

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    addOwner(state, action: PayloadAction<OwnerItem>) {
      // TODO: to get rid of side effect
      localStorage.setItem(
        "owners",
        JSON.stringify([action.payload, ...state.owners])
      );
      state.owners.unshift(action.payload);
      state.pagination = calculatePagination(
        state.pagination,
        state.owners.length
      );
    },
    nextPage(state) {
      if (state.pagination.current_page < state.pagination.total_pages) {
        state.pagination.current_page++;
      }
    },
    prevPage(state) {
      if (state.pagination.current_page > 1) {
        state.pagination.current_page--;
      }
    },
  },
});

export const { addOwner, nextPage, prevPage } = tableSlice.actions;
export default tableSlice.reducer;
