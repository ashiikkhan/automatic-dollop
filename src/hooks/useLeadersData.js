import { useEffect, useState } from "react";

const useLeadersData = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    fetch("leadersData.json")
      .then((res) => res.json())
      .then((data) => setLeaders(data));
  }, []);
  return [leaders, setLeaders];
};
export default useLeadersData;
