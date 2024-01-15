"use client";
import { useParams } from "next/navigation";

const useDirection = () => {
  const { locale } = useParams();
  let dir = locale === "ar" ? "right" : "left";
  let reverseFlex = locale === "ar" && "flex-row-reverse";

  return { locale, reverseFlex, dir };
};

export default useDirection;
