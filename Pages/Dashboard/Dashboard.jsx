import React from "react";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./dashboard.css";
import blouse from "./blouse.png";
import salwar from "./salwar.png";
import gown from "./gown.png";
import lehenga from "./lehenga.png";
import saree from "./saree_dupat.png";
import kids from "./kids.png";

import DataTable from "./DataTable";
const Dashboard = () => {
  return (
    <>
      <Navbar2 />
      <div className="dashboard">
        <div className="container">
          {/* blouse */}
          <div className="card newcard">
            <img
              src={blouse}
              className="card-img-top"
              style={{ width: "120px" }}
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title">Blouse</h5>
            </div>
          </div>

          {/* salwar */}
          <div className="card newcard">
            <img
              src={salwar}
              className="card-img-top"
              style={{ width: "120px" }}
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title">Salwar</h5>
            </div>
          </div>

          {/* gown */}
          <div className="card newcard">
            <img
              src={gown}
              className="card-img-top"
              style={{ width: "120px" }}
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title">gown</h5>
            </div>
          </div>

          {/* lehenga */}
          <div className="card newcard">
            <img
              src={lehenga}
              className="card-img-top"
              style={{ width: "120px" }}
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title">lehenga</h5>
            </div>
          </div>

          {/* saree */}
          <div className="card newcard">
            <img
              src={saree}
              className="card-img-top"
              style={{ width: "120px" }}
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title">Saree/Dupatta</h5>
            </div>
          </div>

          {/* kids */}
          <div className="card newcard">
            <img
              src={kids}
              className="card-img-top"
              style={{ width: "120px" }}
              alt="img"
            />
            <div className="card-body">
              <h5 className="card-title">Kids</h5>
            </div>
          </div>
        </div>

        <div className="hello">
          <h3>Hello Sneha!</h3>
        </div>
        <div className="line"></div>
        <h2 className="myorder">My Order</h2>
        <div className="table_cont">
          <DataTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
