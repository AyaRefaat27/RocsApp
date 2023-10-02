// import { useState, useEffect } from "react";

// export default function FetchData(url) {
//   const [data, setData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchApiData = async () => {
//       setLoading(true);

//       try {
//         const response = await fetch(url);
//         if (!response.ok) {
//           setError("Failed to Fetch");
//           // alert("Failed to Fetch");
//         }

//         const result = await response.json();
//         setData(result.data);
//         setLoading(false);
//       } catch (err) {
//         setError(err.message);
//         setLoading(false);
//       }
//     };
//     fetchApiData();
//   }, [url]);
//   return { data, error, loading };
// }
