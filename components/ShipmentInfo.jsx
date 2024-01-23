import { useMemo } from "react";
import moment from "moment";

import Step from "./Step";
import { statusColor } from "@/helper/helper";

const ShipmentInfo = ({
  loading,
  StepTitle,
  StepStatus,
  track_num,
  dir,
  reverseFlex,
  data,
}) => {
  const StepInfo = useMemo(
    () => [
      {
        title: `${StepTitle[0]}. ${track_num || "N/A"}`,
        info: StepStatus[data.CurrentStatus?.state] || "N/A",
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
    [data, track_num, StepStatus, statusColor, StepTitle] // eslint-disable-line
  );

  return (
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
  );
};

export default ShipmentInfo;
