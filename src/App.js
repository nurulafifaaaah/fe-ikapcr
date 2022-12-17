import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from './components/inc/NavigationBar';
import Hero from './components/inc/Hero';
import Footer from './components/inc/Footer';
import Main from './components/inc/Main';
import Login from './components/pages/Login';
import Daftar from './components/pages/Daftar';
import Galeri from './components/pages/Galeri';
import Beranda from './components/pages/Beranda';
import VisiMisi from './components/pages/Profil/VisiMisi';
import SekapurSirih from './components/pages/Profil/SekapurSirih';
import FAQ from './components/pages/Tentang/Faq';
import Kontak from './components/pages/Tentang/Kontak';
import KisahAlumni from './components/pages/Alumni/KisahAlumni';
import Loker from './components/pages/Loker/Loker';
import Agenda from './components/pages/Agenda/Agenda';
import StrukturOrganisasi from './components/pages/Profil/StrukturOrganisasi';
import ProgjaDepartment from './components/pages/Profil/ProgjaDepartment';
import Statistik from './components/pages/Alumni/Statistik';
import UsahaAlumni from './components/pages/Alumni/UsahaAlumni';
import Berita from './components/pages/Berita/Berita';
import ProfilAlumni from './components/pages/ProfilAlumni';
import BeritaDetail from './components/pages/Berita/BeritaDetail';
import AgendaDetail from './components/pages/Agenda/AgendaDetail';
import LokerDetail from './components/pages/Loker/LokerDetail';
import KisahAlumniDetail from './components/pages/Alumni/KisahAlumniDetail';
import UsahaAlumniDetail from './components/pages/Alumni/UsahaAlumniDetail';


function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Beranda />}/>
          <Route path="galeri" element={<Galeri />} />
          <Route path="visimisi" element={<VisiMisi />} />
          <Route path="kisahalumni" element={<KisahAlumni />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="loker" element={<Loker />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="sekapursirih" element={<SekapurSirih />} />
          <Route path="daftar" element={<Daftar />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="strukturorganisai" element={<StrukturOrganisasi />} />
          <Route path="progjadepartment" element={<ProgjaDepartment />} />
          <Route path="usahaalumni" element={<UsahaAlumni />} />
          <Route path="statistik" element={<Statistik />} />
          <Route path='berita' element={<Berita />}/>
          <Route path='profilalumni' element={<ProfilAlumni/>}/>
          <Route path='beritadetail' element={<BeritaDetail/>}/>
          <Route path='agendadetail' element={<AgendaDetail/>}/>
          <Route path='kisahalumnidetail' element={<KisahAlumniDetail/>}/>
          <Route path='usahaalumnidetail' element={<UsahaAlumniDetail/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
