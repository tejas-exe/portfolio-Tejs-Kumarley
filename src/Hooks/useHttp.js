import { useState } from "react";

const useHttp = (requstConfig,returnData) => {
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState("");
  const req = async () => {
    setLoding(true);
    const responce = await fetch(requstConfig.URL, requstConfig.metaData);
    if (!responce.ok) {
      throw new Error("Failed to Exicute");
    }
    const res = await responce.json();
    returnData(res)
    setLoding(false)
  };
  return {
    isLoding: loding,
    error: error,
    responce:req
  }
};
export default useHttp;
