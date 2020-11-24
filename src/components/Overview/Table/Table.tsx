import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import RowItem from "./RowItem";
import "./Table.scss";

const titles = ["Owner", "End date", "Profits", "Losses", "Phone"];

const selectOwners = (state: RootState) => state.tableSlice.owners;
const selectPagination = (state: RootState) => state.tableSlice.pagination;

const selectVisibleOwners = createSelector(
  [selectOwners, selectPagination],
  (owners, pagination) => {
    const start = (pagination.current_page - 1) * pagination.per_page;
    return owners.slice(start, start + pagination.per_page);
  }
);

export default function Table() {
  const owners = useSelector(selectVisibleOwners);

  return (
    <table className="overview-table">
      <thead>
        <tr>
          {titles.map((title) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {owners.map((item) => (
          <RowItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
