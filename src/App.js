import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';

import Landing from './views/Landing';
import Conocenos from './views/Conocenos';
import Contactenos from './views/Contactenos';
import Contribuciones from './views/Contribuciones';
import Equipo from './views/Equipo';
import Formacion from './views/Formacion';
import Ministerios from './views/Ministerios';
import Palabra from './views/Palabra';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/contactenos" element={<Contactenos />} />
        <Route path="/contribuciones" element={<Contribuciones />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/formacion" element={<Formacion />} />
        <Route path="/ministerios" element={<Ministerios />} />
        <Route path="/palabra" element={<Palabra />} />
      </Routes>
    </Router>
  );
}

export default App;
