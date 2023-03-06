import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";

function useDecodedToken(token) {
  const { decodedToken } = useJwt(token);
  const [decoded, setDecoded] = useState(decodedToken);

  useEffect(() => {
    setDecoded(decodedToken);
  }, [decodedToken]);

  return decoded;
}

export default useDecodedToken;
