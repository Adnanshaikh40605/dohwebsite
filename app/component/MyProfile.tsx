"use client";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Loader from "../component/loader";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

interface UserData {
  first_name: string;
  usercar: string;
  useraddress: string;
  cartype: string;
  phone: string;
}

const myProfile = () => {
  const { logout } = useContext(AuthContext)!;
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loaderActive, setLoaderActive] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      setLoaderActive(true);
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/otp-login");
        return;
      }

      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/check_token/`,
          { token },
          { headers: { "Content-Type": "application/json" } }
        );

        if (response.data && response.data.error === "Invalid token") {
          logout();
          router.push("/otp-login");
          return;
        }

        if (response.status !== 200) {
          router.push("/otp-login");
        }
      } catch (error: any) {
        console.error("Error checking token:", error);
        if (error.response && error.response.data && error.response.data.error === "Invalid token") {
          logout();
        }
        router.push("/otp-login");
      } finally {
        setLoaderActive(false);
      }
    };

    checkToken();
  }, [router, logout]);

  const viewProfile = async () => {
    try {
      setLoaderActive(true);
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/singleprofile/`,
        {
          headers: {
            Authorization: `Token ${token}`, // Include the token in the Authorization header
          },
        }
      );
      // console.log("Response result: ", response.data);

      if (response.status == 202) {
        setUserData(response.data.data);
      } else {
        return "Data not found";
      }
    } catch (error) {
      return "Error getting user";
    } finally {
      setLoaderActive(false);
    }
  };

  useEffect(() => {
    // Call viewProfile function when the component mounts
    viewProfile();
  }, []);

  return (
    <>
      {loaderActive && <Loader />}
      <section className="my_profile_section margin-top-bottom">
        <div className="container">
          <div className="row pt-5 justify-content-center">
            <div className="col-12">
              <div className="cardProfile user-card-full">
                <div className="row">
                  <div className="col-sm-4 bg-c-lite user-profile">
                    <div className="card-block text-center text-white">
                      <div className="mb-2">
                        <img
                          src="/only-logo.svg"
                          className="w-50"
                          alt="Comapany Logo"
                        />
                      </div>
                      <h3 className="fw-bold">Driveronhire</h3>
                      <p>Obey Jobs Private Limited</p>
                    </div>
                  </div>
                  <div className="col-sm-8">
                    <div className="card-block">
                      <h6 className="mb-2 pb-2 b-b-default fw-bold">
                        Client Information
                      </h6>
                      {userData ? (
                        <div>
                          <div className="row g-4">
                            <div className="col-sm-6">
                              <p className="fw-normal">Name</p>
                              <h6 className="fw-light">
                                {userData.first_name}
                              </h6>
                            </div>
                            <div className="col-sm-6">
                              <p className="fw-normal">Phone</p>
                              <h6 className="fw-light">{userData.phone}</h6>
                            </div>
                            <div className="col-sm-12">
                              <p className="fw-normal">Address</p>
                              <h6 className="fw-light">
                                {/* {userData.useraddress} */}
                              </h6>
                            </div>
                          </div>
                          <h6 className="mb-2 mt-4 pb-2 b-b-default fw-bold">
                            Car Details
                          </h6>
                          <div className="row g-4">
                            <div className="col-sm-6">
                              <p className="fw-normal">Car Type</p>
                              {/* <h6 className="fw-light">{userData.cartype}</h6> */}
                            </div>
                            <div className="col-sm-6">
                              <p className="fw-normal">User Car</p>
                              {/* <h6 className="fw-light">{userData.usercar}</h6> */}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p>No user data available</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default myProfile;
