import React, { useEffect, useState } from "react";

function TableData() {
  const [product, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...product].sort((a, b) =>
        a[col].toLocaleLowerCase() > b[col].toLocaleLowerCase() ? 1 : -1
      );
      setProduct(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...product].sort((a, b) =>
        a[col].toLocaleLowerCase() < b[col].toLocaleLowerCase() ? 1 : -1
      );
      setProduct(sorted);
      setOrder("ASC");
    }
  };

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

  return (
    <React.Fragment>
      <div className="d-flex justify-content-end mb-2">
        <div className="search-filter">
          <input
            type="search"
            className="form-control form-control-sm"
            placeholder="Search by name.."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered table-hover c_table">
          <thead>
            <tr>
              <th>Id</th>
              <th onClick={() => sorting("name")}>Name</th>
              <th onClick={() => sorting("code")}>Code</th>
              <th>Availability</th>
              <th>Need to Repair</th>
              <th>Durability</th>
              <th>Mileage</th>
            </tr>
          </thead>
          <tbody>
            {product
              .filter((val) => {
                if (
                  searchTerm === "" ||
                  val.name
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                )
                  return val;
              })
              .map((element, index) => {
                return (
                  <tr key={element.code}>
                    <td>{index + 1}</td>
                    <td title={element.name}>{element.name}</td>
                    <td title={element.code}>{element.code}</td>
                    <td title={element.availability.toString()}>
                      {element.availability.toString()}
                    </td>
                    <td title={element.needing_repair.toString()}>
                      {element.needing_repair.toString()}
                    </td>
                    <td title={element.durability}>{element.durability}</td>
                    <td title={element.mileage}>{element.mileage}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
export default TableData;
