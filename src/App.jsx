import './App.css';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import PageNotFound from './components/PageNotFound';
import { Routes, Route } from 'react-router';
import { useState } from 'react';
import FaqPageBus from './pages/FaqPageBus';
import FaqPageMentees from './pages/FaqPageMentees';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSideBar = () => setIsOpen(false);

  function handleToggle() {
    setIsOpen(cur => !cur);
  }

  return (
    <>
      <div className="relative">
        <NavBar isOpen={isOpen} onOpen={handleToggle} />
        {isOpen && <SideBar isOpen={isOpen} closeSideBar={closeSideBar} />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faqs" element={<FaqPageBus />} />
          <Route path="faqstutorial" element={<FaqPageMentees />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
