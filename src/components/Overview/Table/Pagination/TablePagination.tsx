import React from "react";
import "./TablePagination.scss";
import { ReactComponent as LeftArrow } from "../../../../assets/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../../assets/right-arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { nextPage, prevPage } from "../../../../store/tableSlice";

export default function TablePagination() {
  const { current_page, total_pages } = useSelector(
    (state: RootState) => state.tableSlice.pagination
  );

  const dispatch = useDispatch()

  return (
    <div className="pagination">
      <LeftArrow onClick={() => dispatch(prevPage())} className="arrow" />
      <div className="page-cube">
        <p>{current_page}</p>
      </div>
      <p>of</p>
      <div className="page-cube">
        <p>{total_pages}</p>
      </div>
      <RightArrow onClick={() => dispatch(nextPage())} className="arrow" />
    </div>
  );
}
