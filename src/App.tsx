import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCallButton from '@/components/StickyCallButton';

import HomePage from '@/pages/HomePage';
import ServiceAreasPage from '@/pages/ServiceAreasPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';
import LocationPage from '@/pages/LocationPage';

// Grand Junction service pages
import ResidentialHomeRepairGJ from '@/pages/services/ResidentialHomeRepairGJ';
import PlumbingRepairGJ from '@/pages/services/PlumbingRepairGJ';
import DrainRepairGJ from '@/pages/services/DrainRepairGJ';
import WaterHeaterServiceGJ from '@/pages/services/WaterHeaterServiceGJ';
import FaucetRepairGJ from '@/pages/services/FaucetRepairGJ';
import ToiletRepairGJ from '@/pages/services/ToiletRepairGJ';
import ElectricalRepairGJ from '@/pages/services/ElectricalRepairGJ';
import LightingRepairGJ from '@/pages/services/LightingRepairGJ';
import HvacRepairGJ from '@/pages/services/HvacRepairGJ';
import HomeMaintenanceGJ from '@/pages/services/HomeMaintenanceGJ';
import DrywallRepairGJ from '@/pages/services/DrywallRepairGJ';
import CarpentryRepairGJ from '@/pages/services/CarpentryRepairGJ';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* Grand Junction service pages */}
          <Route path="/residential-home-repair-grand-junction" element={<ResidentialHomeRepairGJ />} />
          <Route path="/plumbing-repair-grand-junction" element={<PlumbingRepairGJ />} />
          <Route path="/drain-repair-grand-junction" element={<DrainRepairGJ />} />
          <Route path="/water-heater-service-grand-junction" element={<WaterHeaterServiceGJ />} />
          <Route path="/faucet-repair-grand-junction" element={<FaucetRepairGJ />} />
          <Route path="/toilet-repair-grand-junction" element={<ToiletRepairGJ />} />
          <Route path="/electrical-repair-grand-junction" element={<ElectricalRepairGJ />} />
          <Route path="/lighting-repair-grand-junction" element={<LightingRepairGJ />} />
          <Route path="/hvac-repair-grand-junction" element={<HvacRepairGJ />} />
          <Route path="/home-maintenance-grand-junction" element={<HomeMaintenanceGJ />} />
          <Route path="/drywall-repair-grand-junction" element={<DrywallRepairGJ />} />
          <Route path="/carpentry-repair-grand-junction" element={<CarpentryRepairGJ />} />

          {/* Location pages — Fruita */}
          <Route path="/home-repair-fruita" element={
            <LocationPage city="Fruita" slug="fruita" pageType="home-repair"
              extraContent="Fruita is a growing community just west of Grand Junction along the Colorado River corridor, known for its mountain biking trails and outdoor lifestyle. Homeowners in Fruita benefit from the same pool of qualified independent residential service providers that serve the Grand Junction area."
            />
          } />
          <Route path="/maintenance-repair-fruita" element={
            <LocationPage city="Fruita" slug="fruita" pageType="maintenance-repair"
              extraContent="Fruita's climate mirrors Grand Junction's — hot, dry summers and cold winters — making seasonal home maintenance particularly important. Independent local providers available through our network can help keep your Fruita home in excellent condition year-round."
            />
          } />

          {/* Palisade */}
          <Route path="/home-repair-palisade" element={
            <LocationPage city="Palisade" slug="palisade" pageType="home-repair"
              extraContent="Palisade is renowned for its peach orchards and wine country east of Grand Junction. Residential homes in Palisade range from historic older properties to newer builds, all of which benefit from access to qualified independent local repair providers."
            />
          } />
          <Route path="/maintenance-repair-palisade" element={
            <LocationPage city="Palisade" slug="palisade" pageType="maintenance-repair"
              extraContent="Palisade homeowners benefit from the same network of independent residential maintenance providers that serves the greater Grand Junction area. From seasonal inspections to ongoing upkeep, local professionals are available to help maintain your Palisade home."
            />
          } />

          {/* Clifton */}
          <Route path="/home-repair-clifton" element={
            <LocationPage city="Clifton" slug="clifton" pageType="home-repair"
              extraContent="Clifton is an unincorporated community in Mesa County between Grand Junction and Palisade, with a mix of residential neighborhoods and housing. Local independent providers serving Grand Junction also cover the Clifton area for residential home repairs."
            />
          } />
          <Route path="/maintenance-repair-clifton" element={
            <LocationPage city="Clifton" slug="clifton" pageType="maintenance-repair"
              extraContent="Clifton residents have convenient access to independent residential maintenance providers through our Grand Junction-based network. Our free connection service covers the Clifton area for all types of home maintenance and repair needs."
            />
          } />

          {/* Orchard Mesa */}
          <Route path="/home-repair-orchard-mesa" element={
            <LocationPage city="Orchard Mesa" slug="orchard-mesa" pageType="home-repair"
              extraContent="Orchard Mesa is a residential community south of Grand Junction along the Colorado River. Its established neighborhoods feature homes of various ages, many of which benefit from regular maintenance and timely repairs by qualified local independent providers."
            />
          } />
          <Route path="/maintenance-repair-orchard-mesa" element={
            <LocationPage city="Orchard Mesa" slug="orchard-mesa" pageType="maintenance-repair"
              extraContent="Orchard Mesa homeowners can connect with available independent residential maintenance providers through our free service. Whether your home needs seasonal upkeep or specific repairs, local providers familiar with Mesa County residential properties are ready to help."
            />
          } />

          {/* Loma */}
          <Route path="/home-repair-loma" element={
            <LocationPage city="Loma" slug="loma" pageType="home-repair"
              extraContent="Loma is a rural Mesa County community west of Fruita. Homeowners in the Loma area can connect with independent local providers through our Grand Junction-based free connection service for residential home repairs of all types."
            />
          } />

          {/* Mack */}
          <Route path="/home-repair-mack" element={
            <LocationPage city="Mack" slug="mack" pageType="home-repair"
              extraContent="Mack is a small Mesa County community west of Grand Junction near the Utah border. Our free connection service extends to the Mack area, helping residential homeowners find available independent local repair providers."
            />
          } />

          {/* Whitewater */}
          <Route path="/home-repair-whitewater" element={
            <LocationPage city="Whitewater" slug="whitewater" pageType="home-repair"
              extraContent="Whitewater is a rural community southeast of Grand Junction in Mesa County. Our free residential service connection covers Whitewater, helping homeowners in the area find available independent local providers for their repair and maintenance needs."
            />
          } />

          {/* Misc */}
          <Route path="/service-areas" element={<ServiceAreasPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <StickyCallButton />
    </BrowserRouter>
  );
}
