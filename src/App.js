import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { unmountComponentAtNode } from 'react-dom';



/*los ESTADOS: Es un objeto que representa el estado actual de un componente */ 
class Fruta extends Component {

constructor(){
  super();

  this.state = { //Se pueden definir un objeto con las propiadeades que quereamos
    cantidad : 1,
  }
}

agregar(){

  this.setState({cantidad : this.state.cantidad + 1})
}

render(){
return(

<div>

  
  <h3>{this.props.name}</h3>
  <h4>Cantidad : {this.state.cantidad}</h4>     {/*//No es buena práctica tener eventos con flechas. el setState vuelve a renderizar SOLO lo que se modificó en el elemento dentro del DOM */}
    <button onClick={this.agregar.bind(this)}>      {/*El this.agregar no podría referirse al botón , hay que ponerle el  .bind para que el this.agregar funcione. se fuerza a que el this. agregar lo busque dentro de la clase y no dentro de el método agregar()*/}
  
      Agregar 
    </button>
  <p>${this.props.price}</p>
</div>

);



}

}









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
          <Fruta name = "Banana"/>


        </div>
      )
  }
}




export default App;
