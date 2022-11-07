import React, { useEffect, useState } from "react";

function Modal(props) {
  const [fromDate, setFromDate] = useState(0);
  const [toDate, setToDate] = useState(0);
  const [productSelect, setProductSelect] = useState(0);
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    return fetch(
      "https://raw.githubusercontent.com/subrinalisa/dataset/main/dataset.json"
    )
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const calculateFee = (fromDate, toDate) => {
    return (
      (productSelect *
        Math.abs(new Date(fromDate).getTime() - new Date(toDate).getTime())) /
      (1000 * 3600 * 24)
    );
  };

  return (
    <div className="modal d-block">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Book / Return a Product</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                props.setOpenModal(false);
              }}
            ></button>
          </div>
          <form
            onSubmit={(e) => (
              <React.Fragment>
                {e.preventDefault()}
                {alert("OK")}
              </React.Fragment>
            )}
          >
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <select
                    className="form-select form-select-sm"
                    onChange={(e) => setProductSelect(e.target.value)}
                  >
                    <option value="0">---Select Any Product---</option>
                    {product.map((element, index) => {
                      return (
                        <option value={element.price} key={index}>
                          {element.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <select className="form-select form-select-sm">
                    <option value="1">Rent Fee</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="date"
                    className="form-control form-control-sm"
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <p className="text-center">
                    Your Estimated Fee is {calculateFee(fromDate, toDate)}
                  </p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-sm btn-primary">
                Confirm
              </button>
              <button
                type="button"
                className="btn btn-sm btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  props.setOpenModal(false);
                }}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Modal;
