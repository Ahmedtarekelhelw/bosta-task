"use client";
import { useSearchParams } from "next/navigation";

const useSearch = () => {
  const searchParams = useSearchParams();

  const track_num = searchParams.get("track_num");
  return { track_num };
};

export default useSearch;
