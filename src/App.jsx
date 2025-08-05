// import { useState } from 'react';
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

{
  /* <Routes>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />

  <Route element={<AuthLayout />}>
    <Route path="login" element={<Login />} />
    <Route path="register" element={<Register />} />
  </Route>

  <Route path="concerts">
    <Route index element={<ConcertsHome />} />
    <Route path=":city" element={<City />} />
    <Route path="trending" element={<Trending />} />
  </Route>
</Routes>; */
}

function App() {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(cur => !cur);
  }

  return (
    <>
      <div className="relative">
        <NavBar onOpen={handleToggle} />
        {isOpen && <SideBar />}
        <Routes>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
