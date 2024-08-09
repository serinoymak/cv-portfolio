import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cv from './pages/Cv';
import SchoolProjects from './pages/SchoolProjects';
import Freelance from './pages/Freelance';
import VillaProjectUrla from './pages/VillaProjectUrla';
import UrbanRenewalAydin from './pages/UrbanRenewalAydin';
import HousingNazilli from './pages/HousingNazilli';
import UrbanMemory from './pages/UrbanMemory';
import PdmSchool from './pages/PdmSchool';
import Kinehex from './pages/Kinehex';
import ConstructionDrawings from './pages/ConstructionDrawings';
import ConstructionProject from './pages/ConstructionProject';
import ShellStructure from './pages/ShellStructure';
import GastronomyandKitchenArt from './pages/GastronomyandKitchenArt';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
          <Route path="/school-projects" element={<SchoolProjects />} />
          <Route path="/freelance" element={<Freelance />} />
          <Route path="/villa-project-urla" element={<VillaProjectUrla />} />
          <Route path="/urban-renewal-aydin" element={<UrbanRenewalAydin />} />
          <Route path="/housing-nazilli" element={<HousingNazilli />} />
          <Route path="/urban-memory" element={<UrbanMemory />} />
          <Route path="/pdm-school" element={<PdmSchool />} />
          <Route path="/gastronomy-and-kitchen-art" element={<GastronomyandKitchenArt />} />
          <Route path="/shell-structure" element={<ShellStructure />} />
          <Route path="/kinehex" element={<Kinehex />} />
          <Route path="/construction-project" element={<ConstructionProject />} />
          <Route path="/construction-drawings" element={<ConstructionDrawings />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
