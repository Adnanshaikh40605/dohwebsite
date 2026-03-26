import React from "react";

interface LocalRatesModalProps {
  location?: 'pune' | 'mumbai';
}

const LocalRatesModal: React.FC<LocalRatesModalProps> = ({ location = 'mumbai' }) => {
  // Define rates based on location
  const rates = {
    pune: {
      manual2Hours: 400,
      luxury2Hours: 500,
      manual4Hours: 500,
      luxury4Hours: 600,
      manual8Hours: 800,
      luxury8Hours: 900,
      perHourOvertime: 100,
      nightAllowance: 200,
      dropLocationChange: 100
    },
    mumbai: {
      manual2Hours: 400,
      luxury2Hours: 500,
      manual4Hours: 600,
      luxury4Hours: 700,
      manual8Hours: 950,
      luxury8Hours: 1050,
      perHourOvertime: 100,
      nightAllowance: 200,
      dropLocationChange: 100
    }
  };

  const currentRates = rates[location];

  return (
    <div
      className="modal fade"
      id="localRates"
      tabIndex={-1}
      aria-labelledby="localRatesLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title fs-5" id="localRatesLabel">
              Local Rates
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
              <div>
                <p
                  className="p-2 rounded"
                  style={{
                    fontSize: "14px",
                    backgroundColor: "#f8dadd",
                    color: "#dc3545",
                  }}
                >
                  If you cancel your booking within 1hr of the scheduled time, a
                  cancellation fee of ₹200/- will apply
                </p>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h3 className="text-start h6 fw-bold mt-3 mb-3">
                  Local Charges for 2 hours (Service will be available for 24
                  hrs)
                </h3>
                <h4 className="h6 text-start mt-3 mb-3">
                  Manual /Automatic Car:-
                </h4>
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
                      <td className="text-start">2 Hours</td>
                      <td>Rs. {currentRates.manual2Hours}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">Per hour overtime</td>
                      <td>Rs. {currentRates.perHourOvertime}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        After 11 pm for night allowance up-to 6 AM.
                      </td>
                      <td>Rs. {currentRates.nightAllowance}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Drop location change charges.
                      </td>
                      <td>Rs. {currentRates.dropLocationChange}/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h4 className="h6 text-start mt-3 mb-3">Luxury:-</h4>
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
                      <td className="text-start">2 Hours</td>
                      <td>Rs. {currentRates.luxury2Hours}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">Per hour overtime</td>
                      <td>Rs. {currentRates.perHourOvertime}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        After 11 pm for night allowance up-to 6 AM.
                      </td>
                      <td>Rs. {currentRates.nightAllowance}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Drop location change charges.
                      </td>
                      <td>Rs. {currentRates.dropLocationChange}/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h4 className="h6 text-start fw-bold mt-3 mb-3">
                  Local Charges for 4 hours (Service will be available for 24
                  hrs)
                </h4>
                <h4 className="h6 text-start mt-3 mb-3">
                  Manual /Automatic Car:-
                </h4>
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
                      <td className="text-start">4 Hours</td>
                      <td>Rs. {currentRates.manual4Hours}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">Per hour overtime</td>
                      <td>Rs. {currentRates.perHourOvertime}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        After 11 pm for night allowance up-to 6 AM.
                      </td>
                      <td>Rs. {currentRates.nightAllowance}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Drop location change charges.
                      </td>
                      <td>Rs. {currentRates.dropLocationChange}/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h4 className="h6 text-start mt-3 mb-3">Luxury:-</h4>
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
                      <td className="text-start">4 Hours</td>
                      <td>Rs. {currentRates.luxury4Hours}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">Per hour overtime</td>
                      <td>Rs. {currentRates.perHourOvertime}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        After 11 pm for night allowance up-to 6 AM.
                      </td>
                      <td>Rs. {currentRates.nightAllowance}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Drop location change charges.
                      </td>
                      <td>Rs. {currentRates.dropLocationChange}/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h3 className="text-start h6 fw-bold mt-3 mb-3">
                  Local Charges for 8 hours (Service will be available for 24
                  hrs)
                </h3>
                <h4 className="h6 text-start mt-3 mb-3">
                  Manual /Automatic Car:-
                </h4>
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
                      <td className="text-start">8 Hours</td>
                      <td>Rs. {currentRates.manual8Hours}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">Per hour overtime</td>
                      <td>Rs. {currentRates.perHourOvertime}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        After 11 pm for night allowance up-to 6 AM.
                      </td>
                      <td>Rs. {currentRates.nightAllowance}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Drop location change charges.
                      </td>
                      <td>Rs. {currentRates.dropLocationChange}/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <h4 className="h6 text-start mt-3 mb-3">Luxury:-</h4>
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
                      <td className="text-start">8 Hours</td>
                      <td>Rs. {currentRates.luxury8Hours}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">Per hour overtime</td>
                      <td>Rs. {currentRates.perHourOvertime}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        After 11 pm for night allowance up-to 6 AM.
                      </td>
                      <td>Rs. {currentRates.nightAllowance}/-</td>
                    </tr>
                    <tr>
                      <td className="text-start">
                        Drop location change charges.
                      </td>
                      <td>Rs. {currentRates.dropLocationChange}/-</td>
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

export default LocalRatesModal;
