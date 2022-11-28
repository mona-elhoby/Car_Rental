// inceptors request
import axios from "axios";

import { api_url } from "./config";


// inceptors response
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    // if (!JSON.parse(localStorage.getItem("auth"))?.accessToken) {
    //   window.location.replace("/login");
    // } else if (
    //   error.response?.data?.code == "0622" &&
    //   originalRequest.url === `${api_url}/auth/refresh-token`
    // ) {
    //   console.log("0622");
    //   localStorage.removeItem("auth");
    //   window.location.replace("/login");
    //   return Promise.reject(error);
    // } else if (
    //   error.response?.data?.code == "0623" ||
    //   (error.response?.data?.code == "0624" &&
    //     originalRequest.url === `${api_url}/auth/refresh-token`)
    // ) {
		// console.log("0623");
    //   localStorage.removeItem("auth");
    //   window.location.replace("/login");
    //   return Promise.reject(error);
    // } else if (
    //   error.response?.data?.code === "0621" &&
    //   !originalRequest._retry
    // ) {
    //   console.log("0621");
    //   originalRequest._retry = true;
    //   const refreshToken = JSON.parse(
    //     localStorage.getItem("auth")
    //   ).refreshToken;
    //   return axios
    //     .post(`${api_url}/auth/refresh-token`, {
    //       token: refreshToken,
    //     })
    //     .then((res) => {
    //       // console.log("Res: ", res)
    //       if (res.status === 200) {
    //         localStorage.setItem("auth", JSON.stringify(res.data));
    //         originalRequest.headers["Authorization"] = `Bearer ${
    //           JSON.parse(localStorage.getItem("auth"))?.accessToken
    //         }`;
    //         axios.defaults.headers.common["Authorization"] = `Bearer ${
    //           JSON.parse(localStorage.getItem("auth"))?.accessToken
    //         }`;
    //         return axios(originalRequest);
    //       }
    //     });
    // }
    console.log("error.response: ", error)
    return error.response;
  }
);
