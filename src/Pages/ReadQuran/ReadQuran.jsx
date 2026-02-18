import { useState, useEffect } from "react";
import axios from "axios";
import { APIs } from "../../Component/APIs/APIs";
import Loading from "../../Component/Loading/Loading";

export default function ReadQuran() {
  const [loading, setLoading] = useState(false);
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [surahData, setSurahData] = useState(null);
  const [showTranslation, setShowTranslation] = useState(false);
  const [fontSize, setFontSize] = useState(28);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchSurahs = async () => {
      setLoading(true);
      try {
        const data = await axios.get(APIs.surahs);
        setSurahs(data.data.suwar);
        console.log(data.data.suwar);
      } catch (error) {
        console.error("Error fetching surahs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSurahs();
  }, []);

  const fetchSurahDetails = async (surahNumber) => {
    setLoading(true);
    try {
      const data = await axios.get(APIs.surah + surahNumber);
      setSurahData(data.data.data);
      setSelectedSurah(surahNumber);
    } catch (error) {
      console.error("Error fetching surah details:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSurahs = surahs.filter((surah) =>
    surah.name.includes(searchTerm),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
            <i className="fa-solid fa-book-open-reader text-4xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            اقرأ القرآن الكريم
          </h1>
          <p className="text-xl text-slate-600">
            اقرأ القرآن الكريم مع الترجمة والتفسير
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {!selectedSurah ? (
          <>
            {/* Search Bar */}
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

            {/* Surahs Grid */}
            {loading ? (
              <Loading />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSurahs.map((surah) => (
                  <button
                    key={surah.id}
                    onClick={() => fetchSurahDetails(surah.id)}
                    className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-300 text-right">
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
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="text-sm text-slate-600">
                        {surah.start_page} - {surah.end_page} صفحات
                      </span>
                      <i className="fa-solid fa-arrow-left text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <>
            {/* Reading Controls */}
            <div className="max-w-5xl mx-auto mb-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedSurah(null)}
                    className="flex items-center gap-2 text-slate-700 hover:text-emerald-600 transition-colors font-semibold">
                    <i className="fa-solid fa-arrow-right"></i>
                    العودة للقائمة
                  </button>

                  <div className="flex items-center gap-4">
                    {/* Font Size Control */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-600">حجم الخط:</span>
                      <button
                        onClick={() => setFontSize(Math.max(20, fontSize - 2))}
                        className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                        <i className="fa-solid fa-minus text-slate-700"></i>
                      </button>
                      <span className="text-sm font-semibold text-slate-700 min-w-[3rem] text-center">
                        {fontSize}px
                      </span>
                      <button
                        onClick={() => setFontSize(Math.min(40, fontSize + 2))}
                        className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                        <i className="fa-solid fa-plus text-slate-700"></i>
                      </button>
                    </div>

                    {/* Translation Toggle */}
                    <button
                      onClick={() => setShowTranslation(!showTranslation)}
                      className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                        showTranslation
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}>
                      {showTranslation ? "إخفاء الترجمة" : "إظهار الترجمة"}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Surah Content */}
            {loading ? (
              <Loading />
            ) : (
              <div className="max-w-5xl mx-auto">
                {/* Surah Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 mb-8 shadow-2xl text-center">
                  <h2 className="text-4xl font-bold text-white mb-2">
                    {surahData?.name?.long}
                  </h2>
                  <p className="text-emerald-50">
                    {surahData?.verses?.length} آية
                  </p>
                </div>

                {/* Bismillah */}
                {selectedSurah !== 1 && selectedSurah !== 9 && (
                  <div className="bg-white rounded-2xl p-8 mb-6 shadow-lg border border-slate-200 text-center">
                    <p
                      className="font-bold text-emerald-700"
                      style={{
                        fontSize: `${fontSize}px`,
                        fontFamily: "'Amiri', serif",
                      }}>
                      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                    </p>
                  </div>
                )}

                {/* Verses */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                  <div className="space-y-8">
                    {surahData?.verses?.map((verse) => (
                      <div
                        key={verse.number.inSurah}
                        className="group hover:bg-emerald-50 p-6 rounded-xl transition-all duration-300">
                        {/* Arabic Text */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white font-bold">
                              {verse.number.inSurah}
                            </span>
                          </div>
                          <p
                            className="flex-1 leading-loose text-slate-800 text-right"
                            style={{
                              fontSize: `${fontSize}px`,
                              fontFamily: "'Amiri', serif",
                            }}>
                            {verse.text.arab}
                          </p>
                        </div>

                        {/* Translation (if enabled) */}
                        {showTranslation && (
                          <div className="pr-16 pt-4 border-t border-slate-100">
                            <p className="text-slate-600 leading-relaxed italic">
                              {/* You would fetch translation from API here */}
                              ترجمة الآية {verse.number.inSurah}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
