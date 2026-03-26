import React from "react";

const OutstationRatesModal = () => {
  return (
    <div
      className="modal fade"
      id="outstationRates"
      tabIndex={-1}
      aria-labelledby="outstationRatesLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="outstationRatesLabel">
              Outstation Rates
            </h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row modalRate align-items-end">
              <div className="col-12 col-md-6 col-lg-6">
                <h4 className="text-start h6 fw-bold mt-3 mb-3">
                  Outstation Charges (Same day return)
                </h4>
                <h3 className="text-start h6 mt-3 mb-3">
                  Manual /Automatic Car:-
                </h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-start table-head-size fw-semibold">
                        Hours
                      </th>
                      <th className="table-head-size fw-semibold">Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start">12 Hours</td>
                      <td>Rs. 1200/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">Per hour overtime</td>
                      <td>Rs. 100/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">For DA Daily allowance</td>
                      <td>Rs. 300/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Early morning charge ( If you want a driver between 4 AM
                        to 6 AM ) ( After 4.00 AM another's day charge i.e. Rs.
                        1300/- applicable )
                      </td>
                      <td>Rs. 200/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h3 className="text-start h6 mt-3 mb-3">Luxury:-</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-start table-head-size fw-semibold">
                        Hours
                      </th>
                      <th className="table-head-size fw-semibold">Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start">12 Hours</td>
                      <td>Rs. 1300/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">Per hour overtime</td>
                      <td>Rs. 100/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">For DA Daily allowance</td>
                      <td>Rs. 300/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Early morning charge ( If you want a driver between 4 AM
                        to 6 AM ) ( After 4.00 AM another's day charge i.e Rs.
                        1400/- applicable )
                      </td>
                      <td>Rs. 200/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h4 className="text-start h6 fw-bold mt-3 mb-3">
                  Outstation Charges (Stay)
                </h4>
                <h3 className="text-start h6 mt-3 mb-3">
                  Manual /Automatic Car:-
                </h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-start table-head-size fw-semibold">
                        Hours
                      </th>
                      <th className="table-head-size fw-semibold">Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start">Per day</td>
                      <td>Rs. 1200/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">For DA Daily allowance</td>
                      <td>Rs. 300/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Early morning charge ( If you want a driver between 4 AM
                        to 6 AM ) ( On the last day if you released the driver
                        after 11 PM to 11.59 PM - 200/- night allowance
                        applicable after 12.00 AM 300/- Driver allowance and
                        100/- per hour overtime applicable After 4.00 AM another
                        's day charge i.e 1300/- applicable ) <br />{" "}
                        <span className="fw-bold bg-transparent p-0">
                          Note:
                        </span>{" "}
                        In a day driver will drive only 12 hours and
                        accommodation you need to arrange or else driver will
                        manage in the car. However, the driver can manage in the
                        car for only one night.
                      </td>
                      <td>Rs. 200/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h3 className="text-start h6 mt-3 mb-3">Luxury:-</h3>
                <table className="table">
                  <thead>
                    <tr>
                      <th className="text-start table-head-size fw-semibold">
                        Hours
                      </th>
                      <th className="table-head-size fw-semibold">Rates</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start">Per day</td>
                      <td>Rs. 1300/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">For DA Daily allowance</td>
                      <td>Rs. 300/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Early morning charge ( If you want a driver between 4 AM
                        to 6 AM ) ( On the last day if you released the driver
                        after 11 PM to 11.59 PM - 200/- night allowance
                        applicable after 12.00 AM 300/- Driver allowance and
                        100/- per hour overtime applicable After 4.00 AM another
                        's day charge i.e 1400/- applicable ) <br />{" "}
                        <span className="fw-bold bg-transparent p-0">
                          Note:
                        </span>{" "}
                        In a day driver will drive only 12 hours and
                        accommodation you need to arrange or else driver will
                        manage in the car. However, the driver can manage in the
                        car for only one night.
                      </td>
                      <td>Rs. 200/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-dark"
              data-bs-dismiss="modal"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutstationRatesModal;
