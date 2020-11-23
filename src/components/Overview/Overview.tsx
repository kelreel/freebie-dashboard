import React, { useState } from "react";
import AddPerson from "./AddPerson/AddPerson";
import "./Overview.scss";
import Table from "./Table/Table";

export default function Overview() {
  const [state, setState] = useState(false);
  return (
    <main className="overview">
      <div className="head">
        <div className="title">
          <h2>Overview</h2>
        </div>
        <div className="actions">
          <button className="btn button--secondary">▪▪▪</button>
          <button className="btn button--primary" onClick={() => setState(true)}>
            Add
          </button>
        </div>
      </div>
      <div className="table">
        <Table />
      </div>
      <AddPerson visible={state} />
    </main>
  );
}
