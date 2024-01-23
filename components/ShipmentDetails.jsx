"use client";
import { useEffect, useMemo, useState } from "react";
import useDirection from "@/hooks/useDirection";
import { useTrackingData } from "@/context/TrackingDataContext";

import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { AgGridReact } from "ag-grid-react";
import moment from "moment";

const ShipmentDetails = ({ tableHeaders, title }) => {
  const { data } = useTrackingData();
  const { dir } = useDirection();

  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    setRowData(data?.TransitEvents || []);
  }, [data]);

  const columns = useMemo(
    () => [
      {
        field: "hub",
        headerName: tableHeaders[0],
        valueGetter: (params) => params.data.hub || "Bosta",
      },
      {
        field: "timestamp",
        headerName: tableHeaders[1],
        valueGetter: (params) =>
          moment(params.data.timestamp).utc().local().format("YYYY/MM/DD") ||
          "N/A",
      },
      {
        field: "timestamp",
        headerName: tableHeaders[2],
        valueGetter: (params) =>
          moment(params.data.timestamp).utc().local().format("HH:MM a") ||
          "N/A",
      },
      {
        field: "state",
        headerName: tableHeaders[3],
        valueGetter: (params) => params.data.state || "N/A",
      },
    ],
    []
  );
  return (
    <div className="ag-theme-quartz md:flex-[2.5] w-full md:w-1/2 ">
      <h3
        className={`text-gray-500 ${
          dir === "left" ? "text-left" : "text-right"
        } text-gray-500 font-semibold mb-3`}
      >
        {title}
      </h3>

      <AgGridReact
        rowData={rowData}
        columnDefs={columns}
        enableRtl={dir == "left" ? false : true}
        paginationPageSize={5}
        pagination={true}
        domLayout={"autoHeight"}
      />
    </div>
  );
};

export default ShipmentDetails;
