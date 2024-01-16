"use client";

import { FaPersonCircleCheck, FaTruck } from "react-icons/fa6";
import Progress from "./Progress";
import { TfiTruck } from "react-icons/tfi";
import useDirection from "@/hooks/useDirection";

const Stepper = ({ completed, color }) => {
  const { reverseFlex, dir } = useDirection();

  return (
    <div className={`shipment-progress md:flex p-5   ${reverseFlex} hidden`}>
      <Progress index={1} completed={completed} color={color} />
      <Progress
        index={2}
        middle
        style={dir === "left" ? "left-[60%]" : "right-[60%]"}
        completed={completed}
        color={color}
      />
      <Progress
        index={3}
        middle
        style={dir === "left" ? "right-[60%]" : "left-[60%]"}
        completed={completed}
        Icon={dir === "right" ? <TfiTruck size={20} /> : <FaTruck size={20} />}
        dir={dir}
        color={color}
      />
      <Progress
        index={4}
        dir={dir}
        completed={completed}
        Icon={<FaPersonCircleCheck size={20} />}
        color={color}
      />
    </div>
  );
};

export default Stepper;
