import marked from "marked";
import conduct from "../lib/conduct.md";
import { useEffect, useState } from "react";

const Conduct = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(conduct);
      const data = await res.text();
      setData(marked(data));
    };

    fetchData();
  }, []);
  return (
    <section className="container py-8 px-6 flex justify-center items-center m-auto">
      <article dangerouslySetInnerHTML={{ __html: data }} className="prose p-4"/>
    </section>
  );
};

export default Conduct;
