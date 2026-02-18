import { useState } from "react";

export default function QuestionsAnswers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const categories = [
    "الكل",
    "العقيدة",
    "العبادات",
    "المعاملات",
    "الأخلاق",
    "الأحكام",
    "السيرة النبوية",
  ];

  const questions = [
    {
      id: 1,
      category: "العبادات",
      question: "ما هي أركان الإسلام الخمسة؟",
      answer:
        "أركان الإسلام الخمسة هي: 1) الشهادتان (شهادة أن لا إله إلا الله وأن محمداً رسول الله) 2) إقامة الصلاة 3) إيتاء الزكاة 4) صوم رمضان 5) حج البيت لمن استطاع إليه سبيلاً.",
      icon: "fa-mosque",
    },
    {
      id: 2,
      category: "العقيدة",
      question: "ما هي أركان الإيمان الستة؟",
      answer:
        "أركان الإيمان الستة هي: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره.",
      icon: "fa-star-and-crescent",
    },
    {
      id: 3,
      category: "العبادات",
      question: "كيف أتوضأ للصلاة؟",
      answer:
        "الوضوء يكون بالترتيب: 1) النية 2) غسل الكفين ثلاثاً 3) المضمضة والاستنشاق ثلاثاً 4) غسل الوجه ثلاثاً 5) غسل اليدين إلى المرفقين ثلاثاً 6) مسح الرأس مرة واحدة 7) مسح الأذنين 8) غسل القدمين إلى الكعبين ثلاثاً.",
      icon: "fa-hand-sparkles",
    },
    {
      id: 4,
      category: "الأحكام",
      question: "متى تجب الزكاة؟",
      answer:
        "تجب الزكاة على كل مسلم بالغ عاقل يملك النصاب (القدر المحدد من المال) وحال عليه الحول (مضى عليه عام كامل). والزكاة هي 2.5% من المال المدخر.",
      icon: "fa-hand-holding-heart",
    },
    {
      id: 5,
      category: "العبادات",
      question: "ما هي شروط صحة الصلاة؟",
      answer:
        "شروط صحة الصلاة هي: الطهارة من الحدث والنجس، ستر العورة، استقبال القبلة، دخول الوقت، النية.",
      icon: "fa-person-praying",
    },
    {
      id: 6,
      category: "الأخلاق",
      question: "ما هي أهمية الصدق في الإسلام؟",
      answer:
        "الصدق من أعظم الأخلاق الإسلامية، وهو طريق البر الذي يهدي إلى الجنة. قال النبي صلى الله عليه وسلم: 'إن الصدق يهدي إلى البر وإن البر يهدي إلى الجنة'.",
      icon: "fa-heart",
    },
    {
      id: 7,
      category: "المعاملات",
      question: "ما حكم الربا في الإسلام؟",
      answer:
        "الربا محرم تحريماً قطعياً في الإسلام، وهو من كبائر الذنوب. قال الله تعالى: 'وأحل الله البيع وحرم الربا'.",
      icon: "fa-scale-balanced",
    },
    {
      id: 8,
      category: "السيرة النبوية",
      question: "متى ولد النبي محمد صلى الله عليه وسلم؟",
      answer:
        "ولد النبي محمد صلى الله عليه وسلم في عام الفيل، في شهر ربيع الأول، يوم الاثنين، الموافق 12 ربيع الأول حسب أشهر الأقوال.",
      icon: "fa-book",
    },
    {
      id: 9,
      category: "العبادات",
      question: "ما هي أوقات الصلوات الخمس؟",
      answer:
        "الفجر: من طلوع الفجر الصادق إلى طلوع الشمس. الظهر: من زوال الشمس إلى أن يصير ظل كل شيء مثله. العصر: من نهاية وقت الظهر إلى اصفرار الشمس. المغرب: من غروب الشمس إلى مغيب الشفق الأحمر. العشاء: من مغيب الشفق الأحمر إلى نصف الليل.",
      icon: "fa-clock",
    },
    {
      id: 10,
      category: "الأخلاق",
      question: "ما هي حقوق الوالدين في الإسلام؟",
      answer:
        "من حقوق الوالدين: طاعتهما في غير معصية الله، الإحسان إليهما، الإنفاق عليهما عند الحاجة، خفض الجناح لهما، الدعاء لهما، وصلة أرحامهما بعد موتهما.",
      icon: "fa-users",
    },
  ];

  const filteredQuestions = questions.filter(
    (q) =>
      (selectedCategory === "الكل" || q.category === selectedCategory) &&
      (q.question.includes(searchTerm) || q.answer.includes(searchTerm)),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
            <i className="fa-solid fa-circle-question text-4xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            أسئلة وأجوبة
          </h1>
          <p className="text-xl text-slate-600">
            إجابات على الأسئلة الشائعة في الدين الإسلامي
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن سؤال..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-lg shadow-lg transition-all duration-300"
            />
            <i className="fa-solid fa-search absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl"></i>
          </div>
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

        {/* Questions List */}
        <div className="space-y-4">
          {filteredQuestions.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden">
              <button
                onClick={() =>
                  setExpandedQuestion(
                    expandedQuestion === item.id ? null : item.id,
                  )
                }
                className="w-full p-6 flex items-start justify-between gap-4 text-right hover:bg-slate-50 transition-colors">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md">
                    <i
                      className={`fa-solid ${item.icon} text-2xl text-white`}></i>
                  </div>
                  <div className="flex-1 text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-semibold">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800">
                      {item.question}
                    </h3>
                  </div>
                </div>
                <i
                  className={`fa-solid fa-chevron-down text-slate-400 transition-transform duration-300 ${
                    expandedQuestion === item.id ? "rotate-180" : ""
                  }`}></i>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expandedQuestion === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}>
                <div className="p-6 pt-0 pr-24 bg-gradient-to-br from-emerald-50 to-teal-50">
                  <div className="bg-white rounded-xl p-6 shadow-inner">
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-20">
            <i className="fa-solid fa-search text-6xl text-slate-300 mb-4"></i>
            <p className="text-xl text-slate-500">لم يتم العثور على نتائج</p>
          </div>
        )}

        {/* Ask Question CTA */}
        {/* <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              لديك سؤال آخر؟
            </h3>
            <p className="text-emerald-50 mb-6">
              يمكنك التواصل معنا لطرح أسئلتك الإسلامية
            </p>
            <button className="bg-white text-emerald-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all duration-300 shadow-xl">
              <i className="fa-solid fa-paper-plane ml-2"></i>
              أرسل سؤالك
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}
