import { useState } from "react";

export default function Hadith() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [selectedBook, setSelectedBook] = useState("الكل");
  const [favorites, setFavorites] = useState([]);

  const categories = [
    "الكل",
    "العقيدة والإيمان",
    "العبادات",
    "الأخلاق والآداب",
    "المعاملات",
    "الرقائق والزهد",
    "الدعاء والذكر",
  ];

  const books = [
    "الكل",
    "صحيح البخاري",
    "صحيح مسلم",
    "سنن أبي داود",
    "جامع الترمذي",
    "سنن النسائي",
    "سنن ابن ماجه",
  ];

  const ahadith = [
    {
      id: 1,
      text: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ فَهِجْرَتُهُ إِلَى اللَّهِ وَرَسُولِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيبُهَا أَوْ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ",
      translation: "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى",
      narrator: "عمر بن الخطاب",
      book: "صحيح البخاري",
      category: "العبادات",
      explanation:
        "هذا الحديث أصل عظيم من أصول الإسلام، وعليه مدار الأعمال، فلا يقبل عمل إلا بنية صالحة خالصة لله تعالى.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 2,
      text: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
      translation: "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت",
      narrator: "أبو هريرة",
      book: "صحيح البخاري",
      category: "الأخلاق والآداب",
      explanation:
        "حث على حفظ اللسان وعدم الكلام إلا بخير، وهو من محاسن الأخلاق الإسلامية.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 3,
      text: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
      translation: "المسلم من سلم المسلمون من لسانه ويده",
      narrator: "عبد الله بن عمرو",
      book: "صحيح البخاري",
      category: "الأخلاق والآداب",
      explanation:
        "تعريف المسلم الحقيقي بأنه من سلم الناس من أذاه بالقول والفعل.",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 4,
      text: "الدِّينُ النَّصِيحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ وَلِكِتَابِهِ وَلِرَسُولِهِ وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ",
      translation: "الدين النصيحة",
      narrator: "تميم الداري",
      book: "صحيح مسلم",
      category: "العقيدة والإيمان",
      explanation:
        "النصيحة ركن عظيم من أركان الدين، وهي إرادة الخير للمنصوح له.",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 5,
      text: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
      translation: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
      narrator: "أنس بن مالك",
      book: "صحيح البخاري",
      category: "الأخلاق والآداب",
      explanation:
        "من كمال الإيمان أن يحب المؤمن لإخوانه من الخير ما يحبه لنفسه.",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 6,
      text: "مَنْ صَلَّى الْبَرْدَيْنِ دَخَلَ الْجَنَّةَ",
      translation: "من صلى البردين دخل الجنة",
      narrator: "أبو موسى الأشعري",
      book: "صحيح البخاري",
      category: "العبادات",
      explanation: "البردان هما: صلاة الفجر وصلاة العصر، وفضلهما عظيم.",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: 7,
      text: "إِنَّ اللَّهَ طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا",
      translation: "إن الله طيب لا يقبل إلا طيبا",
      narrator: "أبو هريرة",
      book: "صحيح مسلم",
      category: "المعاملات",
      explanation: "حث على طيب المكسب والبعد عن الحرام في الرزق.",
      color: "from-amber-500 to-yellow-600",
    },
    {
      id: 8,
      text: "الدُّنْيَا سِجْنُ الْمُؤْمِنِ وَجَنَّةُ الْكَافِرِ",
      translation: "الدنيا سجن المؤمن وجنة الكافر",
      narrator: "أبو هريرة",
      book: "صحيح مسلم",
      category: "الرقائق والزهد",
      explanation:
        "المؤمن يحبس نفسه عن الشهوات المحرمة، والكافر يتمتع بها في الدنيا.",
      color: "from-teal-500 to-cyan-600",
    },
    {
      id: 9,
      text: "مَا مِنْ عَبْدٍ يَقُولُ فِي صَبَاحِ كُلِّ يَوْمٍ وَمَسَاءِ كُلِّ لَيْلَةٍ: بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ ثَلَاثَ مَرَّاتٍ إِلَّا لَمْ يَضُرَّهُ شَيْءٌ",
      translation: "بسم الله الذي لا يضر مع اسمه شيء في الأرض ولا في السماء",
      narrator: "عثمان بن عفان",
      book: "سنن أبي داود",
      category: "الدعاء والذكر",
      explanation: "من أذكار الصباح والمساء للحفظ والوقاية.",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 10,
      text: "تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا: كِتَابَ اللَّهِ وَسُنَّةَ نَبِيِّهِ",
      translation: "تركت فيكم كتاب الله وسنتي",
      narrator: "مالك بن أنس",
      book: "الموطأ",
      category: "العقيدة والإيمان",
      explanation: "التمسك بالقرآن والسنة طريق الهداية والنجاة.",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: 11,
      text: "الطُّهُورُ شَطْرُ الْإِيمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيزَانَ، وَسُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ أَوْ تَمْلَأُ مَا بَيْنَ السَّمَاوَاتِ وَالْأَرْضِ",
      translation: "الطهور شطر الإيمان",
      narrator: "أبو مالك الأشعري",
      book: "صحيح مسلم",
      category: "العبادات",
      explanation: "فضل الطهارة والذكر في الإسلام.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 12,
      text: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
      translation: "من غشنا فليس منا",
      narrator: "أبو هريرة",
      book: "صحيح مسلم",
      category: "المعاملات",
      explanation: "تحريم الغش في البيع والشراء وجميع المعاملات.",
      color: "from-red-500 to-pink-600",
    },
  ];

  const filteredAhadith = ahadith.filter(
    (hadith) =>
      (selectedCategory === "الكل" || hadith.category === selectedCategory) &&
      (selectedBook === "الكل" || hadith.book === selectedBook) &&
      (hadith.text.includes(searchTerm) ||
        hadith.translation.includes(searchTerm) ||
        hadith.narrator.includes(searchTerm)),
  );

  const toggleFavorite = (hadithId) => {
    if (favorites.includes(hadithId)) {
      setFavorites(favorites.filter((id) => id !== hadithId));
    } else {
      setFavorites([...favorites, hadithId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
            <i className="fa-solid fa-book text-4xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            الأحاديث النبوية
          </h1>
          <p className="text-xl text-slate-600">
            مجموعة من الأحاديث النبوية الصحيحة المختارة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث في الأحاديث..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-lg shadow-lg transition-all duration-300"
            />
            <i className="fa-solid fa-search absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl"></i>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-3 text-center">
              التصنيف حسب الموضوع:
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
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
          </div>

          {/* Book Filter */}
          <div>
            <h3 className="text-lg font-bold text-slate-700 mb-3 text-center">
              التصنيف حسب الكتاب:
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {books.map((book) => (
                <button
                  key={book}
                  onClick={() => setSelectedBook(book)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedBook === book
                      ? "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                  style={{
                    color: `${selectedBook === book ? "white" : "#1e84f7"}`
                  }}>
                  {book}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Favorites Count */}
        {favorites.length > 0 && (
          <div className="max-w-3xl mx-auto mb-8 text-center">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 px-6 py-3 rounded-full border border-pink-200">
              <i className="fa-solid fa-heart text-pink-600"></i>
              <span className="text-pink-700 font-semibold">
                لديك {favorites.length} حديث مفضل
              </span>
            </div>
          </div>
        )}

        {/* Ahadith List */}
        <div className="space-y-8">
          {filteredAhadith.map((hadith) => (
            <div
              key={hadith.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden">
              {/* Category Badge */}
              <div className={`bg-gradient-to-r ${hadith.color} p-4`}>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                      {hadith.category}
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-semibold">
                      {hadith.book}
                    </span>
                  </div>
                  <button
                    onClick={() => toggleFavorite(hadith.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      favorites.includes(hadith.id)
                        ? "bg-white text-pink-600 scale-110"
                        : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
                    }`}>
                    <i
                      className={`fa-${
                        favorites.includes(hadith.id) ? "solid" : "regular"
                      } fa-heart text-xl`}></i>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Hadith Text */}
                <div className="mb-6 p-8 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-r-4 border-emerald-500">
                  <p
                    className="text-2xl md:text-3xl leading-loose text-slate-800 text-right mb-4"
                    style={{ fontFamily: "'Amiri', serif" }}>
                    {hadith.text}
                  </p>
                  <div className="flex items-center justify-end gap-2 text-slate-600">
                    <span className="text-sm">
                      رواه: <strong>{hadith.narrator}</strong>
                    </span>
                    <i className="fa-solid fa-user text-emerald-600"></i>
                  </div>
                </div>

                {/* Translation */}
                <div className="mb-6 p-6 bg-blue-50 rounded-xl border-r-4 border-blue-500">
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-language text-blue-600 text-xl mt-1"></i>
                    <div className="flex-1">
                      <h4 className="text-blue-800 font-semibold mb-2">
                        المعنى المختصر:
                      </h4>
                      <p className="text-blue-700 text-lg leading-relaxed">
                        {hadith.translation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-6 bg-amber-50 rounded-xl border-r-4 border-amber-500">
                  <div className="flex items-start gap-3">
                    <i className="fa-solid fa-lightbulb text-amber-600 text-xl mt-1"></i>
                    <div className="flex-1">
                      <h4 className="text-amber-800 font-semibold mb-2">
                        الشرح والفائدة:
                      </h4>
                      <p className="text-amber-700 leading-relaxed">
                        {hadith.explanation}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons
                <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
                  <button className="flex items-center gap-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-700 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    <i className="fa-solid fa-share-nodes"></i>
                    مشاركة
                  </button>
                  <button className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    <i className="fa-solid fa-copy"></i>
                    نسخ النص
                  </button>
                  <button className="flex items-center gap-2 bg-purple-100 hover:bg-purple-200 text-purple-700 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    <i className="fa-solid fa-volume-high"></i>
                    استماع
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAhadith.length === 0 && (
          <div className="text-center py-20">
            <i className="fa-solid fa-search text-6xl text-slate-300 mb-4"></i>
            <p className="text-xl text-slate-500">لم يتم العثور على أحاديث</p>
          </div>
        )}

        {/* Bottom CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <i className="fa-solid fa-book-open text-4xl text-white"></i>
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">
              هل تريد المزيد من الأحاديث؟
            </h3>
            <p className="text-emerald-50 mb-6 text-lg">
              تصفح مكتبتنا الكاملة من الأحاديث النبوية الشريفة
            </p>
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-xl">
              <i className="fa-solid fa-arrow-left ml-2"></i>
              تصفح جميع الأحاديث
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
