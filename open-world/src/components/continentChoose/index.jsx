import React, { useEffect, useState } from "react";
import { ContinentContent } from "../ContinentContent";

export function ContinentChoose() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("continent.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (data) {
    return <ContinentContent data={data} />;
  }

  return null;
}
