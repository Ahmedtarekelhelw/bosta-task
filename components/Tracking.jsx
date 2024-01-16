"use client";

import moment from "moment";
import Step from "./Step";
import useSearch from "@/hooks/useSearch";
import useDirection from "@/hooks/useDirection";
import { useTrackingData } from "@/context/TrackingDataContext";
import { useEffect, useMemo } from "react";
import Stepper from "./Stepper";

const Tracking = ({ StepTitle, StepStatus, StepsText }) => {
  const { track_num } = useSearch();
  const { reverseFlex, dir } = useDirection();
  const { data, loading, error, fetchData } = useTrackingData();

  useEffect(() => {
    if (track_num) fetchData(track_num);
  }, [track_num]); // eslint-disable-line

  const statusColor = {
    DELIVERED: "#4BB543",
    CANCELLED: "#e30613",
    DELIVERED_TO_SENDER: "#ffc107",
  };

  const completed = data?.CurrentStatus?.state === "DELIVERED" ? true : false;

  const StepInfo = useMemo(
    () => [
      {
        title: `${StepTitle[0]}. ${track_num || "N/A"}`,
        info: StepStatus[data?.CurrentStatus?.state] || "N/A",
        color: statusColor[data?.CurrentStatus?.state],
      },
      {
        title: StepTitle[1],
        info: data.CurrentStatus?.timestamp
          ? moment(data.CurrentStatus?.timestamp).utc().local().format("llll")
          : "N/A",
      },
      {
        title: StepTitle[2],
        info: data.provider || "N/A",
      },
      {
        title: StepTitle[3],
        info: data.PromisedDate
          ? moment(data.PromisedDate).utc().local().format("YYYY-MM-DD")
          : "N/A",
      },
    ],
    [data]
  );

  return (
    <div className="border rounded-md  mt-10  flex  md:flex-col">
      {/* shipment-info */}
      <div
        className={`shipment-info border-b mb-5 p-5 md:text-${dir} flex flex-col gap-5 md:gap-0 md:flex-row md:items-center w-full md:w-auto text-center  ${reverseFlex} justify-between `}
      >
        {StepInfo.map((step, i) => (
          <Step
            key={i}
            title={step.title}
            loading={loading}
            info={step.info}
            color={step?.color}
          />
        ))}
      </div>

      {/* shipment-progress  */}
      <Stepper
        completed={completed}
        color={statusColor[data?.CurrentStatus?.state]}
        StepsText={StepsText}
      />
    </div>
  );
};

export default Tracking;
