"use server";

import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";

export const handleTracking = async (formData) => {
  const locale = await getLocale();

  const trackNum = formData.get("tracking_Number");
  redirect(`/${locale}?track_num=${trackNum}`);
};
