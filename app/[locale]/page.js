import { useMemo } from "react";
import { useTranslations } from "next-intl";

import Tracking from "@/components/Tracking";
import TrackingData from "@/components/TrackingData";

import {
  stepStatus,
  stepsText,
  stepTitle,
  tableHeaders,
  trackingData,
  Translate,
} from "@/helper/helper";

export default function Home() {
  const t = useTranslations("step");
  const t2 = useTranslations("tracking_info");

  const StepTitle = useMemo(() => Translate(t, stepTitle), [t]);
  const StepStatus = useMemo(() => Translate(t, stepStatus), [t]);
  const StepsText = useMemo(() => Translate(t, stepsText), [t]);

  const Trackingdata = useMemo(() => Translate(t2, trackingData), [t2]);
  const TableHeaders = useMemo(() => Translate(t2, tableHeaders), [t2]);

  return (
    <div className="mx-10 mb-36">
      <Tracking
        StepTitle={StepTitle}
        StepStatus={StepStatus}
        StepsText={StepsText}
        errMsg={t2("error")}
      />
      <TrackingData trackingData={Trackingdata} tableHeaders={TableHeaders} />
    </div>
  );
}
