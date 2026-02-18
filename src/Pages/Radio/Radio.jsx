import { useState, useRef, useEffect } from "react";

export default function Radio() {
  const [selectedStation, setSelectedStation] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  const radioStations = [
  {
    id: 6,
    name: "إذاعة القرآن الكريم (مصر)",
    description: "البث المباشر للقرآن الكريم من القاهرة",
    url: "https://n04.radiojar.com/8s5u5tpdtwzuv",
    country: "مصر",
    icon: "fa-book-quran",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 7,
    name: "إذاعة القرآن الكريم (السعودية)",
    description: "بث مباشر من الحرمين الشريفين",
    url: "http://live.mp3quran.net:8006/ksa",
    country: "السعودية",
    icon: "fa-mosque",
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 1,
    name: "راديو محمد صديق المنشاوي",
    description: "تلاوات مرتلة للشيخ المنشاوي",
    url: "https://backup.qurango.net/radio/mohammed_siddiq_alminshawi",
    country: "مصر",
    icon: "fa-microphone",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 2,
    name: "راديو عبد الباسط عبد الصمد",
    description: "تلاوات مجودة للشيخ عبد الباسط",
    url: "https://backup.qurango.net/radio/abdulbasit_abdulsamad",
    country: "مصر",
    icon: "fa-headphones",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    name: "راديو محمد جبريل",
    description: "تلاوات خاشعة للشيخ محمد جبريل",
    url: "https://backup.qurango.net/radio/mohammed_jibreel",
    country: "مصر",
    icon: "fa-volume-high",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    name: "راديو ماهر المعيقلي",
    description: "تلاوات من الحرم المكي",
    url: "https://backup.qurango.net/radio/maher",
    country: "السعودية",
    icon: "fa-kaaba",
    color: "from-amber-500 to-yellow-600",
  },
  {
    id: 5,
    name: "راديو مشاري راشد العفاسي",
    description: "تلاوات وأناشيد إسلامية",
    url: "https://backup.qurango.net/radio/mishary_alafasi",
    country: "الكويت",
    icon: "fa-music",
    color: "from-teal-500 to-cyan-600",
  },
  {
    id: 8,
    name: "راديو خالد الجليل",
    description: "تلاوات مؤثرة للشيخ خالد الجليل",
    url: "https://backup.qurango.net/radio/khalid_aljileel",
    country: "السعودية",
    icon: "fa-star-and-crescent",
    color: "from-indigo-500 to-purple-600",
  },
];



  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlay = (station) => {
    if (selectedStation?.id === station.id && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      setSelectedStation(station);
      setIsPlaying(true);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
        }
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
            <i className="fa-solid fa-radio text-4xl text-white"></i>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            الراديو الإسلامي
          </h1>
          <p className="text-xl text-slate-600">
            استمع إلى القرآن الكريم والبرامج الإسلامية مباشرة
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Current Playing Station */}
        {selectedStation && (
          <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-6">
              <div
                className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${selectedStation.color} rounded-full mb-4 shadow-xl animate-pulse`}>
                <i
                  className={`fa-solid ${selectedStation.icon} text-5xl text-white`}></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                {selectedStation.name}
              </h3>
              <p className="text-slate-300">{selectedStation.description}</p>
            </div>

            {/* Player Controls */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <button
                onClick={() => handlePlay(selectedStation)}
                className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 transform hover:scale-110">
                <i
                  className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"} text-3xl`}></i>
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setVolume(volume > 0 ? 0 : 1)}
                className="text-white hover:text-emerald-400 transition-colors">
                <i
                  className={`fa-solid text-2xl ${
                    volume > 0.5
                      ? "fa-volume-up"
                      : volume > 0
                        ? "fa-volume-down"
                        : "fa-volume-mute"
                  }`}></i>
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="w-48 accent-emerald-500"
              />
              <span className="text-white text-sm font-semibold min-w-[3rem]">
                {Math.round(volume * 100)}%
              </span>
            </div>
          </div>
        )}

        {/* Radio Stations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {radioStations.map((station) => (
            <div
              key={station.id}
              onClick={() => handlePlay(station)}
              className={`group cursor-pointer bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border-2 ${
                selectedStation?.id === station.id && isPlaying
                  ? "border-emerald-500 ring-4 ring-emerald-200"
                  : "border-slate-100 hover:border-emerald-300"
              }`}>
              <div className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${station.color} rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 ${
                    selectedStation?.id === station.id && isPlaying
                      ? "animate-pulse"
                      : ""
                  }`}>
                  <i
                    className={`fa-solid ${station.icon} text-3xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-700 transition-colors">
                  {station.name}
                </h3>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  {station.description}
                </p>
                <div className="inline-flex items-center gap-2 text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  <i className="fa-solid fa-globe"></i>
                  {station.country}
                </div>
              </div>

              {/* Play Indicator */}
              {selectedStation?.id === station.id && isPlaying && (
                <div className="mt-4 flex items-center justify-center gap-1">
                  <div
                    className="w-1 h-4 bg-emerald-500 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}></div>
                  <div
                    className="w-1 h-6 bg-emerald-500 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}></div>
                  <div
                    className="w-1 h-8 bg-emerald-500 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}></div>
                  <div
                    className="w-1 h-6 bg-emerald-500 rounded-full animate-bounce"
                    style={{ animationDelay: "450ms" }}></div>
                  <div
                    className="w-1 h-4 bg-emerald-500 rounded-full animate-bounce"
                    style={{ animationDelay: "600ms" }}></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Audio Element */}
        <audio
          ref={audioRef}
          src={selectedStation?.url}
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </div>
  );
}
