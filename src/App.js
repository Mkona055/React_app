import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import logo from './icons/logoScore2.png'
import tvLogo from './icons/tv.png'
import scoreAc from './icons/scoreAc.png'
import book from './icons/book.png'
import find from './icons/find.png'
import about from './icons/about.png'
import langIcon from './icons/globe.png'
import ScoreTv from './ScoreTv';
import Academy from './Academy';
import Book from './Book';
import Home from './Home';
import BlogDetails from './BlogDetails';
import NotFound from './NotFfound';
import Create from './Create';
import About from './About';
import {useTranslation } from "react-i18next";

function App() {
  
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <Router>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat" rel="stylesheet"></link>
      
        <div className="App">
            <div className="header">
              <Navbar  expand="lg" bg="light" variant="dark">
                <a href ="/">
                  <img className="logo" src={logo} alt="logo"/>
                </a>
                <div className="account">
                  
                  <form>
                  <img src={langIcon} alt="logo"/>
                    <select className ="connexion"  onChange ={(e)=>changeLanguage(e.target.value)} >
                      <option value = 'fr'>Français</option>
                      <option value = 'en'>English</option>
                    </select>

                   
                    
                  </form>
                  
                </div>
                        
              </Navbar>    
              <Navbar  collapseOnSelect expand="lg" bg="success" variant="dark">      
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link className="NavEntries" href="/scoretv"><img src={tvLogo} alt="tv"/>{t("navbar.TV")}</Nav.Link>
                    <Nav.Link className="NavEntries" href="/academy"><img src={scoreAc} alt="scoreAc"/>{t("navbar.academy")}</Nav.Link>
                    <Nav.Link className="NavEntries" href="/book"><img src={book} className="book" alt="book"/>{t("navbar.book")}</Nav.Link>
                    <Nav.Link className="NavEntries" href="/searchPlayers"><img src={find} alt="find"/>{t("navbar.findPlayers")}</Nav.Link>
                    <Nav.Link className="NavEntries" href="/"><img src={about} alt="about"/>{t("navbar.aboutUs")}</Nav.Link>
                
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
            <div className="content">
              <Switch key="switch">
                <Route exact path = "/scoretv">
                  <ScoreTv/>
                </Route>
                <Route exact path = "/academy">
                  <Academy/>
                </Route >
                <Route exact path = "/book">
                  <Book/>
                </Route>
                <Route exact path = "/searchplayers">
                  <Home/>
                </Route>
                <Route exact path = "/blogs/:id">
                  <BlogDetails/>
                </Route>
                <Route exact path = "/create">
                  <Create/>
                </Route>
                <Route exact path = "/">
                  <About t={t}/>
                </Route>
                <Route path ="*">
                  <NotFound/>
                </Route>
              </Switch>
            </div>
        </div>
      
      
    </Router>
    
  );
}

export default App;
