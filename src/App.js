//Basic React set up
import './App.css';
//React component for navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Universal components to be rendered on all pages
import Footer from "./components/Footer";
import NavTabs from "./components/NavTabs";

//Pages to be displayed
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";

import Portfolio from "./portfolio";

function App () {
  return ( 
    <div className="cust-background">
    {/* Wrap page elements in Router component to keep track of location state */}
    <Router> 
      <NavTabs />
      <main>
        {/* Define routes to render different page components at different paths */}
        <Routes>
          <Route exact path="/" element={<Home data={Portfolio.home}/>} />
          <Route exact path="/projects" element={<ProjectList data={Portfolio.projectList}/>} />
          <Route exact path="/about" element={<About data={Portfolio.about}/>} />
          <Route exact path="/contact" element={<Contact data={Portfolio.contact}/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </div>
  )
}
export default App;
