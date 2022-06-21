import React from "react";
import Navbar2 from "../../Components/Navbar2/Navbar2";
import "./orderdetails.css";
import "boxicons";
const OrderDetails = () => {
  return (
    <>
      <Navbar2 />
      <div className="order_det">
        <h3 className="hello_s">Hello Sneha</h3>
        <div className="line"></div>

        <div className="head">
          <span>Dashboard {">"}</span>
          <span className="order_det"> OrderDetails</span>
        </div>

        <div className="card card_main">
          <div className="cont_f">
            <div className="f1">
              <img
                src="https://cdn.pixabay.com/photo/2014/06/05/14/39/saree-362757_960_720.jpg"
                alt="saree"
              />
            </div>
            <div className="f2">
              <p> Order ID : OX23345002Z</p>
              <p>Product Name </p>
              <p> Qty: 1</p>
              <p> Price : ₹ 999.00</p>
            </div>
            <div className="f3">
              <p>Delivery:</p>
              <p>Delivery Estimate</p>
              <p>Friday, 25 March, 2022</p>
              <p>Order date : 23-Mar-2022</p>
            </div>
            <div className="f4">
              <p className="stat">
                Status:<span>Complete</span>
              </p>
              {/* track order */}
              <button
                type="button"
                class="btn btn_trig2"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Track Order
              </button>

              {/* Modal  */}
              <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog  modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="cont_prog">
                        <h4 className="order_trac"> Order Tracking</h4>
                        <div className="prog">
                          <div className="c1">
                            <div className="one"></div>
                            <p>
                              Order Recieved :
                              <span className="spn">24-03-2022 12:30</span>
                            </p>
                          </div>
                          <div className="c1">
                            <div className="one"></div>
                            <p>
                              Order Recieved :
                              <span className="spn">24-03-2022 12:30</span>
                            </p>
                          </div>
                          <div className="c1">
                            <div className="one"></div>
                            <p>
                              Order Recieved :
                              <span className="spn">24-03-2022 12:30</span>
                            </p>
                          </div>
                          <div className="c1">
                            <div className="one"></div>
                            <p>
                              Order Recieved :
                              <span className="spn">24-03-2022 12:30</span>
                            </p>
                          </div>
                          <div className="c1">
                            <div className="one"></div>
                            <p>
                              Order Recieved :
                              <span className="spn">24-03-2022 12:30</span>
                            </p>
                          </div>

                          <div className="horLine"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* model end */}

              <p className="picons">
                <i className="bx bxs-phone"></i>
                <i className="bx bxs-message-rounded-minus"></i>
                <i className="bx bxs-envelope"></i>
              </p>

              <button
                type="button"
                className="btn btn_trig"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Raised a Request
              </button>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Modal title
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <select
                        className="form-select form_size"
                        aria-label="Default select example"
                      >
                        <option selected>Reasons</option>
                        <option className="opt" value="1">
                          Exchange
                        </option>
                        <option className="opt" value="2">
                          New Changes
                        </option>
                        <option className="opt" value="3">
                          Return
                        </option>
                      </select>

                      <textarea
                        name="reason"
                        id="textReason"
                        cols="48"
                        rows="4"
                        placeholder="Enter your comments here"
                      ></textarea>

                      <div className="bt">
                        <button type="button" className="btn_set">
                          Save changes
                        </button>
                      </div>
                    </div>

                    {/* <div className="modal-footer"></div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
