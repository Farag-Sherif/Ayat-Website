import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { APIs } from "../../../Component/APIs/APIs";
import Loading from "../../../Component/Loading/Loading";

export default function Surah() {
  const [loading, setLoading] = useState(true);
  const [surahData, setSurahData] = useState([]);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchSurah = async () => {
      setLoading(true);
      try {
        const data = await axios.get(APIs.surah + id);
        setSurahData(data.data.data);
        console.log(data.data.data);
      } catch (error) {
        console.error("Error fetching surah data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurah();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-8 px-4">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto max-w-5xl">
          {/* Surah Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 mb-8 shadow-2xl text-center relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4 border-2 border-white/30">
                <i className="fa-solid fa-book-quran text-3xl text-white"></i>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {surahData.name?.long}
              </h2>
              <div className="flex items-center justify-center gap-4 text-emerald-50 mt-4">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-list-ol"></i>
                  سورة رقم {id}
                </span>
                <span>•</span>
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-book"></i>
                  {surahData.verses?.length} آية
                </span>
              </div>
            </div>
          </div>

          {/* Bismillah */}
          <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border border-slate-200 text-center">
            <p
              className="text-3xl md:text-4xl font-bold text-emerald-700"
              style={{ fontFamily: "'Amiri', serif" }}>
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>
          </div>

          {/* Verses Container */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-slate-200">
            <div className="space-y-6">
              {surahData.verses?.map((aya) => (
                <div
                  key={aya.number.inSurah}
                  className="group hover:bg-emerald-50 p-6 rounded-xl transition-all duration-300 border-b border-slate-100 last:border-b-0">
                  <div className="flex items-start gap-4">
                    {/* Verse Number Badge */}
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-lg">
                        {aya.number.inSurah}
                      </span>
                    </div>

                    {/* Arabic Text */}
                    <div className="flex-1">
                      <p
                        className="text-2xl md:text-3xl leading-loose text-slate-800 text-right"
                        style={{ fontFamily: "'Amiri', serif" }}>
                        {aya.text.arab}
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mx-2">
                          ﴿{aya.number.inSurah}﴾
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/quran"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <i className="fa-solid fa-book-open"></i>
              <span>العودة إلى الفهرس</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
