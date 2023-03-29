import React, { Component} from "react";
import Slider from "react-slick";
import "../styles/Carrousel.css"
import Cards from "./Cards";
import "../styles/Cards.css"
import Lottie from 'lottie-web'
import Principal from "./Principal";


export default class SimpleSlider extends Component {

    state = {
        currentSlide: 0
      };

    handleSlideChange = (index) => {
        this.setState({ currentSlide: index });
      }
      
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      afterChange: this.handleSlideChange
    };


    return (
      <section className="car-section">
        
        <Slider className="sliderCar" {...settings}>
        <div className='textosCar'>
        <Principal/>

            <div className='tituloCar'>
                <span className='primeraParteCar'> ¿CLOUD HOSTING y precios accesibles para tu sitio web? </span>  Prueba nuestros servicios de cloud descentralizado y ahorra en costos de alojamiento.
            </div>
            <div className='subtituloCar'>
                Our decentralized cloud hosting service offers you the ability to scale your applications and data without the need for a centralized data center. Say goodbye to high costs and enjoy the benefits of distributed computing
            </div>
        </div>
        <div className='textosCar'>
        <Principal/>

<div className='tituloCar'>
    <span className='primeraParteCar'> ¿WEB HOSTING y precios accesibles para tu sitio web? </span>  Prueba nuestros servicios de cloud descentralizado y ahorra en costos de alojamiento.
</div>
<div className='subtituloCar'>
    Our decentralized cloud hosting service offers you the ability to scale your applications and data without the need for a centralized data center. Say goodbye to high costs and enjoy the benefits of distributed computing
</div>
</div>
<div className='textosCar'>
<Principal/>

<div className='tituloCar'>
    <span className='primeraParteCar'> ¿GAME SERVERS y precios accesibles para tu sitio web? </span>  Prueba nuestros servicios de cloud descentralizado y ahorra en costos de alojamiento.
</div>
<div className='subtituloCar'>
    Our decentralized cloud hosting service offers you the ability to scale your applications and data without the need for a centralized data center. Say goodbye to high costs and enjoy the benefits of distributed computing
</div>
</div>

        </Slider>
        <section className='card-contenedor'> 
    <div className={ this.state.currentSlide === 0 ? 'card3-selected' : 'card3'}>
      <div className='titulo-card'>
        Cloud Hosting
      </div>
    </div>
    <div className={ this.state.currentSlide === 1 ? 'card3-selected' : 'card3'}>
      <div className='titulo-card'>
        Web Hosting
      </div>
      </div>
      <div className={ this.state.currentSlide === 2 ? 'card3-selected' : 'card3'}>
      <div className='titulo-card'>
       Game Servers
      </div>
      </div>
    </section>
      </section>
    );
  }
}