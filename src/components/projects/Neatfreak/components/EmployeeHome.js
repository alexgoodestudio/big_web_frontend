import React from "react";
import SubscriberTable from "./SubscriberTable";
import EstimateTable from "./EstimateTable";

const EmployeeHome = () => {
  return (
    <div >

      <div className="  d-flex row p-5">
        
        <div className="col-lg-6 mt-3 ">
          <EstimateTable />
        </div>
        <div className="col-lg-4 mt-3 ">
          <SubscriberTable />
        </div>
        <div className="col-lg-2 "></div>
      </div>
    </div>
  );
};

export default EmployeeHome;
