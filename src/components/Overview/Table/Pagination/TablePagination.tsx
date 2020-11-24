import React from "react";
import "./TablePagination.scss";
import { ReactComponent as LeftArrow } from "../../../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../../assets/right-arrow.svg";

export default function TablePagination() {
  return (
    <div className="pagination">
      <LeftArrow className="arrow" />
      <div className="page-cube"><p>1</p></div>
      <p>of</p>
      <div className="page-cube"><p>3</p></div>
      <RightArrow className="arrow" />
    </div>
  );
}
