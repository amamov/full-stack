import { useState, useEffect, useCallback } from "react";

/**
 * 현재 윈도우 가로, 세로를 반환합니다.
 */
export default function useWindowSize(): {
  width: number | undefined;
  height: number | undefined;
} {
  const isClient = typeof window === "object";

  const getSize = useCallback(
    () => ({
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    }),
    [isClient],
  );

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient, getSize]);

  return windowSize;
}
