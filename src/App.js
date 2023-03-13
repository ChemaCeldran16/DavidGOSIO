import './App.css';
import BotonBooleano from './componentes/BotonBooleano';
import BotonFruta from './componentes/BotonFruta';
import BotonMes from './componentes/BotonMes';
import LogoEmpresaBien from './static/LogoEmpresaBien.png'
import React, { Component } from "react";
import axios from 'axios';




class App extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    const fruta = document.getElementById("BotonFruta");
    const mes = document.getElementById("BotonMes");
    const recolectar = document.getElementById("BotonFrutaParaRecolectar");
    const plagas = document.getElementById("BotonPlagas");
    const personas = document.getElementById("BotonPersonasFinca");
    const puertasAbiertas = document.getElementById("BotonPuertasAbiertas");
    const MalEstado = document.getElementById("BotonProductoMalEstado");
    const BajaCantidad = document.getElementById("BotonBajaCantidadProducto");
    const MalaHierba = document.getElementById("BotonMalasHierbas");
    const AltaCantidad = document.getElementById("BotonAltaCantidadProducto");
    const Lloviendo = document.getElementById("BotonLloviendo");
    const Viento = document.getElementById("BotonViento");
    console.log(fruta.value);
    console.log(mes.value);
    console.log(recolectar.value);
    console.log(plagas.value);
    console.log(personas.value);
    console.log(puertasAbiertas.value);
    console.log(MalEstado.value);
    console.log(BajaCantidad.value);
    console.log(MalaHierba.value);
    console.log(AltaCantidad.value);
    console.log(Lloviendo.value);
    console.log(Viento.value);

    
  }


  render(){
    return (
      <div className='container-fluid' style={{ backgroundColor: '#0CCC4F' }} id='PanelFrontal'>
        <div className='row ' id='PrimeraFila'>
          <div className='col-5 m-3' id='ColumnaImagen'>
            <img src={LogoEmpresaBien} />
          </div>
          <div className='col align-self-center' id='ColumnaTitulo' >
            <h1 >Aplicacion Agricola</h1>
          </div>
        </div>
        <div className='row mt-5' id='SegundaFila'>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              Seleccione el fruto
            </p>
            <BotonFruta id="BotonFruta"/>
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              Seleccione el mes
            </p>
            <BotonMes id="BotonMes"/>
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Esta la fruta para recolectar?
            </p>
            <BotonBooleano id="BotonFrutaParaRecolectar"/>
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Hay plagas?
            </p>
            <BotonBooleano id="BotonPlagas"/>
          </div>
        </div>
        <div className='row mt-5' id='TerceraFila'>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Hay personas en la finca?
            </p>
            <BotonBooleano id="BotonPersonasFinca" />
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Estan las puertas abiertas?
            </p>
            <BotonBooleano id="BotonPuertasAbiertas"/>
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Está la produccion en mal estado?
            </p>
            <BotonBooleano id="BotonProductoMalEstado"/>
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Hay baja cantidad de producto?
            </p>
            <BotonBooleano id="BotonBajaCantidadProducto"/>
          </div>
        </div>
        <div className='row mt-5' id='CuartaFila'>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Hay malas hierbas?
            </p>
            <BotonBooleano id="BotonMalasHierbas"/>
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Hay alta cantidad de producto?
            </p>
            <BotonBooleano id="BotonAltaCantidadProducto"/>
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center' >
              ¿Está lloviendo?
            </p>
            <BotonBooleano id="BotonLloviendo"/>
          </div>
          <div className='col-3'>
            <p className='fw-bolder' align='center'>
              ¿Hace viento?
            </p>
            <BotonBooleano id="BotonViento"/>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col' align='center' >
          <button type="button" className="btn btn-primary btn-lg"
            style={{ backgroundColor : '#158F40', border: 'none'}}
            onClick={this.handleSubmit}
            >Enviar Informacion</button>
            {/* <BotonEnvioInfo id="BotonEnvioInfo" /> */}
          </div>
        </div>
        <div className='row m-5'>
          <h5>
              Acciones a llevar a cabo
          </h5>
        </div>
      </div>
  
  
    );
  
  }
  
}

export default App;
