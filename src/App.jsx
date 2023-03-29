import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter } from "react-router-dom";
import Cards from "./components/Cards";
import SimpleSlider from "./components/Carrousel";
import ContactForm from "./components/ContactForm";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Navbar from "./components/Navbar";
import Powered from "./components/Powered";
import Principal from "./components/Principal";
import Segundo from "./components/Segundo";
import "./styles/Main.css"




function App() {
  return (
    <>
    <BrowserRouter>
    <div className="nav-container"> 
     <Navbar/>  
    </div>

     {/* <div className="pri-container"> 
      <Principal/>
     </div> */}
     <SimpleSlider/>
     <div className="seg-container"> 
     <Segundo/>
     </div>
     <div className="powered-container">
        <Powered style={{ marginLeft: 0 }} />
     </div>
     {/* <div className="car-container">
     <Cards/>
     </div> */}
     <div className="faq-container">
     <Faqs/>
     </div>
     <ContactForm/>
     <div className="foo-container">

     <Footer/>
     </div>
   </BrowserRouter>
    </>
     
  );
}

export default App;
