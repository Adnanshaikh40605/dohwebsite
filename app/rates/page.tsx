import React from "react";
import RatesCityToggle from "@/app/component/RatesCityToggle";
import { RatesCityProvider } from "@/app/component/RatesCityContext";
import CityRate from "@/app/component/CityRate";

const Rate = () => {
  const tableHours = {
    width: "70%",
  };
  const tableRates = {
    width: "30%",
  };
  return (
    <>
      <RatesCityProvider>
      <section className="ourRates margin-top-bottom">
        <div className="container pt-4">
          <h1 className="text-center headStyle mb-3">Our Rates</h1>
          <div className="row justify-content-between text-center">
            <div className="col-12">
              <p>
                We ensure we keep our rates competitive and the best in industry
                with all standards of services.You can choose from wide range of
                plans and payment options. We are just a call away for you.
              </p>
              <p className="text-danger mt-3 fw-semibold">
                Note : Cancellation charges applicable Rs. 200/-
              </p>
            </div>
          </div>
          <RatesCityToggle />
          <div className="row rate-tabs">
            <div className="rate-btn col-12 col-md-3 col-lg-3">
              <ul
                className="row justify-content-between g-2 list-unstyled nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <li
                  className="nav-link btn col-4 col-md-4 col-lg-12 active py-2"
                  id="v-pills-hourly-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-hourly"
                  // type="button"
                  role="tab"
                  aria-controls="v-pills-hourly"
                  aria-selected="true"
                >
                  LOCAL
                </li>
                <li
                  className="nav-link btn col-4 col-md-4 col-lg-12 py-2"
                  id="v-pills-outstation-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-outstation"
                  // type="button"
                  role="tab"
                  aria-controls="v-pills-outstation"
                  aria-selected="false"
                >
                  OUTSTATION
                </li>
                {/* <button
                  className="nav-link col-6 col-md-4 col-lg-12"
                  id="v-pills-outstation-drop-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-outstation-drop"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-outstation-drop"
                  aria-selected="false"
                >
                  OUTSTATION DROP
                </button> */}
                <li
                  className="nav-link btn col-4 col-md-4 col-lg-12 py-2"
                  id="v-pills-permanent-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-permanent"
                  // type="button"
                  role="tab"
                  aria-controls="v-pills-permanent"
                  aria-selected="false"
                >
                  PERMANENT
                </li>
              </ul>
            </div>
            <div className="rate-content col-12 col-md-9 col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-hourly"
                  role="tabpanel"
                  aria-labelledby="v-pills-hourly-tab"
                  tabIndex={0}
                >
                  <div className="row align-items-end">
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start fw-bold mt-3 mb-3">
                        Local Charges for 2 hours (Service will be available for
                        24 hrs)
                      </h6>
                      {/* <h6 className="text-primary-blue">
                        <i className="bi bi-info-circle me-2"></i>Local
                        boundaries till Bhayendar, Kalwa, and Khandeshwar.
                      </h6> */}
                      <h6 className="text-start mt-3 mb-3">
                        Manual /Automatic Car:-
                      </h6>
                      <table className="table">
                        <caption>Manual/Automatic Car Rates for 2 Hours</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">2 Hours</td>
                            <td>Rs. 400/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Night allowance applicable from 11 PM to 6 AM.
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Drop location change charges.
                            </td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start mt-3 mb-3">Luxury:-</h6>
                      <table className="table">
                        <caption>Luxury Car Rates for 2 Hours</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">2 Hours</td>
                            <td>Rs. 500/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Night allowance applicable from 11 PM to 6 AM.
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Drop location change charges.
                            </td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start fw-bold mt-3 mb-3">
                        Local Charges for 4 hours (Service will be available for
                        24 hrs)
                      </h6>
                      <h6 className="text-start mt-3 mb-3">
                        Manual /Automatic Car:-
                      </h6>
                      <table className="table">
                        <caption>Manual/Automatic Car Rates for 4 Hours</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">4 Hours</td>
                            <td>
                              Rs. <CityRate mumbai="600" pune="500" />/-
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start">Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Night allowance applicable from 11 PM to 6 AM.
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Drop location change charges.
                            </td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start mt-3 mb-3">Luxury:-</h6>
                      <table className="table">
                        <caption>Luxury Car Rates for 4 Hours</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">4 Hours</td>
                            <td>
                              Rs. <CityRate mumbai="700" pune="600" />/-
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start">Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Night allowance applicable from 11 PM to 6 AM.
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Drop location change charges.
                            </td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start fw-bold mt-3 mb-3">
                        Local Charges for 8 hours (Service will be available for
                        24 hrs)
                      </h6>
                      <h6 className="text-start mt-3 mb-3">
                        Manual /Automatic Car:-
                      </h6>
                      <table className="table">
                        <caption>Manual/Automatic Car Rates for 8 Hours</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">8 Hours</td>
                            <td>
                              Rs. <CityRate mumbai="950" pune="800" />/-
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start">Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Night allowance applicable from 11 PM to 6 AM.
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Drop location change charges.
                            </td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start mt-3 mb-3">Luxury:-</h6>
                      <table className="table">
                        <caption>Luxury Car Rates for 8 Hours</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">8 Hours</td>
                            <td>
                              Rs. <CityRate mumbai="1050" pune="900" />/-
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start">Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Night allowance applicable from 11 PM to 6 AM.
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Drop location change charges.
                            </td>
                            <td>Rs. 100/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="v-pills-outstation"
                  role="tabpanel"
                  aria-labelledby="v-pills-outstation-tab"
                  tabIndex={0}
                >
                  <div className="row align-items-end">
                    <div className="col-12">
                      <h6 className="text-start fw-bold mt-3 mb-3">
                        Outstation Charges (Same day return)
                      </h6>
                      <h6 className="text-start mt-3 mb-3">
                        Manual /Automatic Car:-
                      </h6>
                        <p>After crossing <b>Khandala Ghat</b>, <b>Shahpoor</b>, <b>Murbad</b>, <b>Dhanu Road</b>, <b>Khapoli</b> above location outstation rates <b>1500</b> is applicable.</p>
                      <table className="table">
                        <caption>Outstation Charges (Same Day Return) - Manual/Automatic Car</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">12 Hours</td>
                            <td>
                              Rs. <CityRate mumbai="1200" pune="1000" />/-
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start">Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              For DA Daily allowance
                            </td>
                            <td>Rs. 300/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Early morning charge ( If you want a driver
                              between 4 AM to 6 AM ) ( After 4.00 AM another's
                              day charge i.e. Rs. 1300/- applicable )
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start mt-3 mb-3">Luxury:-</h6>
                      <table className="table">
                        <caption>Outstation Charges (Same Day Return) - Luxury Car</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">12 Hours</td>
                            <td>
                              Rs. <CityRate mumbai="1300" pune="1100" />/-
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start">Per hour overtime</td>
                            <td>Rs. 100/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              For DA Daily allowance
                            </td>
                            <td>Rs. 300/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Early morning charge ( If you want a driver
                              between 4 AM to 6 AM ) ( After 4.00 AM another's
                              day charge i.e Rs. 1400/- applicable )
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start fw-bold mt-3 mb-3">
                        Outstation Charges (Stay)
                      </h6>
                      <h6 className="text-start mt-3 mb-3">
                        Manual /Automatic Car:-
                      </h6>
                      <table className="table">
                        <caption>Outstation Charges (Stay) - Manual/Automatic Car</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">Per day</td>
                            <td>
                              Rs. <CityRate mumbai="1200" pune="1000" />/-
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              For DA Daily allowance
                            </td>
                            <td>Rs. 300/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Early morning charge ( If you want a driver
                              between 4 AM to 6 AM ) ( On the last day if you
                              released the driver after 11 PM to 11.59 PM -
                              200/- night allowance applicable after 12.00 AM
                              300/- Driver allowance and 100/- per hour overtime
                              applicable After 4.00 AM another 's day charge i.e
                              1500/- applicable ) <br />{" "}
                              <span className="fw-bold bg-transparent p-0">
                                Note:
                              </span>{" "}
                              In a day driver will drive only 12 hours and
                              accommodation you need to arrange or else driver
                              will manage in the car. However, the driver can
                              manage in the car for only one night.
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                      <h6 className="text-start mt-3 mb-3">Luxury:-</h6>
                      <table className="table">
                        <caption>Outstation Charges (Stay) - Luxury Car</caption>
                        <thead>
                          <tr>
                            <th className="text-start table-head-size fw-semibold">
                              Hours
                            </th>
                            <th className="table-head-size fw-semibold">
                              Rates
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-start">Per day</td>
                            <td>
                              Rs. <CityRate mumbai="1300" pune="1100" />/-
                            </td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              For DA Daily allowance
                            </td>
                            <td>Rs. 300/-</td>
                          </tr>
                          <tr>
                            <td className="text-start">
                              Early morning charge ( If you want a driver
                              between 4 AM to 6 AM ) ( On the last day if you
                              released the driver after 11 PM to 11.59 PM -
                              200/- night allowance applicable after 12.00 AM
                              300/- Driver allowance and 100/- per hour overtime
                              applicable After 4.00 AM another 's day charge i.e
                              1600/- applicable ) <br />{" "}
                              <span className="fw-bold bg-transparent p-0">
                                Note:
                              </span>{" "}
                              In a day driver will drive only 12 hours and
                              accommodation you need to arrange or else driver
                              will manage in the car. However, the driver can
                              manage in the car for only one night.
                            </td>
                            <td>Rs. 200/-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* <div
                  className="tab-pane fade"
                  id="v-pills-outstation-drop"
                  role="tabpanel"
                  aria-labelledby="v-pills-outstation-drop-tab"
                  tabIndex={0}
                >
                  <table className="table">
                    <caption>Outstation Drop Rates by Distance</caption>
                    <thead>
                      <tr>
                        <th style={tableHours} scope="col">
                          Distance
                        </th>
                        <th style={tableRates} scope="col">
                          Rates
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Between 0 Km to 299 Km</td>
                        <td>Fixed Rate/-</td>
                      </tr>
                      <tr>
                        <td>After 300 Km to 999 Km </td>
                        <td>Rs. 6 / Per Km</td>
                      </tr>
                      <tr>
                        <td>From 1000 Kilometer & above </td>
                        <td>Rs. 5 / Per Km</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
                <div
                  className="tab-pane fade"
                  id="v-pills-permanent"
                  role="tabpanel"
                  aria-labelledby="v-pills-permanent-tab"
                  tabIndex={0}
                >
                  <table className="table">
                    <caption>Permanent Driver Rates by Distance</caption>
                    <thead>
                      <tr>
                        <th style={tableHours} scope="col">
                          Distance
                        </th>
                        <th style={tableRates} scope="col">
                          Rates
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          6 months membership with unlimited replacement
                          guarantee.
                        </td>
                        <td>Rs. 6000/- + GST</td>
                      </tr>
                      <tr>
                        <td>
                          1 year membership with unlimited replacement
                          guarantee.
                        </td>
                        <td>Rs. 8000/- + GST</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RatesCityProvider>
    </>
  );
};

export default Rate;

export function generateMetadata() {
  return {
    title: "Driver on Hire Rates in Mumbai, Pune, Navi Mumbai & Thane",
    description:
      "Driver on Hire rates in Mumbai, Pune, Thane and Navi Mumbai is the best in industry with all standards of services.",
    alternates: {
      canonical: "https://www.driveronhire.com/rates/",
    },
  };
}
