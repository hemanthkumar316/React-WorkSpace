
import React, { useState, useEffect } from "react";
import axios from "axios";

const PaginationTable = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://lobster-app-ddwng.ondigitalocean.app/product/list",
        {
          headers: {
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          },
        }
      );

      const { data } = response;
      console.log(data);

      if (data && data.message) {
        setProducts(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const selectHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(products.length / 10) &&
      selectedPage !== page
    ) {
      setPage(selectedPage);
    }
  };

  const renderPageButtons = () => {
    const totalPages = Math.ceil(products.length / 10);
    const maxButtons = 10;

    let startPage = Math.max(1, page - Math.floor(maxButtons / 2));
    let endPage = Math.min(startPage + maxButtons - 1, totalPages);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(1, endPage - maxButtons + 1);
    }

    const pageButtons = [];

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          className={`btn ${page === i ? "btn-danger" : "btn-info"} mr-3`}
          key={i}
          onClick={() => selectHandler(i)}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="container-fluid mt-5 mb-3">
      <pre>{JSON.stringify(products)}</pre>

      {products.length > 0 && (
        <div className="buttons text-center">
          <i
            className={`fa-solid fa-backward mr-3 fa-2x ${
              page > 1 ? "" : "btn-disabled"
            }`}
            onClick={() => selectHandler(page - 1)}
          ></i>
          {renderPageButtons()}
          <i
            className={`fa-solid fa-forward fa-2x ml-3 ${
              page < Math.ceil(products.length / 10) ? "" : "opacity-0"
            }`}
            onClick={() => selectHandler(page + 1)}
          ></i>
        </div>
      )}

      {products.length > 0 && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Product Name</th>
              <th>Product type</th>
              <th>Original price</th>
              <th>Sale price</th>
              <th>Description</th>
              <th>Date and Time</th>
            </tr>
          </thead>
          <tbody>
            {products
              .slice((page - 1) * 10, page * 10)
              .map((product, index) => (
                <tr key={product.id}>
                  <td>{(page - 1) * 10 + index + 1}</td>
                  <td>{product.product_name}</td>
                  <td>{product.product_type}</td>
                  <td>{product.original_price}</td>
                  <td>{product.sale_price}</td>
                  <td>{product.description}</td>
                  <td>{product.date_n_time}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default  PaginationTable;


