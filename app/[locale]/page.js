import Tracking from "@/components/Tracking";
import TrackingData from "@/components/TrackingData";
import { useTranslations } from "next-intl";
import { useMemo } from "react";

export default function Home() {
  const t = useTranslations("step");

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

  return (
    <div className="mx-10 mb-36">
      <Tracking
        StepTitle={StepTitle}
        StepStatus={StepStatus}
        StepsText={StepsText}
      />
      <TrackingData />
    </div>
  );
}
