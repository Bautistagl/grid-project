import { BrowserRouter } from "react-router-dom";
import Cards from "./components/Cards";
import ContactForm from "./components/ContactForm";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Guarantee from "./components/Guarantee";
import Navbar from "./components/Navbar";
import Powered from "./components/Powered";
import Principal from "./components/Principal";
import Segundo from "./components/Segundo";



function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar/>  
     <Principal/>
     <Segundo/>
     <Powered/>
     <Cards/>
     {/* <Guarantee/> */}
     <Faqs/>
     <ContactForm/>
     <Footer/>
   </BrowserRouter>
    </>
     
  );
}

export default App;
