import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { captureAttributionCookie } from "@/lib/attributionCookie";

export default function AttributionCookie() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    captureAttributionCookie(search, pathname);
  }, [pathname, search]);
  return null;
}
