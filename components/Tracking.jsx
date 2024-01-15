"use client";

import useFetch from "@/hooks/useFetch";
import moment from "moment";
import Step from "./Step";
import useSearch from "@/hooks/useSearch";
import useDirection from "@/hooks/useDirection";

const Tracking = ({ StepTitle, StepStatus }) => {
  const { track_num } = useSearch();
  const { reverseFlex, dir } = useDirection();
  const { data, loading, error } = useFetch(track_num);

  const status = {
    DELIVERED: "#4BB543",
    CANCELLED: "#e30613",
    DELIVERED_TO_SENDER: "#ffc107",
  };

  return (
    <div className="border rounded-md  mt-10 mx-5">
      <div
        className={`shipment-info border-b mb-5 p-5 text-${dir} flex items-center ${reverseFlex} justify-between `}
      >
        <Step
          title={`${StepTitle[0]}. ${track_num}`}
          loading={loading}
          info={StepStatus[data?.CurrentStatus?.state]}
          color={status[data?.CurrentStatus?.state]}
        />
        <Step
          title={StepTitle[1]}
          info={moment(data.CurrentStatus?.timestamp)
            .utc()
            .local()
            .format("llll")}
          loading={loading}
        />
        <Step title={StepTitle[2]} info={data.provider} loading={loading} />
        <Step
          title={StepTitle[3]}
          info={moment(data.PromisedDate).utc().local().format("YYYY-MM-DD")}
          loading={loading}
        />
      </div>

      <div className="shipment-progress"></div>
    </div>
  );
};

export default Tracking;
