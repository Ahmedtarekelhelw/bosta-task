"use client";
import useSearch from "@/hooks/useSearch";
import useDirection from "@/hooks/useDirection";
import { useTrackingData } from "@/context/TrackingDataContext";
import { useEffect } from "react";
import Stepper from "./Stepper";
import ErrorMsg from "./ErrorMsg";
import ShipmentInfo from "./ShipmentInfo";
import { statusColor } from "@/helper/helper";

const Tracking = ({ StepTitle, StepStatus, StepsText, errMsg }) => {
  const { track_num } = useSearch();
  const { reverseFlex, dir } = useDirection();
  const { data, loading, error, fetchData } = useTrackingData();

  useEffect(() => {
    if (track_num) fetchData(track_num);
  }, [track_num]); // eslint-disable-line

  const completed = data?.CurrentStatus?.state === "DELIVERED" ? true : false;

  return (
    <>
      {error && (
        <ErrorMsg dir={dir} errMsg={errMsg} reverseFlex={reverseFlex} />
      )}
      <div className="border rounded-md  mt-10  flex  md:flex-col">
        <ShipmentInfo
          loading={loading}
          StepTitle={StepTitle}
          StepStatus={StepStatus}
          track_num={track_num}
          data={data}
          dir={dir}
          reverseFlex={reverseFlex}
        />

        {/* shipment-progress  */}
        <Stepper
          completed={completed}
          color={statusColor[data?.CurrentStatus?.state]}
        />

        <div
          className={` mb-5 p-5 pt-1 md:text-${dir} hidden md:flex  gap-5 md:gap-0  md:items-center w-full md:w-auto text-center  ${reverseFlex} justify-between `}
        >
          {StepsText.map((step, i) => (
            <h3 key={i} className="font-bold">
              {step}
            </h3>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tracking;
