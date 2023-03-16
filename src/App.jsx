import { BrowserRouter } from "react-router-dom";
import Cards from "./components/Cards";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
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
     <Faqs/>
     <Footer/>
   </BrowserRouter>
    </>
     
  );
}

export default App;
