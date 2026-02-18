import { useEffect, useState } from "react";
import axios from "axios";
import { APIs } from "../../Component/APIs/APIs";
import Loading from "../../Component/Loading/Loading";

export default function PrayerTimes() {
  const [loading, setLoading] = useState(false);
  const [adanData, setAdanData] = useState(null);
  const [city, setCity] = useState("Cairo");
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const [nextPrayer, setNextPrayer] = useState("Fajr");

  const egyptianCities = [
    { value: "Cairo", label: "القاهرة" },
    { value: "Alexandria", label: "الإسكندرية" },
    { value: "Giza", label: "الجيزة" },
    { value: "Luxor", label: "الأقصر" },
    { value: "Aswan", label: "أسوان" },
    { value: "Dakahlia", label: "الدقهلية" },
    { value: "Beheira", label: "البحيرة" },
    { value: "Sharqia", label: "الشرقية" },
    { value: "Monufia", label: "المنوفية" },
    { value: "Qalyubia", label: "القليوبية" },
    { value: "Minya", label: "المنيا" },
    { value: "Sohag", label: "سوهاج" },
    { value: "Qena", label: "قنا" },
    { value: "Assiut", label: "أسيوط" },
    { value: "Faiyum", label: "الفيوم" },
  ];

  useEffect(() => {
    const fetchAdan = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${APIs.adan + city}&method=5`);
        setAdanData(response.data.data);
      } catch (error) {
        console.error("Failed to fetch prayer times:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdan();
  }, [city]);

  const getNextPrayerTime = (timings) => {
    const now = new Date();
    const currentTime =
      now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();

    const prayers = [
      { name: "Fajr", time: timings.Fajr },
      { name: "Dhuhr", time: timings.Dhuhr },
      { name: "Asr", time: timings.Asr },
      { name: "Maghrib", time: timings.Maghrib },
      { name: "Isha", time: timings.Isha },
    ];

    let previousPrayerTime = null;
    let nextPrayer = { name: "Fajr", time: timings.Fajr };
    let secondsUntilNext = 0;
    let totalInterval = 0;

    for (let i = 0; i < prayers.length; i++) {
      const [hours, minutes] = prayers[i].time.split(":").map(Number);
      const prayerTimeInSeconds = hours * 3600 + minutes * 60;

      if (prayerTimeInSeconds > currentTime) {
        nextPrayer = prayers[i];
        secondsUntilNext = prayerTimeInSeconds - currentTime;

        if (i === 0) {
          const [ishaHours, ishaMinutes] = timings.Isha.split(":").map(Number);
          previousPrayerTime = ishaHours * 3600 + ishaMinutes * 60 - 86400;
        } else {
          const [prevHours, prevMinutes] = prayers[i - 1].time
            .split(":")
            .map(Number);
          previousPrayerTime = prevHours * 3600 + prevMinutes * 60;
        }
        totalInterval = prayerTimeInSeconds - previousPrayerTime;
        break;
      }
    }

    if (!secondsUntilNext) {
      const [fajrHours, fajrMinutes] = timings.Fajr.split(":").map(Number);
      const fajrTimeInSeconds = fajrHours * 3600 + fajrMinutes * 60 + 86400;
      secondsUntilNext = fajrTimeInSeconds - currentTime;
      const [ishaHours, ishaMinutes] = timings.Isha.split(":").map(Number);
      previousPrayerTime = ishaHours * 3600 + ishaMinutes * 60;
      totalInterval = fajrTimeInSeconds - previousPrayerTime;
      nextPrayer = { name: "Fajr", time: timings.Fajr };
    }

    const elapsedTime = totalInterval - secondsUntilNext;
    const initialProgress = (elapsedTime / totalInterval) * 100;

    return {
      name: nextPrayer.name,
      secondsUntil: secondsUntilNext,
      totalInterval,
      initialProgress,
    };
  };

  useEffect(() => {
    if (adanData?.timings) {
      const { name, secondsUntil, totalInterval, initialProgress } =
        getNextPrayerTime(adanData.timings);
      setNextPrayer(name);
      setTimeLeft(secondsUntil);
      setProgress(initialProgress);

      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(timer);
            return 0;
          }
          const newTimeLeft = prevTime - 1;
          const elapsedTime = totalInterval - newTimeLeft;
          const newProgress = (elapsedTime / totalInterval) * 100;
          setProgress(newProgress);
          return newTimeLeft;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [adanData]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const gregorianDate = adanData?.date.gregorian.date || "16-07-2025";
  const hijriDate = adanData?.date.hijri.date || "21-01-1447";
  const hijriDay = adanData?.date.hijri.weekday.ar || "الأربعاء";

  const prayerTimes = [
    { name: "الفجر", time: adanData?.timings.Fajr, icon: "fa-cloud-sun" },
    { name: "الشروق", time: adanData?.timings.Sunrise, icon: "fa-sun" },
    { name: "الظهر", time: adanData?.timings.Dhuhr, icon: "fa-sun" },
    { name: "العصر", time: adanData?.timings.Asr, icon: "fa-cloud-sun" },
    { name: "المغرب", time: adanData?.timings.Maghrib, icon: "fa-moon" },
    { name: "العشاء", time: adanData?.timings.Isha, icon: "fa-star" },
  ];

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-12 px-4 pt-30">
          <div className="container mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6 shadow-xl">
                <i className="fa-solid fa-mosque text-4xl text-white"></i>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
                أوقات الصلاة اليوم في مصر
              </h2>
              <p
                className="text-xl font-bold text-slate-600"
                style={{ fontFamily: "Amiri, serif" }}>
                {`${hijriDay} ${hijriDate} هـ / ${gregorianDate} م`}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Circular Timer */}
            <div className="max-w-md mx-auto mb-16">
              <div className="relative">
                {/* Progress Circle */}
                <svg className="w-80 h-80 mx-auto transform -rotate-90">
                  <circle
                    cx="160"
                    cy="160"
                    r="140"
                    stroke="#e2e8f0"
                    strokeWidth="12"
                    fill="none"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="140"
                    stroke="url(#gradient)"
                    strokeWidth="12"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 140}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 140 * (1 - progress / 100)
                    }`}
                    strokeLinecap="round"
                    className="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient
                      id="gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#0d9488" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Timer Display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-6xl font-bold text-slate-800 mb-2">
                    {String(hours).padStart(2, "0")}:
                    {String(minutes).padStart(2, "0")}:
                    {String(seconds).padStart(2, "0")}
                  </div>
                  <p className="text-lg text-slate-600 text-center">
                    الوقت المتبقي لصلاة
                  </p>
                  <p className="text-2xl font-bold text-emerald-600 mt-2">
                    {APIs.fiveDailyPrayers[nextPrayer]}
                  </p>
                </div>
              </div>
            </div>

            {/* City Selector */}
            <div className="max-w-md mx-auto mb-12">
              <label className="block text-lg font-semibold text-slate-700 mb-3 text-center">
                اختر المدينة:
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-lg shadow-lg transition-all duration-300 bg-white cursor-pointer">
                {egyptianCities.map((cityOption) => (
                  <option key={cityOption.value} value={cityOption.value}>
                    {cityOption.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Prayer Times Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {prayerTimes.map((prayer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-emerald-300 group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <i
                          className={`fa-solid ${prayer.icon} text-2xl text-white`}></i>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                          {prayer.name}
                        </h4>
                        <p className="text-2xl font-bold text-emerald-600 mt-1">
                          {prayer.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
