"use client";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { useState } from "react";
import Image from "next/image";
const TrackingData = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([
    {
      mission: "Voyager",
      company: "NASA",
      location: "Cape Canaveral",
      date: "1977-09-05",
      rocket: "Titan-Centaur ",
      price: 86580000,
      successful: true,
    },
    {
      mission: "Apollo 13",
      company: "NASA",
      location: "Kennedy Space Center",
      date: "1970-04-11",
      rocket: "Saturn V",
      price: 3750000,
      successful: false,
    },
    {
      mission: "Falcon 9",
      company: "SpaceX",
      location: "Cape Canaveral",
      date: "2015-12-22",
      rocket: "Falcon 9",
      price: 9750000,
      successful: true,
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
  ]);
  return (
    <div className="flex gap-20 mt-10">
      <div className="flex-1 ">
        <h3 className="text-gray-500 font-semibold mb-3">Delivery address</h3>
        <div className="border rounded-md p-5 bg-[#fafafa] mb-4 text-gray-700">
          امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك Cairo
        </div>

        <div className="border rounded-md p-5 flex gap-3">
          {/* img */}

          <div>
            <h4>Is there a problem with your shipment?</h4>
            <button className="rounded-md py-2 px-4 bg-red-400 text-white">
              Report a problem
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

      <div
        className="ag-theme-quartz flex-[2.5]"
        style={{ height: "auto", width: "50%" }}
      >
        <h3 className="text-gray-500 font-semibold mb-3">Shipment details</h3>

        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
};

export default TrackingData;
