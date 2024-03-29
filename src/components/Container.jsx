import { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer'
import Resume from '../pages/Resume';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import "../styles/style.css" 


export default function Container() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Contact') {
        return <Contact />;
      }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="mx-3">{renderPage()}</main>
      <Footer/>
    </div>
  );
}
