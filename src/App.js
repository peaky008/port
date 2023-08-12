import logo from './logo.svg';
import './App.css';
 
import Navbar from './navbar';
import Info from './info';
import Middle from './middle';
import Footer from './footer';

function App() {
  return (
    <> 
    <Navbar/>
    <Info/>
    <Middle head="career" content="Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen in the history of the sport, he plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket."/>
    <Middle head="project" content="Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen in the history of the sport, he plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket."/>
    <Footer/>
    </>
  );
}

export default App;
