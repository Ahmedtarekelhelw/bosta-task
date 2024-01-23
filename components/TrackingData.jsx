"use client";
import { useEffect } from "react";
import useDirection from "@/hooks/useDirection";
import "moment/locale/ar";
import { translateDate } from "@/helper/helper";
import ShipmentDetails from "./ShipmentDetails";
import DeliveryAddress from "./DeliveryAddress";

const TrackingData = ({ trackingData, tableHeaders }) => {
  const { locale, dir } = useDirection();

  useEffect(() => {
    translateDate(locale);
  }, [locale]);
  return (
    <div className="flex gap-20 mt-10 flex-col-reverse md:flex-row">
      <DeliveryAddress trackingData={trackingData} dir={dir} />
      <ShipmentDetails tableHeaders={tableHeaders} title={trackingData[3]} />
    </div>
  );
};

export default TrackingData;
