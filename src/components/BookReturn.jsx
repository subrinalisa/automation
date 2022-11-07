import React, { useState } from "react";
import Modal from "./Modal";
function ListItem(props) {
  return (
    <li className="list-inline-item">
      <button
        type="button"
        className={props.btnClass}
        id={props.id}
        onClick={() => {
          props.setOpenModal(true);
        }}
      >
        {props.title}
      </button>
      {props.openModal && <Modal setOpenModal={props.setOpenModal} />}
    </li>
  );
}
function BookReturn() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="d-flex justify-content-end mb-2">
      <div className="book-return">
        <ul className="list-inline">
          <ListItem
            openModal={openModal}
            setOpenModal={setOpenModal}
            title="Book"
            btnClass="btn btn-sm btn-primary"
            id="bModal"
          />
          <ListItem
            openModal={openModal}
            setOpenModal={setOpenModal}
            title="Return"
            btnClass="btn btn-sm btn-danger"
            id="rModal"
          />
        </ul>
      </div>
    </div>
  );
}
export default BookReturn;
