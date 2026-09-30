import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes, useLocation } from 'react-router-dom';
import './styles.css';
import { AppProvider } from './components/AppState.jsx';
import Layout from './jal/Layout.jsx';
import Home from './jal/Home.jsx';
import Explore, { Chapter } from './jal/Explore.jsx';
import Species, { SpeciesDetail } from './jal/Species.jsx';
import Tools, { ToolDetail, SystemCompare } from './jal/Tools.jsx';
import Records from './jal/Records.jsx';
import { Saved, Search, Decision, Solar, SolarDetail, Stories, Glossary } from './jal/Misc.jsx';
import Handbook from './handbook/Handbook.jsx';
import Event from './jal/Event.jsx';

const TITLES = { '/handbook': 'India Fisheries Handbook — Interactive Digital Edition', '/event': 'Catalysing Climate Action in Fisheries — National Convening' };

function ScrollAndTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = TITLES[pathname] || 'Jal Pathways — Fisheries & Aquaculture Field Platform';
  }, [pathname]);
  return null;
}

function App() {
  return (
    <HashRouter>
      <AppProvider>
        <ScrollAndTitle />
        <Routes>
          <Route path="/handbook" element={<Handbook />} />
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="event" element={<Event />} />
            <Route path="explore" element={<Explore />} />
            <Route path="chapter/:id" element={<Chapter />} />
            <Route path="species" element={<Species />} />
            <Route path="species/:id" element={<SpeciesDetail />} />
            <Route path="tools" element={<Tools />} />
            <Route path="tools/:id" element={<ToolDetail />} />
            <Route path="compare" element={<SystemCompare />} />
            <Route path="records" element={<Records />} />
            <Route path="saved" element={<Saved />} />
            <Route path="search" element={<Search />} />
            <Route path="decide" element={<Decision />} />
            <Route path="solar" element={<Solar />} />
            <Route path="solar/:id" element={<SolarDetail />} />
            <Route path="stories" element={<Stories />} />
            <Route path="glossary" element={<Glossary />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </AppProvider>
    </HashRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
