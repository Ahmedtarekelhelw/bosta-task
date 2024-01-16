import Tracking from "@/components/Tracking";
import TrackingData from "@/components/TrackingData";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Home() {
  const t = useTranslations("step");
  const t2 = useTranslations("tracking_info");

  const StepTitle = useMemo(
    () => [
      t("shipment_No"),
      t("last_update"),
      t("merchant_name"),
      t("delivering_at"),
    ],
    [t]
  );

  const StepStatus = useMemo(
    () => ({
      DELIVERED: t("DELIVERED"),
      CANCELLED: t("CANCELLED"),
      DELIVERED_TO_SENDER: t("DELIVERED_TO_SENDER"),
    }),
    [t]
  );

  const StepsText = useMemo(
    () => [
      t("sh_created"),
      t("sh_received_from_merchant"),
      t("sh_on_the_way"),
      t("sh_delivered"),
    ],
    [t]
  );
  const trackingData = useMemo(
    () => [
      t2("Delivery_address"),
      t2("shipment_problem"),
      t2("Report_a_problem"),
      t2("Shipment_details"),
    ],
    [t2]
  );

  const tableHeaders = useMemo(
    () => [t2("hub"), t2("date"), t2("time"), t2("state")],
    [t2]
  );

  return (
    <div className="mx-10 mb-36">
      <Tracking
        StepTitle={StepTitle}
        StepStatus={StepStatus}
        StepsText={StepsText}
      />
      <TrackingData trackingData={trackingData} tableHeaders={tableHeaders} />
    </div>
  );
}
