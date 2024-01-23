import { IoIosWarning } from "react-icons/io";

const ErrorMsg = ({ errMsg, dir, reverseFlex }) => {
  return (
    <div
      className={` ${reverseFlex} flex items-center gap-5 mt-10 border-[#fecdca] rounded-md bg-[#ffd9d5] w-full md:w-1/2 m-auto px-5 py-10  font-semibold `}
    >
      <IoIosWarning size={30} className=" flex-shrink-0" />
      <p className={` ${dir === "left" ? "text-left" : "text-right"}`}>
        {errMsg}
      </p>
    </div>
  );
};

export default ErrorMsg;
