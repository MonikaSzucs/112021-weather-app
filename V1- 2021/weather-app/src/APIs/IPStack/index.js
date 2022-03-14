import React, { useEffect, useState } from 'react';

/* IP Stack */
const URL = "https://ip.nf/me.json";

const IPStack = () => {
  const [info, setInfo] = useState({ ip: "" });

  useEffect(() => {
    fetch(URL, {method: "get"})
      .then((response) => response.json())
      .then((data) => {
        setInfo({ ...data });
      })
  }, []);

  return (
    <>
        {info.ip.city}
    </>
    
  );
}

export default IPStack;
