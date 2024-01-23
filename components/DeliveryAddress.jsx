import Image from "next/image";

const DeliveryAddress = ({ trackingData, dir }) => {
  return (
    <div className="md:flex-1 ">
      <h3
        className={` ${
          dir === "left" ? "text-left" : "text-right"
        } text-gray-500 font-semibold mb-3 `}
      >
        {trackingData[0]}
      </h3>
      <div
        className={`${
          dir === "left" ? "text-left" : "text-right"
        } border rounded-md p-5 bg-[#fafafa] mb-4 text-gray-700`}
      >
        امبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك Cairo
      </div>

      <div className="border rounded-md p-5 flex justify-between items-center gap-3">
        <div>
          <h4
            className={`font-bold ${
              dir === "left" ? "text-left" : "text-right"
            }`}
          >
            {trackingData[1]}
          </h4>
          <button className="rounded-md py-1 px-5 mt-5 bg-[#e30613] text-white">
            {trackingData[2]}
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
  );
};

export default DeliveryAddress;
