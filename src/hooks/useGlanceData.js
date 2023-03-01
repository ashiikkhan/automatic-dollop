import { useEffect, useState } from "react";

const useGlanceData = () => {
  const [glance, setGlance] = useState([]);
  useEffect(() => {
    fetch("glanceData.json")
      .then((res) => res.json())
      .then((data) => setGlance(data));
  }, []);
  return [glance, setGlance];
};
export default useGlanceData;
