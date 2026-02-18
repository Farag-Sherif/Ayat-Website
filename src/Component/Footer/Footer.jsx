import { Link } from "react-router-dom";

export default function Footer() {
  const quickLinks = [
    { to: "/", label: "الصفحة الرئيسية" },
    { to: "/Prayer-times", label: "أوقات الصلاة" },
    { to: "/audio-quran", label: "تلاوة قرآنية" },
    { to: "/azkar", label: "أذكار" },
    { to: "/quran", label: "القرآن الكريم" },
  ];

const books = [
  {
    to: "https://waqfeya.net/book.php?bid=9756",
    label: "المختصر في التفسير",
  },
  {
    to: "https://waqfeya.net/book.php?bid=1309",
    label: "تفسير الجلالين",
  },
  {
    to: "https://waqfeya.net/book.php?bid=1015",
    label: "تفسير ابن كثير",
  },
  {
    to: "https://waqfeya.net/book.php?bid=1212",
    label: "صحيح البخاري",
  },
  {
    to: "https://waqfeya.net/book.php?bid=1205",
    label: "صحيح مسلم",
  },
  {
    to: "https://waqfeya.net/book.php?bid=1240",
    label: "سنن الترمذي",
  },
];


const additionalLinks = [
  {
    to: "https://binbaz.org.sa/fatwas",
    label: "دليل السنة النبوية",
  },
  {
    to: "https://www.haj.gov.sa",
    label: "دليل مكة المكرمة",
  },
  {
    to: "https://kids.islamweb.net",
    label: "دليل الأطفال المسلمين",
  },
  {
    to: "https://quran.com",
    label: "دليل القرآن الكريم",
  },
  {
    to: "https://www.islamweb.net/ar/fatawa",
    label: "دليل الفقه الإسلامي",
  },
];

  const socialLinks = [
    {
      to: "https://www.facebook.com/farag.sherif.3?locale=ar_AR",
      icon: "fa-brands fa-facebook",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      to: "https://github.com/Farag-Sherif",
      icon: "fa-brands fa-linkedin",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      to: "mailto:farag.sherif500@gmail.com",
      icon: "fa-solid fa-envelope",
      label: "Gmail",
      color: "hover:bg-red-600",
    },
    {
      to: "https://wa.me/201032195380",
      icon: "fa-brands fa-whatsapp",
      label: "WhatsApp",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-4">
              أيات
            </h2>
            <p className="text-slate-300 leading-relaxed">
              أيات هو موقع يهتم بنشر الثقافة الإسلامية من خلال مقالات
              ومواضيع متنوعة، يهدف إلى تعزيز الفهم الصحيح للإسلام وتقديم محتوى
              هادف ومفيد للزوار.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-link text-emerald-400"></i>
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group">
                    <i className="fa-solid fa-chevron-left text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Islamic Books */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-book text-emerald-400"></i>
              كتب إسلامية
            </h3>
            <ul className="space-y-3">
              {books.map((book, index) => (
                <li key={index}>
                  <Link
                    to={book.to}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group">
                    <i className="fa-solid fa-chevron-left text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    {book.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <i className="fa-solid fa-globe text-emerald-400"></i>
              روابط إضافية
            </h3>
            <ul className="space-y-3">
              {additionalLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2 group">
                    <i className="fa-solid fa-chevron-left text-xs opacity-0 group-hover:opacity-100 transition-opacity"></i>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 my-8"></div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">تواصل معنا</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <Link
                key={index}
                to={social.to}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-slate-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-xl ${social.color}`}
                aria-label={social.label}>
                <i className={`${social.icon} text-2xl`}></i>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
            <p className="text-center md:text-right">
              جميع الحقوق محفوظة © 2025 لكل مسلم
            </p>
            <p className="text-center md:text-left">
              تطوير:{" "}
              <Link
                to="https://github.com/Farag-Sherif"
                target="_blank"
                className="text-emerald-400 hover:text-emerald-300 transition-colors font-semibold">
                Farag Mohammed Sherif
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500"></div>
    </footer>
  );
}
