import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { APIs } from "../../Component/APIs/APIs";
import tafserAlmokhtasar from "../../Image/books/tafserAlmokhtasar.jpeg";
import sahihMoslame from "../../Image/books/sahihMoslame.jpeg";
import sahihAlBokhary from "../../Image/books/sahihAlBokhary.jpeg";
import tafserAbnKather from "../../Image/books/tafserAbnKather.jpeg";
import tafserAlrahmanAlkareem from "../../Image/books/tafserAlrahmanAlkareem.jpeg";
import ahadisAlgameAlsagher from "../../Image/books/ahadisAlgameAlsagher.jpeg";

export default function Home() {
  const [scholars, setScholars] = useState([]);

  useEffect(() => {
    const fetchScholars = async () => {
      const data = await axios.get(APIs.reciters);
      setScholars(
        data.data.reciters.filter((scholar) =>
          APIs.famousArabReciters.includes(scholar.name),
        ),
      );
    };
    fetchScholars();
  }, []);

const books = [
  {
    title: "المختصر في تفسير القرآن الكريم",
    image: tafserAlmokhtasar,
    url: "https://waqfeya.net/books/%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D8%B5%D8%B1-%D9%81%D9%8A-%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%A7%D9%84%D9%82%D8%B1%D8%A2%D9%86-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85-032e628463bd435a89284e0707525eb6",
  },
  {
    title: "تفسير الرحمن الكريم",
    image: tafserAlrahmanAlkareem,
    url: "https://waqfeya.net/books/%D8%AA%D9%8A%D8%B3%D9%8A%D8%B1-%D8%A7%D9%84%D9%83%D8%B1%D9%8A%D9%85-%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86-%D9%81%D9%8A-%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D9%83%D9%84%D8%A7%D9%85-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%86--%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%A7%D9%84%D8%B3%D8%B9%D8%AF%D9%8A-5c4921e3a8744317a0bd19af5567d4e1",
  },
  {
    title: "تفسير ابن كثير",
    image: tafserAbnKather,
    url: "https://waqfeya.net/books/%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%A7%D8%A8%D9%86-%D9%83%D8%AB%D9%8A%D8%B1-%D8%B7-%D8%A7%D8%A8%D9%86-%D8%AD%D8%B2%D9%85-112769b0b4b045e2813ca8a93eef866a",
  },
  {
    title: "صحيح مسلم",
    image: sahihMoslame,
    url: "https://waqfeya.net/books/%D8%B5%D8%AD%D9%8A%D8%AD-%D9%85%D8%B3%D9%84%D9%85-%D9%88%D8%B5%D9%8A%D8%A7%D9%86%D8%A9-%D8%B5%D8%AD%D9%8A%D8%AD-%D9%85%D8%B3%D9%84%D9%85-%D9%88%D8%B9%D9%84%D9%84-%D8%A3%D8%AD%D8%A7%D8%AF%D9%8A%D8%AB-%D9%81%D9%8A-%D9%83%D8%AA%D8%A7%D8%A8-%D8%A7%D9%84%D8%B5%D8%AD%D9%8A%D8%AD-%D8%B7-%D8%A7%D9%84%D8%A3%D9%81%D9%83%D8%A7%D8%B1-84dd08a0c46f471ea58bda80fe84f047",
  },
  {
    title: "صحيح البخاري",
    image: sahihAlBokhary,
    url: "https://waqfeya.net/books/%D8%B4%D8%B1%D8%AD-%D8%B5%D8%AD%D9%8A%D8%AD-%D8%A7%D9%84%D8%A8%D8%AE%D8%A7%D8%B1%D9%8A-1650869e3e99418ea16e8de3fe998c68",
  },
  {
    title: "احاديث الجامع الصغير",
    image: ahadisAlgameAlsagher,
    url: "https://waqfeya.net/books/%D8%AA%D8%A8%D9%88%D9%8A%D8%A8-%D9%88%D8%AA%D8%B1%D8%AA%D9%8A%D8%A8-%D8%A3%D8%AD%D8%A7%D8%AF%D9%8A%D8%AB-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9-%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1-%D9%88%D8%B2%D9%8A%D8%A7%D8%AF%D8%AA%D9%87-%D8%B9%D9%84%D9%89-%D8%A3%D8%A8%D9%88%D8%A7%D8%A8-%D8%A7%D9%84%D9%81%D9%82%D9%87-%D9%88%D9%8A%D9%84%D9%8A%D9%87-%D9%85%D8%B9%D8%AC%D9%85-%D8%A3%D9%84%D9%81%D8%A7%D8%B8-%D8%A3%D8%AD%D8%A7%D8%AF%D9%8A%D8%AB-%D8%B5%D8%AD%D9%8A%D8%AD-%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9-%D8%A7%D9%84%D8%B5%D8%BA%D9%8A%D8%B1-%D9%88%D8%B2%D9%8A%D8%A7%D8%AF%D8%AA%D9%87-bc8aef5cadc54012a6d32936fa091558",
  },
];


  const apps = [
    {
      name: "تطبيق آيات",
      icon: "fa-book-quran",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.quran.ayat",
      iosUrl: "https://apps.apple.com/app/id1234567890",
    },
    {
      name: "تطبيق ختمة",
      icon: "fa-check-circle",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.khatmah.app",
      iosUrl: "https://apps.apple.com/app/id1234567891",
    },
    {
      name: "تطبيق القرآن الكريم",
      icon: "fa-mosque",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.quran.kareem",
      iosUrl: "https://apps.apple.com/app/id1234567892",
    },
    {
      name: "تطبيق مصحف قطر",
      icon: "fa-book-open",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.qatar.mushaf",
      iosUrl: "https://apps.apple.com/app/id1234567893",
    },
    {
      name: "تطبيق اذكاري",
      icon: "fa-hands-praying",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.azkari.app",
      iosUrl: "https://apps.apple.com/app/id1234567894",
    },
    {
      name: "تطبيق المؤذن",
      icon: "fa-volume-high",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.muezzin.app",
      iosUrl: "https://apps.apple.com/app/id1234567895",
    },
    {
      name: "تطبيق حقيبة المسلم",
      icon: "fa-suitcase",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.muslim.bag",
      iosUrl: "https://apps.apple.com/app/id1234567896",
    },
    {
      name: "تطبيق صلاتك",
      icon: "fa-person-praying",
      androidUrl:
        "https://play.google.com/store/apps/details?id=com.salatk.app",
      iosUrl: "https://apps.apple.com/app/id1234567897",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700">
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            {/* Arabic Calligraphy Icon */}
            <div className="mb-6 flex justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                <i className="fa-solid fa-book-quran text-4xl"></i>
              </div>
            </div>

            <p className="text-lg md:text-xl mb-4 text-emerald-50 font-medium">
              قراءات يومية واستماع القرآن الكريم وقراءة الكتب الدينية
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              امزج الاسترخاء والمعرفة الإسلامية بسهولة!
            </h1>

            <p className="text-lg md:text-xl mb-10 text-emerald-50 max-w-3xl mx-auto leading-relaxed">
              استكشف قراءة واستماع القرآن الكريم إلى جانب الكتب الدينية المميزة،
              حيث نوفر محتوى تعليميًا غنيًا وتلاوات مؤثرة لتعزيز إيمانك ورحلتك
              الروحية.
            </p>

            <Link
              to="/audio-quran"
              className="inline-flex items-center gap-3 bg-white text-emerald-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              <i className="fa-solid fa-play"></i>
              <span>الاستماع الآن</span>
            </Link>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#f8fafc"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Scholars Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <i className="fa-solid fa-microphone text-emerald-600 text-2xl"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنْصِتُوا
            </h2>
            <p className="text-xl text-slate-600">
              للاستماع وتحميل أجمل أصوات القراء
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Scholars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {scholars &&
              scholars.map((scholar) => (
                <Link
                  to={`/audio-quran/${encodeURIComponent(scholar.name)}`}
                  key={scholar.id}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-emerald-300 overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <i className="fa-solid fa-play text-white text-xl"></i>
                    </div>
                    <span className="text-lg font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {scholar.name}
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Books Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
              <i className="fa-solid fa-book text-amber-600 text-2xl"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              المكتبة الإسلامية
            </h2>
            <p className="text-xl text-slate-600">
              مجموعة مميزة من الكتب الدينية
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-amber-300">
                <div className="flex items-start">
                  {/* Book Image */}
                  <div className="relative w-32 h-44 flex-shrink-0 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                      style={{ backgroundImage: `url(${book.image})` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Book Info */}
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4 leading-relaxed group-hover:text-amber-600 transition-colors">
                      {book.title}
                    </h3>
                    <Link
                      to={book.url}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 transition-colors group/link">
                      <i className="fa-solid fa-download"></i>
                      <span>حمل الآن PDF</span>
                      <i className="fa-solid fa-arrow-left transform group-hover/link:translate-x-1 transition-transform"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <i className="fa-solid fa-mobile-screen text-blue-600 text-2xl"></i>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              التطبيقات الإسلامية
            </h2>
            <p className="text-xl text-slate-600">
              مجموعة متكاملة من التطبيقات الدينية
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {apps.map((app, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-300 text-center">
                {/* App Icon */}
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i className={`fa-solid ${app.icon} text-white text-3xl`}></i>
                </div>

                {/* App Name */}
                <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-blue-600 transition-colors">
                  {app.name}
                </h3>

                {/* Download Links */}
                <div className="flex items-center justify-center gap-4">
                  <Link
                    to={app.androidUrl}
                    target="_blank"
                    className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:text-white transition-all duration-300 group/android">
                    <i className="fa-brands fa-android text-xl"></i>
                  </Link>
                  <Link
                    to={app.iosUrl}
                    target="_blank"
                    className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-slate-700 hover:to-slate-900 hover:text-white transition-all duration-300 group/apple">
                    <i className="fa-brands fa-apple text-xl"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ابدأ رحلتك الروحانية اليوم
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            انضم إلى آلاف المستخدمين الذين يستفيدون من منصتنا يوميًا
          </p>
          <Link
            to="/audio-quran"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <i className="fa-solid fa-play"></i>
            <span>ابدأ الآن</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
