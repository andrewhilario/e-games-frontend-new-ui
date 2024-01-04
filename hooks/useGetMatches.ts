import { useEffect, useState } from "react";
import axios from "axios";

const useGetMatches = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await axios.get(
          "https://api.rugx.io/api/matches/?size=15&page=1"
        );
        setMatches(response.data);
      } catch (error) {
        console.error("Error fetching matches:", error);
      }
    };

    fetchMatches();
  }, []);

  return matches;
};

export default useGetMatches;
