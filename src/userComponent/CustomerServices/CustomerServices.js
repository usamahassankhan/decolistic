import React from "react";
import HomecustomerServices from "./HomecustomerServices/HomecustomerServices";
import RequestQuote from "./RequestQuote/RequestQuote";
import { useLocation } from "react-router-dom";

const CustomerServices = (props) => {
  // const location = useLocation();
  // console.log(location);
  // console.log("dsds", props.match.isExact);

  return (
    <div style={{ display: "flex" }}>
      <HomecustomerServices />
      {/* {props.location.pathname === "/dustomer" && <RequestQuote />} */}
      {/* {props.match.isExact ? <RequestQuote /> : "f"} */}
    </div>
  );
};

export default CustomerServices;