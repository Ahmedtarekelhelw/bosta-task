"use client";

import useFetch from "@/hooks/useFetch";
import moment from "moment";
import Step from "./Step";
import useSearch from "@/hooks/useSearch";
import useDirection from "@/hooks/useDirection";
import Progress from "./Progress";

import { TfiTruck } from "react-icons/tfi";
import { FaTruck } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { useTrackingData } from "@/context/TrackingDataContext";
import { useEffect } from "react";

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

  const StepInfo = [
    {
      title: `${StepTitle[0]}. ${track_num}`,
      info: StepStatus[data?.CurrentStatus?.state],
      color: statusColor[data?.CurrentStatus?.state],
    },
    {
      title: StepTitle[1],
      info: moment(data.CurrentStatus?.timestamp).utc().local().format("llll"),
    },
    {
      title: StepTitle[2],
      info: data.provider,
    },
    {
      title: StepTitle[3],
      info: moment(data.PromisedDate).utc().local().format("YYYY-MM-DD"),
    },
  ];
  return (
    <div className="border rounded-md  mt-10  flex  md:flex-col">
      {/* shipment-info */}
      <div
        className={`shipment-info border-b mb-5 p-5 text-${dir} flex flex-col gap-5 md:gap-0 md:flex-row md:items-center ${reverseFlex} justify-between `}
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
      <div className={`shipment-progress flex p-5 pb-16  ${reverseFlex}`}>
        <Progress
          index={1}
          completed={completed}
          color={statusColor[data?.CurrentStatus?.state]}
          text={StepsText[0]}
        />
        <Progress
          index={2}
          middle
          style={dir === "left" ? "left-[60%]" : "right-[60%]"}
          completed={completed}
          color={statusColor[data?.CurrentStatus?.state]}
          text={StepsText[1]}
        />
        <Progress
          index={3}
          middle
          style={dir === "left" ? "right-[60%]" : "left-[60%]"}
          completed={completed}
          Icon={
            dir === "right" ? <TfiTruck size={20} /> : <FaTruck size={20} />
          }
          dir={dir}
          color={statusColor[data?.CurrentStatus?.state]}
          text={StepsText[2]}
        />
        <Progress
          index={4}
          dir={dir}
          completed={completed}
          Icon={<FaPersonCircleCheck size={20} />}
          color={statusColor[data?.CurrentStatus?.state]}
          text={StepsText[3]}
        />
      </div>
    </div>
  );
};

export default Tracking;
