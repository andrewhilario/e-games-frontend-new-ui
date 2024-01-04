import { useEffect, useState } from "react";
import axios from "axios";

const useGetMatchIdDetails = (id: string) => {
  const [matchIdDetails, setMatchIdDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getMatchIdDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.rugx.io/api/ending/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*"
            }
          }
        );
        setMatchIdDetails(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getMatchIdDetails();
  }, [id]);

  return { matchIdDetails, loading, error };
};

export default useGetMatchIdDetails;
