// import logo from './logo.svg';
import './App.css';
import Header from './header';
import Profile from './profileCard';
import ReactCarousel from './carousel';
import Skills from './skills';
import Footer from './footer';

function App() {
  return (
    <div>
    <Header></Header>
    <Profile></Profile>
    <ReactCarousel 
       qoute1="Do Not Try" author1="~Mark Manson" 
       qoute2="Respect Everyone" author2="~Buddha" 
       qoute3="Process is more Important" author3="~MS Dhoni"
       qoute4="*tha Pathukalam" author4="~Agent Vikram"
     >
    </ReactCarousel>
    <Skills></Skills>
    <Footer></Footer>
    
   
    </div>
  );
}

export default App;
