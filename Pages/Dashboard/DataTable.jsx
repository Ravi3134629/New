import React, { useEffect } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

import "./dataTable.css";

const data_table = [
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },

  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {},
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "complete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
  {
    orderId: "#1256789",
    orderDate: "12-05-2022",
    orderPrice: "1250",
    orderStatus: "Incomplete",
    viewDetails: "view Details",
  },
];

const DataTable = () => {
  //initialize datatable
  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  });

  return (
    <div>
      <div className="container">
        <table id="example" className="display table_wd">
          <thead className="table_head">
            <tr>
              <th>Order Id</th>
              <th>Order Date</th>
              <th>Order Price</th>
              <th>Order Status</th>
              <th>view Details</th>
            </tr>
          </thead>
          <tbody>
            {data_table.map((item) => {
              return (
                <tr className="table_row">
                  <td className="table_d">{item.orderId}</td>
                  <td className="table_d">{item.orderDate}</td>
                  <td className="table_d">{item.orderPrice}</td>
                  <td className="table_d">{item.orderStatus}</td>
                  <td className="table_d" style={{ color: "#04A9C7" }}>
                    {item.viewDetails}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
