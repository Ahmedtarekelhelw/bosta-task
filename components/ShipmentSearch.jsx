import { handleTracking } from "@/actions/tracking.actions";
import { useLocale, useTranslations } from "next-intl";
import { BsSearch } from "react-icons/bs";

const ShipmentSearch = ({ dir }) => {
  const locale = useLocale();
  const t = useTranslations("header");

  return (
    <div
      className={`${
        locale === "ar" ? "left-0" : "right-0"
      } px-10 py-8  bg-white z-50 rounded-md absolute  top-[-200px]  shadow-md text-md  transition-all duration-200 group-hover:top-[80px]  font-medium`}
    >
      <h3 className="mb-2" style={{ textAlign: dir }}>
        {t("Track_Your_Shipment")}
      </h3>
      <form
        className="flex items-center border rounded-md pl-2"
        action={handleTracking}
      >
        <input
          placeholder={t("Tracking_No")}
          type="text"
          className=" outline-none"
          name="tracking_Number"
        />
        <button
          className="bg-[#e30613] cursor-pointer text-white rounded-br-md rounded-tr-md p-2"
          type="submit"
        >
          <BsSearch size={22} />
        </button>
      </form>
    </div>
  );
};

export default ShipmentSearch;
