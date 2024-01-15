import Tracking from "@/components/Tracking";
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

  return (
    <div>
      <Tracking StepTitle={StepTitle} StepStatus={StepStatus} />
    </div>
  );
}
