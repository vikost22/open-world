import { useState, useEffect } from "react";
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
        console.error("Помилка під час отримання даних:", error);
      }
    };
    fetchData();
  }, []);
  return data ? <ContinentContent data={data} /> : null;
}
