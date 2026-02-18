import { useState } from "react";

export default function Azkar() {
  const [selectedCategory, setSelectedCategory] = useState("الصباح");
  const [completedAzkar, setCompletedAzkar] = useState([]);

  const categories = [
    {
      id: "الصباح",
      name: "أذكار الصباح",
      icon: "fa-sun",
      color: "from-amber-500 to-orange-600",
    },
    {
      id: "المساء",
      name: "أذكار المساء",
      icon: "fa-moon",
      color: "from-indigo-500 to-purple-600",
    },
    {
      id: "النوم",
      name: "أذكار النوم",
      icon: "fa-bed",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: "الاستيقاظ",
      name: "أذكار الاستيقاظ",
      icon: "fa-sun-plant-wilt",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "الصلاة",
      name: "أذكار بعد الصلاة",
      icon: "fa-mosque",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "متنوعة",
      name: "أذكار متنوعة",
      icon: "fa-book-open",
      color: "from-pink-500 to-rose-600",
    },
  ];

  const azkarData = {
    الصباح: [
      {
        id: 1,
        text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        count: 1,
        benefit: "من قالها حين يصبح أعتقه الله من النار",
      },
      {
        id: 2,
        text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
        count: 1,
        benefit: "ذكر عظيم للحفظ والبركة",
      },
      {
        id: 3,
        text: "أَصْبَحْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
        count: 1,
        benefit: "تجديد للعهد مع الله على الإسلام",
      },
      {
        id: 4,
        text: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
        count: 100,
        benefit: "من قالها مائة مرة حطت خطاياه وإن كانت مثل زبد البحر",
      },
    ],
    المساء: [
      {
        id: 1,
        text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        count: 1,
        benefit: "من قالها حين يمسي أعتقه الله من النار",
      },
      {
        id: 2,
        text: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
        count: 1,
        benefit: "ذكر عظيم للحفظ والبركة",
      },
      {
        id: 3,
        text: "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ، وَعَلَى كَلِمَةِ الْإِخْلَاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
        count: 1,
        benefit: "تجديد للعهد مع الله على الإسلام",
      },
    ],
    النوم: [
      {
        id: 1,
        text: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
        count: 1,
        benefit: "يقال عند النوم",
      },
      {
        id: 2,
        text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
        count: 3,
        benefit: "يقال عند وضع اليد تحت الخد الأيمن",
      },
      {
        id: 3,
        text: "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ",
        count: 1,
        benefit: "آخر آيتين من سورة البقرة، من قرأهما في ليلة كفتاه",
      },
    ],
    الاستيقاظ: [
      {
        id: 1,
        text: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
        count: 1,
        benefit: "يقال عند الاستيقاظ من النوم",
      },
    ],
    الصلاة: [
      {
        id: 1,
        text: "أَسْتَغْفِرُ اللَّهَ",
        count: 3,
        benefit: "يقال بعد السلام من الصلاة",
      },
      {
        id: 2,
        text: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
        count: 1,
        benefit: "يقال بعد السلام من الصلاة",
      },
      {
        id: 3,
        text: "سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَاللَّهُ أَكْبَرُ",
        count: 33,
        benefit: "التسبيح والتحميد والتكبير بعد كل صلاة",
      },
    ],
    متنوعة: [
      {
        id: 1,
        text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
        count: 10,
        benefit: "من قالها عشر مرات كانت له عدل أربع رقاب",
      },
      {
        id: 2,
        text: "سُبْحَانَ اللَّهِ الْعَظِيمِ وَبِحَمْدِهِ",
        count: 1,
        benefit: "غُرست له نخلة في الجنة",
      },
    ],
  };

  const selectedAzkar = azkarData[selectedCategory] || [];
  const currentCategory = categories.find((cat) => cat.id === selectedCategory);

  const toggleComplete = (zikrId) => {
    const key = `${selectedCategory}-${zikrId}`;
    if (completedAzkar.includes(key)) {
      setCompletedAzkar(completedAzkar.filter((id) => id !== key));
    } else {
      setCompletedAzkar([...completedAzkar, key]);
    }
  };

  const completedCount = selectedAzkar.filter((zikr) =>
    completedAzkar.includes(`${selectedCategory}-${zikr.id}`),
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
            <i className="fa-solid fa-book-open text-4xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            الأذكار اليومية
          </h1>
          <p className="text-xl text-slate-600">
            أذكار الصباح والمساء وغيرها من الأذكار المأثورة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group p-6 rounded-2xl transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-br ${category.color} text-white shadow-xl scale-105`
                  : "bg-white text-slate-700 hover:shadow-lg border border-slate-200"
              }`}>
              <i
                className={`fa-solid ${category.icon} text-4xl mb-3 ${
                  selectedCategory === category.id
                    ? "text-white"
                    : "text-slate-400 group-hover:text-emerald-600"
                  }`}></i>
              <h3 className="text-sm font-bold text-orange-400"
                style={{ color: selectedCategory === category.id && "white" }}>{category.name}</h3>
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        {selectedAzkar.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-700 font-semibold">
                  التقدم: {completedCount} / {selectedAzkar.length}
                </span>
                <span className="text-emerald-600 font-bold">
                  {Math.round((completedCount / selectedAzkar.length) * 100)}%
                </span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-500"
                  style={{
                    width: `${(completedCount / selectedAzkar.length) * 100}%`,
                  }}></div>
              </div>
            </div>
          </div>
        )}

        {/* Azkar List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {selectedAzkar.map((zikr) => {
            const isCompleted = completedAzkar.includes(
              `${selectedCategory}-${zikr.id}`,
            );
            return (
              <div
                key={zikr.id}
                className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 overflow-hidden ${
                  isCompleted
                    ? "border-emerald-500 bg-gradient-to-br from-emerald-50 to-teal-50"
                    : "border-slate-100"
                }`}>
                <div className="p-8">
                  {/* Zikr Text */}
                  <div className="mb-6 p-6 bg-white rounded-xl shadow-inner">
                    <p
                      className="text-2xl md:text-3xl leading-loose text-slate-800 text-center"
                      style={{ fontFamily: "'Amiri', serif" }}>
                      {zikr.text}
                    </p>
                  </div>

                  {/* Count Badge */}
                  <div className="flex items-center justify-center mb-4">
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${currentCategory.color} px-6 py-3 rounded-full shadow-lg`}>
                      <i className="fa-solid fa-repeat text-white"></i>
                      <span className="text-white font-bold">
                        {zikr.count} {zikr.count === 1 ? "مرة" : "مرات"}
                      </span>
                    </div>
                  </div>

                  {/* Benefit */}
                  <div className="mb-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex items-start gap-3">
                      <i className="fa-solid fa-star text-amber-600 text-xl mt-1"></i>
                      <div>
                        <h4 className="text-amber-800 font-semibold mb-1">
                          الفضل:
                        </h4>
                        <p className="text-amber-700 leading-relaxed">
                          {zikr.benefit}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Complete Button */}
                  <button
                    onClick={() => toggleComplete(zikr.id)}
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                      isCompleted
                        ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                    style={{ color: !isCompleted && "#00b480" }}>
                    {isCompleted ? (
                      <span className="flex items-center justify-center gap-2">
                        <i className="fa-solid fa-check-circle"></i>
                        تم إكمال الذكر
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <i className="fa-regular fa-circle"></i>
                        وضع علامة كمكتمل
                      </span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Completion Celebration */}
        {completedCount === selectedAzkar.length &&
          selectedAzkar.length > 0 && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-3xl p-8 max-w-md text-center shadow-2xl animate-bounce">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-check text-5xl text-white"></i>
                </div>
                <h2 className="text-3xl font-bold text-slate-800 mb-4">
                  بارك الله فيك!
                </h2>
                <p className="text-xl text-slate-600 mb-6">
                  لقد أكملت جميع الأذكار
                </p>
                <button
                  onClick={() => setCompletedAzkar([])}
                  className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-xl">
                  إعادة البدء
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
