"use client";
import useSearch from "@/hooks/useSearch";
import { useRouter } from "next/navigation";

const Button = ({ title, path, className }) => {
  const router = useRouter();
  const { track_num } = useSearch();

  return (
    <button
      className={className}
      onClick={() =>
        router.push(`/${path}${track_num && `?track_num=${track_num}`}`)
      }
    >
      {title}
    </button>
  );
};

export default Button;
