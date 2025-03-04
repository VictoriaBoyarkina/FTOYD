import { useEffect, useRef, useState } from "react";

const useDelayedValue = (value: boolean, delay = 500) => {
  const [showValue, setShowValue] = useState(false);
  const timeoutId = useRef<number | NodeJS.Timeout>(0);

  useEffect(() => {
    if (value) {
      setShowValue(true);
    } else {
      timeoutId.current = setTimeout(() => setShowValue(false), delay);
    }

    return () => clearTimeout(timeoutId.current);
  }, [value, delay]);

  return showValue;
};

export { useDelayedValue };
