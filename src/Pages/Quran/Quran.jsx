import { useEffect, useState } from "react";
import { APIs } from "../../Component/APIs/APIs";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../../Component/Loading/Loading";

export default function Quran() {
  const [surahs, setSurahs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSurah = async () => {
      setLoading(true);
      try {
        const data = await axios.get(APIs.surahs);
        console.log(data.data.suwar);
        setSurahs(data.data.suwar);
      } catch (error) {
        console.error("Error fetching surahs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurah();
  }, []);

  const filteredSurahs = surahs

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
            <i className="fa-solid fa-book-quran text-4xl text-white"></i>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            القرآن الكريم
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            هذا هو قسم القرآن الكريم حيث يمكنك قراءة القرآن الكريم
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن سورة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-lg shadow-lg transition-all duration-300"
            />
            <i className="fa-solid fa-search absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl"></i>
          </div>
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSurahs.map((surah) => (
              <Link
                to={`/surah/${surah.id}/${encodeURIComponent(
                  surah.name,
                )}`}
                key={surah.number}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-300 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  {/* Surah Number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">
                          {surah.id}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                          {surah.name}
                        </h4>
                        <p className="text-sm text-slate-500 mt-1">
                          {surah.name}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Surah Info */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <i
                        className={`${
                          surah.type.id === "Makkiyyah"
                            ? "fa-solid fa-kaaba"
                            : "fa-solid fa-mosque"
                        } text-emerald-600`}></i>
                      <span className="text-sm font-medium">
                        {surah.type.id === "Makkiyyah" ? "مكية" : "مدنية"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <i className="fa-solid fa-list-ol text-teal-600"></i>
                      <span className="text-sm font-medium">
                        {surah.ayahCount} آية
                      </span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                      <i className="fa-solid fa-arrow-left text-white"></i>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* No Results */}
        {!loading && filteredSurahs.length === 0 && (
          <div className="text-center py-20">
            <i className="fa-solid fa-search text-6xl text-slate-300 mb-4"></i>
            <p className="text-xl text-slate-500">لم يتم العثور على نتائج</p>
          </div>
        )}
      </div>
    </div>
  );
}
