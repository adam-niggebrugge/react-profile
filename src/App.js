//Basic React set up
import './App.css';
//React component for navigation
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    <Router> 
      <Header />
      <NavTabs />
      <main className="cust-background">
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={ProjectList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </main>
    <Footer />
    </Router>
  )
}
export default App;
