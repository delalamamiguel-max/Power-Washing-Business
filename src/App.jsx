import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import TrustBar from './components/sections/TrustBar';
import ServicesSection from './components/sections/ServicesSection';
import HowItWorks from './components/sections/HowItWorks';
import PricingGuide from './components/sections/PricingGuide';
import Gallery from './components/sections/Gallery';
import FinalCTA from './components/sections/FinalCTA';
import Modal from './components/ui/Modal';
import ScheduleForm from './components/forms/ScheduleForm';
import QuoteForm from './components/forms/QuoteForm';
import { CheckCircle } from 'lucide-react';

function App() {
  const [activeModal, setActiveModal] = useState(null); // 'quote', 'schedule', 'quote-success', 'schedule-success'

  const openQuote = () => setActiveModal('quote');
  const openSchedule = () => setActiveModal('schedule');
  const closeModal = () => setActiveModal(null);

  const handleQuoteSuccess = () => setActiveModal('quote-success');
  const handleScheduleSuccess = () => setActiveModal('schedule-success');

  const renderSuccessState = (title, message) => (
    <div style={{ textAlign: 'center', padding: '2rem 0' }}>
      <CheckCircle size={64} color="var(--color-green-accent)" style={{ margin: '0 auto 1.5rem auto' }} />
      <h3>{title}</h3>
      <p style={{ marginTop: '1rem', color: 'var(--color-text-light)' }}>{message}</p>
    </div>
  );

  return (
    <div className="App">
      <Navbar onOpenQuote={openQuote} onOpenSchedule={openSchedule} />
      
      <main>
        <HeroSection onOpenQuote={openQuote} onOpenSchedule={openSchedule} />
        <TrustBar />
        <ServicesSection />
        <HowItWorks />
        <PricingGuide />
        <Gallery />
        <FinalCTA onOpenQuote={openQuote} onOpenSchedule={openSchedule} />
      </main>

      <Footer />

      {/* Quote Modal */}
      <Modal isOpen={activeModal === 'quote'} onClose={closeModal} title="Get a Free Quote">
        <QuoteForm onSuccess={handleQuoteSuccess} />
      </Modal>

      {/* Schedule Modal */}
      <Modal isOpen={activeModal === 'schedule'} onClose={closeModal} title="Schedule a Visit">
        <ScheduleForm onSuccess={handleScheduleSuccess} />
      </Modal>

      {/* Success Modals */}
      <Modal isOpen={activeModal === 'quote-success'} onClose={closeModal}>
        {renderSuccessState("Quote Request Received!", "Thanks! We're reviewing your details and will send a quote shortly.")}
      </Modal>

      <Modal isOpen={activeModal === 'schedule-success'} onClose={closeModal}>
        {renderSuccessState("Visit Scheduled!", "We'll be in touch to confirm your visit shortly.")}
      </Modal>
    </div>
  );
}

export default App;
