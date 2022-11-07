import React from "react";

import BookReturn from "./BookReturn";
import TableData from "./TableData";

function Table() {
  return (
    <section className="table-data">
      <div className="container">
        <div className="box-card">
          <TableData />
          <BookReturn />
        </div>
      </div>
    </section>
  );
}
export default Table;
