import React, { useState } from "react";
import AddPersonForm from "./AddPersonForm/AddPersonForm";
import Modal from "./Modal/Modal";
import "./Overview.scss";
import Table from "./Table/Table";
import TablePagination from "./Table/Pagination/TablePagination";

export default function Overview() {
  const [showForm, setShowForm] = useState(false);

  const hideForm = () => setShowForm(false);

  return (
    <main className="overview">
      <div className="head">
        <div className="title">
          <h2>Overview</h2>
        </div>
        <div className="actions">
          <button className="btn button--secondary">▪▪▪</button>
          <button
            className="btn button--primary"
            onClick={() => setShowForm(true)}
          >
            Add
          </button>
        </div>
      </div>
      <section className="table">
        <Table />
        <TablePagination />
      </section>
      <Modal visible={showForm} onClose={hideForm}>
        <AddPersonForm onSubmitOwner={hideForm} />
      </Modal>
    </main>
  );
}
