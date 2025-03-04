import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");

export default useGenres;

// import { useState, useEffect } from "react";
// import apiClient from "@/services/api-client";
// import { CanceledError } from "axios";

// export interface Genre {
//   id: number;
//   name: string;
// }

// interface FetchGenresResponse {
//   count: number;
//   results: Genre[];
// }

// const useGenres = () => {
//   const [genres, setGenres] = useState<Genre[]>([]);
//   const [error, setError] = useState("");
//   const [isLoading, setLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();
//     setLoading(true);
//     apiClient
//       .get<FetchGenresResponse>("/genres", { signal: controller.signal })
//       .then((response) => {
//         setGenres(response.data.results);
//         setLoading(false);
//       })
//       .catch((err) => {
//         if (err instanceof CanceledError) return;
//         setError(err.message);
//         setLoading(false);
//       });
//     return () => {
//       controller.abort();
//     };
//   }, []);
//   return { genres, error, isLoading };
// };

// export default useGenres;
