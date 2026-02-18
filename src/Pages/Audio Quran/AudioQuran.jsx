import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { APIs } from "../../Component/APIs/APIs";
import Loading from "../../Component/Loading/Loading";

export default function AudioQuran() {
  const [loading, setLoading] = useState(false);
  const [openQiraatList, setOpenQiraatList] = useState(false);
  const [reciters, setReciters] = useState([]);
  const [qiraatFilter, setQiraatFilter] = useState("");
  const [search, setSearch] = useState("");

  const qiraatOptions = [
    "الكل",
    "حفص عن عاصم - مرتل",
    "ورش عن نافع - مرتل",
    "خلف عن حمزة - مرتل",
    "البزي عن ابن كثير - مرتل",
    "قالون عن نافع - مرتل",
    "قنبل عن ابن كثير - مرتل",
    "السوسي عن أبي عمرو - مرتل",
    "المصحف المعلم",
    "المصحف المجود",
  ];

  useEffect(() => {
    const fetchReciters = async () => {
      setLoading(true);
      try {
        const data = await axios.get(APIs.reciters);
        setReciters(data.data.reciters);
        console.log(data.data.reciters);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchReciters();
  }, []);

  const QiraatCharacterFilter = () => {
    const chars = [
      "أ",
      "إ",
      "ب",
      "ث",
      "ج",
      "ح",
      "خ",
      "د",
      "ر",
      "z",
      "س",
      "ش",
      "ص",
      "ض",
      "ط",
      "ظ",
      "ع",
      "غ",
      "ف",
      "ق",
      "ك",
      "ل",
      "م",
      "ن",
      "ه",
      "و",
      "ي",
    ];

    return (
      <div className="space-y-8">
        {chars.map((char) => {
          const filteredReciters = reciters.filter(
            (reader) =>
              reader.letter === char &&
              reader.name.includes(search) &&
              reader.moshaf[0].name.includes(qiraatFilter),
          );
          return (
            filteredReciters.length > 0 && (
              <div key={char}>
                {/* Character Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-3xl font-bold text-white">
                      {char}
                    </span>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-emerald-200 to-transparent rounded-full"></div>
                </div>

                {/* Reciters */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredReciters.map((reader) => (
                    <Link
                      key={reader.id}
                      to={`/audio-quran/${encodeURIComponent(reader.name)}`}
                      className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-300">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                          <i className="fa-solid fa-microphone text-white text-xl"></i>
                        </div>
                        <span className="text-lg font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors flex-1">
                          {reader.name}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          );
        })}
      </div>
    );
  };

  function handleQiraatFilter(kind) {
    setQiraatFilter(kind === "الكل" ? "" : kind);
    setOpenQiraatList(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
              <i className="fa-solid fa-headphones text-4xl text-white"></i>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
              مصاحف صوتية
            </h2>
            <p className="text-xl text-slate-600">
              استمع إلى القرآن الكريم بأجمل الأصوات
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Search and Filter Section */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="بحث باسم القارئ..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-lg shadow-lg transition-all duration-300"
                />
                <i className="fa-solid fa-search absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl"></i>
              </div>

              {/* Qiraat Filter Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setOpenQiraatList(!openQiraatList)}
                  className="w-full md:w-auto px-6 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl font-bold text-lg hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg flex items-center justify-between gap-3">
                  <i className="fa-solid fa-filter"></i>
                  <span>قراءة</span>
                  <i
                    className={`fa-solid fa-chevron-down transition-transform duration-300 ${openQiraatList ? "rotate-180" : ""}`}></i>
                </button>

                {/* Dropdown Menu */}
                {openQiraatList && (
                  <div className="absolute top-full mt-2 right-0 w-80 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 max-h-96 overflow-y-auto">
                    {qiraatOptions.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQiraatFilter(option)}
                        className={`w-full text-right px-6 py-3 hover:bg-emerald-50 hover:text-orange-500 transition-colors border-b border-slate-100 last:border-b-0 ${
                          (option === "الكل" && !qiraatFilter) ||
                          qiraatFilter === option
                            ? "bg-emerald-50 text-emerald-700 font-bold"
                            : "text-slate-700"
                        }`}
                        style={{
                          border: "none",
                          borderBottom: "4px solid",
                          color:
                            (option === "الكل" && !qiraatFilter) ||
                            qiraatFilter === option
                              ? "green"
                              : "white",
                        }}>
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Filter Badge */}
            {qiraatFilter && (
              <div className="mt-4 flex items-center gap-2">
                <span className="text-sm text-slate-600">التصفية النشطة:</span>
                <span className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full font-semibold">
                  {qiraatFilter}
                  <button
                    onClick={() => setQiraatFilter("")}
                    className="hover:text-emerald-900">
                    <i className="fa-solid fa-times"></i>
                  </button>
                </span>
              </div>
            )}
          </div>

          {/* Reciters List */}
          <QiraatCharacterFilter />

          {/* No Results */}
          {reciters.filter(
            (reader) =>
              reader.name.includes(search) &&
              reader.moshaf[0].name.includes(qiraatFilter),
          ).length === 0 && (
            <div className="text-center py-20">
              <i className="fa-solid fa-search text-6xl text-slate-300 mb-4"></i>
              <p className="text-xl text-slate-500">لم يتم العثور على نتائج</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
