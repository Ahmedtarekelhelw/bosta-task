"use client";
const Step = ({ title, info, loading, color }) => {
  return (
    <div className="last-update">
      <span className="text-slate-400">{title}</span>
      {loading ? (
        <div className="w-52 animate-pulse  h-3 rounded-md mt-2 bg-slate-200 " />
      ) : (
        <h3
          className={`font-bold ${color ? `text-[${color}]` : "text-black"} `}
        >
          {info}
        </h3>
      )}
    </div>
  );
};

export default Step;
