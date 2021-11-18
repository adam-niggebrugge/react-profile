//Basic React set up
import './App.css';
//React component for navigation
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Universal components to be rendered on all pages
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";

//Pages to be displayed
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import ProjectList from "./pages/ProjectList";

function App () {
  return ( 
    <>
    {/* Wrap page elements in Router component to keep track of location state */}
    <Router> 
      <Header />
      <NavTabs />
      <main className="cust-background">
        {/* Define routes to render different page components at different paths */}
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/projects" element={<ProjectList/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}
export default App;
