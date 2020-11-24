import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import RowItem from "./RowItem";
import "./Table.scss";

const titles = ["Owner", "End date", "Profits", "Losses", "Phone"];

export default function Table() {
  const owners = useSelector((state: RootState) => state.tableSlice.owners);

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
