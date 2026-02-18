import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { APIs } from "../../../Component/APIs/APIs";
import Loading from "../../../Component/Loading/Loading";

export default function Audio() {
  const [loading, setLoading] = useState(false);
  const [surahs, setSurahs] = useState([]);
  const [audioSrc, setAudioSrc] = useState("");
  const [surahNumber, setSurahNumber] = useState(0);
  const [progress, setProgress] = useState(0);
  const [search, setSearch] = useState("");
  const location = useLocation();
  const reciter = decodeURIComponent(location.pathname.split("/")[2]);
  const [audioServer, setAudioServer] = useState("");
  const [playAudio, setPlayAudio] = useState(false);
  const [currentTime, setCurrentTime] = useState("00:00:00");
  const [duration, setDuration] = useState("00:00:00");
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const fetchReciters = async () => {
      setLoading(true);
      try {
        const reciterData = await axios.get(APIs.reciters);
        const filteredReciters = reciterData.data.reciters.filter((reader) =>
          reader.name.includes(reciter),
        );
        if (filteredReciters.length > 0) {
          console.log(filteredReciters);
          const audioFile = filteredReciters[0].moshaf[0].server;
          setAudioServer(audioFile);
          const suwerData = await axios.get(APIs.surahs);
          const filteredSurahs = suwerData.data.suwar;
          setSurahs(filteredSurahs);
          setAudioSrc(filteredReciters[0].moshaf[0].server);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
        setPlayAudio(false);
      }
    };
    fetchReciters();
  }, [reciter , audioServer]);

  function handlePlayingAudio(id = 1) {
    console.log(id)
    if (id < 1 || id > surahs.length) {
      setPlayAudio(false);
      if (audioRef.current) audioRef.current.pause();
      return;
    }
    const number = id.toString().padStart(3, "0") || "001";
    setSurahNumber(id || 1);
    setAudioSrc(audioServer + number + ".mp3");
    setPlayAudio(true);
  }

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }

  function handleTimeUpdate() {
    if (audioRef.current) {
      setCurrentTime(formatTime(audioRef.current.currentTime));
    }
  }

  function handleLoadedMetadata() {
    if (audioRef.current) {
      setDuration(formatTime(audioRef.current.duration));
    }
  }

  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        if (duration > 0) {
          const progressPercentage = (currentTime / duration) * 100;
          setProgress(progressPercentage);
        }
        if (progress >= 99 && playAudio) {
          if (surahNumber < surahs.length) {
            handlePlayingAudio(surahNumber + 1);
          } else {
            setPlayAudio(false);
            if (audioRef.current) audioRef.current.pause();
          }
        }
      }
    };
    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, [progress, playAudio, surahNumber, surahs.length]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleProgressClick = (e) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition = e.nativeEvent.offsetX;
      const progressBarWidth = progressBar.offsetWidth;
      const clickPercentage = clickPosition / progressBarWidth;
      audioRef.current.currentTime =
        clickPercentage * audioRef.current.duration;
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-30">
          {/* Surah List  */}
          <div className="py-12 px-4">
            <div className="container mx-auto max-w-7xl">
              {/* Reciter Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-4 shadow-xl">
                  <i className="fa-solid fa-microphone text-3xl text-white"></i>
                </div>
                <h2 className="text-4xl font-bold text-slate-800 mb-2">
                  {reciter}
                </h2>
              </div>

              {/* Search Bar */}
              <div className="max-w-2xl mx-auto mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="ابحث عن سورة..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-6 py-4 pr-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 focus:outline-none text-lg shadow-lg transition-all duration-300"
                  />
                  <i className="fa-solid fa-search absolute right-5 top-1/2 transform -translate-y-1/2 text-slate-400 text-xl"></i>
                </div>
              </div>

              {/* Surahs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-32">
                {surahs.length > 0 &&
                  surahs
                    .filter((surah) => surah.name.includes(search))
                    .map((surah) => (
                      <button
                        key={surah.id}
                        onClick={() => handlePlayingAudio(surah.id)}
                        className={`group text-right p-5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
                          surahNumber === surah.number
                            ? "bg-gradient-to-br from-emerald-500 to-teal-600 border-emerald-600 text-white"
                            : "bg-white border-slate-100 hover:border-emerald-300"
                        }`}>
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg ${
                              surahNumber === surah.number
                                ? "bg-white/20 text-white"
                                : "bg-gradient-to-br from-emerald-500 to-teal-600 text-white"
                            }`}>
                            {surah.id.toString().padStart(3, "0")}
                          </div>
                          <span
                            className={`text-lg font-semibold ${
                              surahNumber === surah.number
                                ? "text-white"
                                : "text-slate-800 group-hover:text-emerald-700"
                            }`}>
                            {surah.name}
                          </span>
                        </div>
                      </button>
                    ))}
              </div>
            </div>
          </div>

          {/* Audio Player */}
          <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-slate-900 to-slate-800 shadow-2xl border-t border-slate-700 z-50">
            <div className="container mx-auto max-w-7xl px-4 py-6">
              {/* Surah Name */}
              <h2 className="text-2xl font-bold text-white text-center mb-4">
                {surahs[surahNumber - 1]?.name || "اختر سورة"}
              </h2>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-slate-300 mb-2">
                  <span>{currentTime}</span>
                  <span>{duration}</span>
                </div>
                <div
                  onClick={handleProgressClick}
                  className="h-2 bg-slate-700 rounded-full cursor-pointer overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-300"
                    style={{ width: `${progress}%` }}></div>
                </div>
              </div>

 {/* Controls */}
              <div className="flex items-center sm:justify-between justify-center">
                {/* Left: Volume */}
                <div className="hidden md:flex items-center gap-3 flex-1">
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
                    className="w-24 accent-emerald-500"
                  />
                  <span className="text-white text-sm font-semibold">
                    {Math.round(volume * 100)}%
                  </span>
                </div>

                {/* Play Controls */}
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => handlePlayingAudio(surahNumber)}
                    className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-all duration-300">
                    <i className="fa-solid fa-backward-step text-xl"></i>
                  </button>
                  <button
                    onClick={() => {
                      if (audioRef.current) audioRef.current.currentTime -= 10;
                    }}
                    className="w-12 h-12 hidden sm:flex  bg-slate-700 hover:bg-slate-600 rounded-full items-center justify-center text-white transition-all duration-300">
                    <i className="fa-solid fa-backward text-xl"></i>
                  </button>
                  <button
                    onClick={() => {
                      if (playAudio) {
                        setPlayAudio(false);
                        if (audioRef.current) audioRef.current.pause();
                      } else {
                        setPlayAudio(true);
                        if (audioRef.current) audioRef.current.play();
                      }
                    }}
                    className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 transform hover:scale-105">
                    <i
                      className={`fa-solid ${playAudio ? "fa-pause" : "fa-play"} text-2xl`}></i>
                  </button>
                  <button
                    onClick={() => {
                      if (audioRef.current) audioRef.current.currentTime += 10;
                    }}
                    className="w-12 h-12 hidden sm:flex  bg-slate-700 hover:bg-slate-600 rounded-full items-center justify-center text-white transition-all duration-300">
                    <i className="fa-solid fa-forward text-xl"></i>
                  </button>
                  <button
                    onClick={() => handlePlayingAudio(surahNumber + 1)}
                    className="w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-all duration-300">
                    <i className="fa-solid fa-forward-step text-xl"></i>
                  </button>
                </div>

                {/* Download */}
                <div className="absolute left-4 top-1 md:relative flex items-center justify-end flex-1">
                  <a
                    href={`${audioServer}${surahNumber.toString().padStart(3, "0")}.mp3`}
                    download
                    className="w-12 h-12 md:bg-slate-700 md:hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-all duration-300">
                    <i className="fa-solid fa-download text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
            <audio
              ref={audioRef}
              src={audioSrc}
              autoPlay={playAudio}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}></audio>
          </div>
        </div>
      )}
    </>
  );
}
