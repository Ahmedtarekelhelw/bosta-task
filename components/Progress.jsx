import { FaCheck } from "react-icons/fa6";

const Progress = ({
  index,
  completed,
  Icon,
  color,
  middle,
  style,
  dir,
  text,
}) => {
  const isLastStep = index === 4;
  const isStepThree = index === 3;

  const iconStatus = completed || index === 1 || index === 2;

  const bg = (condition) => {
    return !completed && condition
      ? "rgb(203 213 225)"
      : color || "rgb(203 213 225)";
  };
  return (
    <div
      className={`flex items-center ${
        middle && "flex-1"
      }  relative justify-between `}
    >
      {middle && (
        <div
          style={{
            backgroundColor: bg((isLastStep || isStepThree) && dir === "right"),
          }}
          className="w-full h-2 "
        />
      )}

      <div className={`${middle && `absolute ${style} translate-x-1/2`}`}>
        <div
          style={{
            backgroundColor: bg(isLastStep),
          }}
          className={`${
            iconStatus ? "w-6 h-6" : "w-10 h-10"
          }  rounded-full  text-white flex items-center justify-center`}
        >
          {iconStatus ? <FaCheck size={15} /> : Icon}
        </div>
        {/* <div className="absolute -bottom-12 font-bold ">{text}</div> */}
      </div>

      {middle && (
        <div
          style={{
            backgroundColor: bg((isLastStep || isStepThree) && dir === "left"),
          }}
          className="w-full h-2 "
        />
      )}
    </div>
  );
};

export default Progress;
{
}
