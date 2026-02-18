import { useState } from "react";

export default function FavoriteVerses() {
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = [
    "الكل",
    "الأمل والتفاؤل",
    "الصبر والثبات",
    "الدعاء والذكر",
    "الرحمة والمغفرة",
    "العلم والحكمة",
    "التوكل والإيمان",
  ];

  const verses = [
    {
      id: 1,
      arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا * إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      translation: "فإن مع العسر يسرا، إن مع العسر يسرا",
      surah: "الشرح",
      ayah: "5-6",
      category: "الأمل والتفاؤل",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
      translation: "ومن يتوكل على الله فهو حسبه",
      surah: "الطلاق",
      ayah: "3",
      category: "التوكل والإيمان",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 3,
      arabic:
        "وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ ۖ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ",
      translation:
        "ولا تيأسوا من روح الله، إنه لا ييأس من روح الله إلا القوم الكافرون",
      surah: "يوسف",
      ayah: "87",
      category: "الأمل والتفاؤل",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      arabic:
        "وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ",
      translation: "وإذا سألك عبادي عني فإني قريب، أجيب دعوة الداع إذا دعان",
      surah: "البقرة",
      ayah: "186",
      category: "الدعاء والذكر",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 5,
      arabic:
        "يَا أَيُّهَا الَّذِينَ آمَنُوا اصْبِرُوا وَصَابِرُوا وَرَابِطُوا وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
      translation:
        "يا أيها الذين آمنوا اصبروا وصابروا ورابطوا واتقوا الله لعلكم تفلحون",
      surah: "آل عمران",
      ayah: "200",
      category: "الصبر والثبات",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 6,
      arabic:
        "قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ",
      translation: "قل يا عبادي الذين أسرفوا على أنفسهم لا تقنطوا من رحمة الله",
      surah: "الزمر",
      ayah: "53",
      category: "الرحمة والمغفرة",
      color: "from-teal-500 to-cyan-600",
    },
    {
      id: 7,
      arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
      translation: "وقل رب زدني علما",
      surah: "طه",
      ayah: "114",
      category: "العلم والحكمة",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: 8,
      arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
      translation: "إن الله مع الصابرين",
      surah: "البقرة",
      ayah: "153",
      category: "الصبر والثبات",
      color: "from-amber-500 to-orange-600",
    },
  ];

  const filteredVerses = verses.filter(
    (verse) =>
      selectedCategory === "الكل" || verse.category === selectedCategory,
  );

  const toggleFavorite = (verseId) => {
    if (favorites.includes(verseId)) {
      setFavorites(favorites.filter((id) => id !== verseId));
    } else {
      setFavorites([...favorites, verseId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
            <i className="fa-solid fa-heart text-4xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            آيات مختارة
          </h1>
          <p className="text-xl text-slate-600">
            مجموعة من الآيات القرآنية المؤثرة والملهمة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg scale-105"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
            style={{
                    color: `${selectedCategory === category ? "white" : "#00b480"}`,
                  }}>
              {category}
            </button>
          ))}
        </div>

        {/* Favorites Count */}
        {favorites.length > 0 && (
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-3 rounded-full border border-pink-200">
              <i className="fa-solid fa-heart text-pink-600"></i>
              <span className="text-pink-700 font-semibold">
                لديك {favorites.length} آية مفضلة
              </span>
            </div>
          </div>
        )}

        {/* Verses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredVerses.map((verse) => (
            <div
              key={verse.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-300 overflow-hidden">
              {/* Category Badge */}
              <div
                className={`bg-gradient-to-r ${verse.color} p-4 text-center`}>
                <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-semibold">
                  {verse.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Arabic Text */}
                <div className="mb-6 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl">
                  <p
                    className="text-2xl md:text-3xl leading-loose text-slate-800 text-center"
                    style={{ fontFamily: "'Amiri', serif" }}>
                    {verse.arabic}
                  </p>
                </div>

                {/* Translation */}
                <p className="text-slate-600 text-center mb-4 leading-relaxed">
                  {verse.translation}
                </p>

                {/* Surah Info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-600">
                    <i className="fa-solid fa-book-quran text-emerald-600"></i>
                    <span className="font-semibold">
                      سورة {verse.surah} - آية {verse.ayah}
                    </span>
                  </div>

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(verse.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      favorites.includes(verse.id)
                        ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white scale-110"
                        : "bg-slate-100 text-slate-400 hover:bg-slate-200"
                    }`}>
                    <i
                      className={`fa-${
                        favorites.includes(verse.id) ? "solid" : "regular"
                      } fa-heart text-xl`}></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Section */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              شارك الآيات المفضلة
            </h3>
            <p className="text-emerald-50 mb-6">
              انشر الخير وشارك هذه الآيات المباركة مع أحبائك
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg flex items-center gap-2">
                <i className="fa-brands fa-whatsapp text-xl"></i>
                واتساب
              </button>
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg flex items-center gap-2">
                <i className="fa-brands fa-facebook text-xl"></i>
                فيسبوك
              </button>
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg flex items-center gap-2">
                <i className="fa-brands fa-twitter text-xl"></i>
                تويتر
              </button>
              <button className="bg-white text-emerald-700 px-6 py-3 rounded-full font-bold hover:bg-emerald-50 transition-all duration-300 shadow-lg flex items-center gap-2">
                <i className="fa-solid fa-copy text-xl"></i>
                نسخ الرابط
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
