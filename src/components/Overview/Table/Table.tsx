import React from "react";
import RowItem from "./RowItem";
import "./Table.scss";

const data = [
  {
    id: 1,
    owner: "Test test",
    endDate: "3/12/14",
    profits: 123.4,
    losses: 25.3,
    phone: 88312810045,
  },
  {
    id: 2,
    owner: "Test test 2",
    endDate: "5/10/12",
    profits: 230.3,
    losses: 140.29,
    phone: 88311810062,
  },
  {
    id: 3,
    owner: "Test test 3",
    endDate: "9/07/09",
    profits: 98.3,
    losses: 24,
    phone: 87120097121,
  },
  {
    id: 4,
    owner: "Test test 3",
    endDate: "9/07/09",
    profits: 98.3,
    losses: 24,
    phone: 87120097121,
  },
];

const titles = ["Owner", "End date", "Profits", "Losses", "Phone"];

export default function Table() {
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
        {data.map((item) => (
          <RowItem key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
}
