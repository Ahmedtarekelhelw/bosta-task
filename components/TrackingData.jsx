"use client";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import useDirection from "@/hooks/useDirection";
import { useTrackingData } from "@/context/TrackingDataContext";
import moment from "moment";

const TrackingData = ({ trackingData, tableHeaders }) => {
  const { dir } = useDirection();
  const { data } = useTrackingData();

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
    <div className="flex gap-20 mt-10 flex-col-reverse md:flex-row">
      {/* Delivery address */}
      <div className="md:flex-1 ">
        <h3
          className={` ${
            dir === "left" ? "text-left" : "text-right"
          } text-gray-500 font-semibold mb-3 `}
        >
          {trackingData[0]}
        </h3>
        <div
          className={`${
            dir === "left" ? "text-left" : "text-right"
          } border rounded-md p-5 bg-[#fafafa] mb-4 text-gray-700`}
        >
          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك Cairo
        </div>

        <div className="border rounded-md p-5 flex justify-between items-center gap-3">
          <div>
            <h4
              className={`font-bold ${
                dir === "left" ? "text-left" : "text-right"
              }`}
            >
              {trackingData[1]}
            </h4>
            <button className="rounded-md py-1 px-5 mt-5 bg-[#e30613] text-white">
              {trackingData[2]}
            </button>
          </div>
          <Image
            src="/assets/images/problem.png"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>

      {/* Shipment details */}
      <div className="ag-theme-quartz md:flex-[2.5] w-full md:w-1/2 ">
        <h3
          className={`text-gray-500 ${
            dir === "left" ? "text-left" : "text-right"
          } text-gray-500 font-semibold mb-3`}
        >
          {trackingData[3]}
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
    </div>
  );
};

export default TrackingData;
