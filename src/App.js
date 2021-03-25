import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Fruta from './components/Frutas'



//También se puede laburar con componentes creados de diversas formas
class Saludos extends Component{ constructor(){ super(); }

 render(){return(<div>
   
    <h2>hello</h2>
    <h2>{this.props.name} apellido : {this.props.apellido}</h2>
   </div>)}

}
//Se puede laburar con funciónes
const prueba = (n,a)=>{  return `Bienvenido ${n} ${a}` }


//Esto se puede trabajar con clases.
class App extends Component {

  nombre= "mello"; //al parecer no hace falta aclarar que son tipos de variables
  apellido = "lefloth";
  constructor(){
    super()
  }
  render(){ // cuando se labura con clases tenemos que poner este tipo de function para que se haga el renderizado
      return( //Siempre se debe de retornar un JSX aquí adentro
        <div>
          <h2>{prueba(this.nombre,this.apellido)}</h2>  {/*tambien podría usarse el this.nombre en ese caso  */}
          <Saludos name="Victor" apellido="Melhouza"/>{/*Tambien se pueden hacer con PROPS*/}

          <Fruta />
          <Fruta name = "Banana" price='5'/>


        </div>
      )
  }
}




export default App;
