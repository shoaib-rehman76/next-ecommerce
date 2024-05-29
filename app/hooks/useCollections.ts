// "use client";
// import { useEffect, useState } from "react";
// import { loadAllCollections } from "../queries/Collections";

// export const useLoadAllCollections = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [collectionData, setCollectionData] = useState<collectionsType[]>([]);

//   useEffect(() => {
//     (async () => {
//       setIsLoading(true);
//       const response = await loadAllCollections();
//       if (response) {
//         setCollectionData(response);
//       }
//       setIsLoading(false);
//     })();
//   }, []);

//   return { collectionData, isLoading };
// };
