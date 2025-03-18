// import { useState, useEffect } from "react";

// const API_URL_ARABIC = "https://api.alquran.cloud/v1/quran/quran-uthmani"; // Arabic Text
// const API_URL_TRANSLATION = "https://api.alquran.cloud/v1/quran/en.asad"; // English Translation

// const useFetchAyahs = () => {
//   const [ayahs, setAyahs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchAyahs = async () => {
//       try {
//         const [arabicRes, translationRes] = await Promise.all([
//           fetch(API_URL_ARABIC).then((res) => res.json()),
//           fetch(API_URL_TRANSLATION).then((res) => res.json()),
//         ]);

//         const verses = [];
//         arabicRes.data.surahs.forEach((surah, surahIndex) => {
//           surah.ayahs.forEach((ayah, ayahIndex) => {
//             verses.push({
//               id: ayah.number,
//               surahNumber: surah.number, // Add Surah Number
//               parahNumber: ayah.juz, // Add Juz (Parah) Number
//               arabicText: ayah.text,
//               translation:
//                 translationRes.data.surahs[surahIndex].ayahs[ayahIndex].text,
//             });
//           });
//         });

//         setAyahs(verses);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAyahs();
//   }, []);

//   return { ayahs, loading };
// };

// export default useFetchAyahs;

import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL_ARABIC = "https://api.alquran.cloud/v1/quran/quran-uthmani"; // Arabic Text
const API_URL_TRANSLATION = "https://api.alquran.cloud/v1/quran/en.asad"; // English Translation

const useFetchAyahs = () => {
  const [ayahs, setAyahs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Store Ayahs in Async Storage
  const saveAyahsToStorage = async (data) => {
    try {
      await AsyncStorage.setItem("ayahs", JSON.stringify(data));
    } catch (error) {
      console.error("Error saving ayahs:", error);
    }
  };

  // Load Ayahs from Async Storage
  const loadAyahsFromStorage = async () => {
    try {
      const storedAyahs = await AsyncStorage.getItem("ayahs");
      return storedAyahs ? JSON.parse(storedAyahs) : null;
    } catch (error) {
      console.error("Error loading ayahs:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchAyahs = async () => {
      try {
        // Check if ayahs are already stored
        const localAyahs = await loadAyahsFromStorage();
        if (localAyahs) {
          setAyahs(localAyahs);
          setLoading(false);
          return;
        }

        // Fetch from API if no local data
        const [arabicRes, translationRes] = await Promise.all([
          fetch(API_URL_ARABIC).then((res) => res.json()),
          fetch(API_URL_TRANSLATION).then((res) => res.json()),
        ]);

        const verses = [];
        arabicRes.data.surahs.forEach((surah, surahIndex) => {
          surah.ayahs.forEach((ayah, ayahIndex) => {
            verses.push({
              id: ayah.number,
              surahNumber: surah.number, // Add Surah Number
              parahNumber: ayah.juz, // Add Juz (Parah) Number
              arabicText: ayah.text,
              translation:
                translationRes.data.surahs[surahIndex].ayahs[ayahIndex].text,
            });
          });
        });

        setAyahs(verses);

        // Store ayahs in local storage
        await saveAyahsToStorage(verses);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAyahs();
  }, []);

  return { ayahs, loading };
};

export default useFetchAyahs;
