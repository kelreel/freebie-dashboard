import React from "react";
import userImage from "../../../assets/user.png";

export default function RowItem({ item }: { item: any }) {
  return (
    <tr key={item.id}>
      <td className="owner">
        <img src={userImage} alt="user" />
        <p>{item.owner}</p>
      </td>
      <td>{item.endDate}</td>
      <td className="profits">{item.profits}</td>
      <td className="losses">{item.losses}</td>
      <td>{item.phone}</td>
    </tr>
  );
}
