import { useInterval } from "@mantine/hooks";
import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState<Date>(new Date());
  const interval = useInterval(() => setTime(new Date()), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return <p className="bold">{time.toLocaleString("es-MX")}</p>;
};

export default CurrentTime;
