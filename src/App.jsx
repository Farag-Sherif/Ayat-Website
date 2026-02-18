
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Pages/Home/Home'
import PrayerTimes from './Pages/Prayer times/PrayerTimes'
import Quran from './Pages/Quran/Quran'
import Surah from './Pages/Quran/Suwar/Suwer'
import AudioQuran from './Pages/Audio Quran/AudioQuran'
import Audio from './Pages/Audio Quran/Audio/Audio'
import Footer from './Component/Footer/Footer'
import Azkar from './Pages/Azkar/Azkar'
import FavoriteVerses from './Pages/FavoriteVerses/FavoriteVerses'
import QuestionsAnswers from './Pages/QuestionsAnswers/QuestionsAnswers'
import ReadQuran from './Pages/ReadQuran/ReadQuran'
import Radio from './Pages/Radio/Radio'
import Hadith from './Pages/Hadith/Hadith'

function App() {
    const location = useLocation();
    const pathName = location.pathname.split("/")[1];
    console.log(pathName);

  return (
    <>
      {pathName !== "surah" && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prayer-times" element={<PrayerTimes />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/surah/:id/:name" element={<Surah />} />
        <Route path="/audio-quran" element={<AudioQuran />} />
        <Route path="/audio-quran/:reciter" element={<Audio />} />
        <Route path="/radio" element={<Radio />} />
        <Route path="/azkar" element={<Azkar />} />
        <Route path="/Hadith" element={<Hadith/>} />
        <Route path="/favorite-verses" element={<FavoriteVerses />} />
        <Route path="/questions-answers" element={<QuestionsAnswers />} />
        <Route path="/read-quran" element={<ReadQuran />} />
      </Routes>
      {pathName !== "surah" && <Footer />}
    </>
  );
}

export default App
